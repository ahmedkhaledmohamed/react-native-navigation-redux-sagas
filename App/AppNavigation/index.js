import React, { Component } from 'react';
import {connect } from "react-redux";
import Routes from "./routes";
//import PropTypes from 'prop-types';
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';

export const AppNavigator = StackNavigator(Routes
  // , {
  //   navigationOptions: {
  //       title: ({ state }) => {
  //           if (state.params) {
  //               return `${state.params.title}`;
  //           }
  //       }
  //   }
  //}
);

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
