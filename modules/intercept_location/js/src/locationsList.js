import React from 'react';
import { render } from 'react-dom';
import { DataProvider } from 'react-orbitjs';
import LocationsList from './components/locationsList';

const store = window.interceptClient.store;
console.log(store);
render(
  <DataProvider dataStore={store}>
  <LocationsList />
  </DataProvider>
, document.getElementById('locationsListRoot'))
