import React from 'react';
import { render } from 'react-dom';
import { DataProvider } from 'react-orbitjs';
import LocationsList from './components/locationsList';
import interceptClient from 'interceptClient';

const store = interceptClient.store;
render(
  <DataProvider dataStore={store}>
  <LocationsList />
  </DataProvider>
, document.getElementById('locationsListRoot'));
