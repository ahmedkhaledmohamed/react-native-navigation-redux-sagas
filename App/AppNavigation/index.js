import React, { Component } from 'react';
import AppNavigator from './appNavigator';
import {connect } from "react-redux";
//import PropTypes from 'prop-types';
import {
  addNavigationHelpers
} from 'react-navigation';


const AppNavigation = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// AppNavigation.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  nav: state.nav,
});

export default  connect(mapStateToProps)(AppNavigation);
