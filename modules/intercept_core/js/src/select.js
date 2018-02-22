import { createSelector } from 'reselect';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import pickBy from 'lodash/pickBy';
import intercept from 'intercept-client';

export const published = selector =>
  createSelector(selector, items => pickBy(items, item => item.data.status === '1'));

export const peek = (selector, field) =>
  createSelector(selector, items => mapValues(items, item => item.data[field]));

export const keyValues = (selector, field) =>
  createSelector(selector, items =>
    map(items, (item, key) => ({
      key,
      value: item.data[field],
    })),
  );

export const getRecords = resource => state => state[resource].items;

export const getRecord = (resource, id) => state => state[resource].items[id];

export const getBundle = (resource, id) => (state) => {
  const record = getRecord(resource, id)(state);

  if (!record) {
    return id;
  }

  const entity = Object.assign({}, record).data;
  const model = intercept.models[resource];
  // Get all relationships with reducers.
  const relationships = model
    .getRelationshipAliases()
    .filter(rel => model.schema[rel].model in state);
  relationships.forEach((rel) => {
    // Replace the uuid with the entity object.
    entity[rel] = Array.isArray(entity[rel])
      ? entity[rel].map(item => getBundle(model.schema[rel].model, item)(state))
      : getBundle(model.schema[rel].model, entity[rel])(state);
  });
  return entity;
};

//
// Event Types
//
export const eventType = id => getRecord('taxonomy_term--event_type', id);
export const eventTypes = getRecords('taxonomy_term--event_type');
export const eventTypesOptions = keyValues(eventTypes, 'name');
export const eventTypesLabels = peek(eventTypes, 'name');

//
// Events
//
export const event = id => state => state['node--event'].items[id];
export const events = state => state['node--event'].items;
export const eventsOptions = keyValues(events, 'title');
export const eventsLabels = peek(events, 'title');

//
// Locations
//
export const location = id => state => state['node--location'].items[id];
export const locations = state => state['node--location'].items;
export const locationsOptions = keyValues(locations, 'title');
export const locationsLabels = peek(locations, 'title');
