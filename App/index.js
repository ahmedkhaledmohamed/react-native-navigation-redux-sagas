import React, { Component } from 'react';
import {Provider } from "react-redux";
import {
  StyleSheet,
} from 'react-native';

import getStore from "./store";
import AppNavigation from './AppNavigation'


class App extends React.Component {
  store = getStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigation/>
      </Provider>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});


export default App;
