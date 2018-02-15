import React from 'react';
import { render } from 'react-dom';
import { DataProvider } from 'react-orbitjs';
import EventList from './components/EventList';
import interceptClient from 'interceptClient';

const store = interceptClient.store;
render(
  <DataProvider dataStore={store}>
  <EventList />
  </DataProvider>
, document.getElementById('eventListRoot'));
