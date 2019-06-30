/**
 * MyPlayRx by Geisinger and ClinicNerds
 * https://www.geisinger.org/
 * https://clinicnerds.com/
 * Geisinger contact: jabillet@geisinger.edu
 * ClinicNerds contact: norbert.ryan3@gmail.com
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/lib/integration/react';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
