import { createSelector } from 'reselect';
import forEach from 'lodash/forEach';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import pickBy from 'lodash/pickBy';
import sortBy from 'lodash/sortBy';
import intercept from 'intercept-client';

const { constants } = intercept;
const c = constants;

export const getIdentifier = (type, id) => ({
  type,
  id,
});

//
// Date Functions
//

// Make sure the current value is a valid date object.
export const ensureDate = date => (date instanceof Date ? date : new Date(date));
// Normalize a date object to a single day. Used to compare days for different dates.
export const getDayTimeStamp = date => ensureDate(date).setHours(0, 0, 0, 0);
// Get a formatted date string.
export const getDayDisplay = (date) => {
  const d = getDayTimeStamp(date);

  // Today
  if (d === getDayTimeStamp(new Date())) {
    return 'Today';
  }
  // Tommorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (d === getDayTimeStamp(tomorrow)) {
    return 'Tomorrow';
  }
  // Friday, October 20, 2017
  return moment(date).format('dddd, MMMM D, YYYY');
};

// Get a formatted time string.
export const getTimeDisplay = date =>
  // 2p.m.
  moment(date)
    .format('h:mm a')
    .replace('m', '.m.');

/**
 * Returns an array of published records.
 *
 * @param {function} selector
 *  A records selector.
 * @returns {array}
 *  An array of published records.
 */
export const published = selector =>
  createSelector(selector, items =>
    pickBy(items, item => get(item, 'data.attributes.status') === '1'),
  );

export const peek = (selector, path) =>
  createSelector(selector, items => mapValues(items, item => get(item, path)));

export const keyValues = (selector, path) =>
  createSelector(selector, items =>
    map(items, (item, key) => ({
      key,
      value: get(item, path),
    })),
  );

export const record = identifier => state => state[identifier.type].items[identifier.id];

export const records = type => state => state[type].items;

export const recordIds = selector =>
  createSelector(selector, items => map(items, item => get(item, 'data.id')));

export const recordIsLoading = (type, id) =>
  createSelector(record(getIdentifier(type, id)), item => item.state.syncing);

export const recordsAreLoading = resource => state => state[resource].syncing;

export const recordLabel = identifier =>
  createSelector(
    record(identifier),
    item => get(item, 'data.attributes.title') || get(item, 'data.attributes.name'),
  );

export const recordOptions = type =>
  createSelector(records(type), items =>
    sortBy(
      map(items, item => ({
        key: item.data.id,
        value: get(item, 'data.attributes.title') || get(item, 'data.attributes.name'),
      })),
      i => i.value,
    ),
  );

// Converts the records object into an Array.
export const recordsList = type =>
  createSelector(records(type), items => map(items, item => item));

export const bundle = identifier => (state) => {
  if (identifier.type in state === false) {
    return identifier;
  }

  const base = record(identifier)(state);
  // Just return an id if no record is found.
  // @todo This should probably be handled better and a warning or exception thrown
  //  as it could result in unintended side effects.
  if (!base) {
    return identifier;
  }

  // Create temporary entity.
  const entity = cloneDeep(base.data);
  const relationships = base.data.relationships;
  const selectors = [];

  forEach(relationships, (resourceIdentifier, rel) => {
    if (!resourceIdentifier.data) {
      return;
    }
    const relData = entity.relationships[rel].data;
    // Replace the uuid with the entity object.
    if (Array.isArray(relData)) {
      selectors.concat(relData.map(item => bundle(item)));
      entity.relationships[rel] = relData.map(item => bundle(item)(state));
    }
    else {
      selectors.push(bundle(relData));
      entity.relationships[rel] = bundle(relData)(state);
    }
  });

  return createSelector([record(identifier), ...selectors], () => entity)(state);

  // return entity;
};

export const bundles = type => state =>
  mapValues(records(type)(state), (value, id) => bundle(getIdentifier(type, id))(state));

//
// Audience
//
export const audience = id => record('taxonomy_term--audience', id);
export const audiences = records('taxonomy_term--audience');
export const audiencesOptions = keyValues(audiences, 'data.attributes.name');
export const audiencesLabels = peek(audiences, 'data.attributes.name');

//
// Images
//
export const resourceImage = identifier =>
  createSelector(bundle(identifier), resourceBundle =>
    get(resourceBundle, 'relationships.image_primary.relationships.field_media_image'),
  );

export const resourceImageStyle = (identifier, style) =>
  createSelector(resourceImage(identifier), resourceBundle =>
    get(resourceBundle, `meta.derivatives.${style}`),
  );

//
// Events
//
export const event = id => state => state[c.TYPE_EVENT].items[id];
export const events = state => state[c.TYPE_EVENT].items;
export const eventsArray = state => map(state[c.TYPE_EVENT].items, item => item);
export const getEventStartDate = item => get(item, 'data.attributes.field_date_time.value');
export const eventIds = recordIds(events);
export const eventsOptions = keyValues(events, 'title');
export const eventsLabels = peek(events, 'data.attributes.title');
export const calendarEvents = createSelector(events, items => map(items, item => item));

export const eventTeasers = createSelector(events, items => map(items, item => item));

export const eventsAscending = createSelector(eventsArray, items =>
  items.sort((a, b) => getEventStartDate(a) - getEventStartDate(b)),
);

export const eventsDecending = createSelector(eventsAscending, items => items.reverse());

export const eventsByDate = createSelector(eventsAscending, items =>
  groupBy(items, item => getDayTimeStamp(`${get(item, 'data.attributes.field_date_time.value')}Z`)),
);

export const eventsByDateAscending = createSelector(eventsByDate, items =>
  map(items, (item, key) => ({
    key,
    date: new Date(parseInt(key, 10)),
    items: item.map(a => a.data.id),
  })).sort((a, b) => a.key - b.key),
);

export const eventsByDateDescending = createSelector(eventsByDateAscending, items =>
  items.reverse(),
);

//
// Event Registrations
//
export const eventRegistration = id => records(c.TYPE_EVENT_REGISTRATION, id);
export const eventRegistrations = records(c.TYPE_EVENT_REGISTRATION);
export const eventRegistrationsByEvent = id =>
  createSelector(recordsList(c.TYPE_EVENT_REGISTRATION), items =>
    items
      .filter(item => get(item, 'data.relationships.field_event.data.id') === id)
      .sort((a, b) => get(b, 'data.attributes.created') - get(a, 'data.attributes.created') )
  );

export const eventRegistrationsByUser = id =>
  createSelector(recordsList(c.TYPE_EVENT_REGISTRATION), items =>
    items
      .filter(item => get(item, 'data.relationships.field_user.data.id') === id)
      .sort((a, b) => get(b, 'data.attributes.created') - get(a, 'data.attributes.created'))
  );

export const eventRegistrationsByEventByUser = (eventId, userId) =>
  createSelector(eventRegistrationsByEvent(eventId), items =>
    items.filter(item => get(item, 'data.relationships.field_user.data.id') === userId)
  );

//
// Event Types
//
export const eventType = id => record('taxonomy_term--event_type', id);
export const eventTypes = records('taxonomy_term--event_type');
export const eventTypesOptions = keyValues(eventTypes, 'data.attributes.name');
export const eventTypesLabels = peek(eventTypes, 'data.attributes.name');

//
// Locations
//
export const location = id => state => state['node--location'].items[id];
export const locations = state => state['node--location'].items;
export const locationsOptions = keyValues(locations, 'data.attributes.title');
export const locationsLabels = peek(locations, 'data.attributes.title');

//
// Rooms
//
export const room = id => record(c.TYPE_ROOM, id);
export const rooms = records(c.TYPE_ROOM);
export const roomsArray = state => map(state[c.TYPE_ROOM].items, item => item);
export const roomsOptions = keyValues(rooms, 'data.attributes.name');
export const roomsLabels = peek(rooms, 'data.attributes.name');
export const roomsAscending = createSelector(roomsArray, items =>
  items.sort((a, b) => recordLabel(a) - recordLabel(b)),
);

export const roomReservation = id => records(c.TYPE_ROOM_RESERVATION, id);
export const roomReservations = records(c.TYPE_ROOM_RESERVATION);

//
// Tag
//
export const tag = id => record('taxonomy_term--tag', id);
export const tags = records('taxonomy_term--tag');
export const tagsOptions = keyValues(tags, 'data.attributes.name');
export const tagsLabels = peek(tags, 'data.attributes.name');
