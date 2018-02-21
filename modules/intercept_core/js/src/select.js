import { createSelector } from 'reselect';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import pickBy from 'lodash/pickBy';

export const published = selector =>
  createSelector(selector, items => pickBy(items, item => item.data.status === '1'));

export const peek = (selector, field) =>
  createSelector(selector, items => mapValues(items, item => item.data[field]));

export const keyValues = (selector, field) =>
  createSelector(selector, items => map(items, (item, key) => ({
    key,
    value: item.data[field],
  })));

//
// Event Types
//
export const eventTypes = state => state['taxonomy_term--event_type'].items;
export const eventTypesOptions = keyValues(eventTypes, 'name');
export const eventTypesLabels = peek(eventTypes, 'name');

//
// Events
//
export const events = state => state['node--event'].items;
export const eventsOptions = keyValues(events, 'title');
export const eventsLabels = peek(events, 'title');

//
// Locations
//
export const locations = state => state['node--location'].items;
export const locationsOptions = keyValues(locations, 'title');
export const locationsLabels = peek(locations, 'title');
