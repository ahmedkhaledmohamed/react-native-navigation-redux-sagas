import React, { Component } from 'react';
import api from '../Utils/api';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as userData from "../Actions/userData";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    //marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

 class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(e){
    this.setState({
      username: e.nativeEvent.text
    })
  }
  
  render() {
    console.log(`props: ${this.props}`)
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Search for a Github User
        </Text>
        <TextInput
           style={styles.searchInput}
           value={this.state.username}
           onChange={this.handleChange.bind(this)}>
        </TextInput>
        <TouchableHighlight
          style={styles.button}
          onPress={this.setUserInfo.bind(this)} // {this.handleSubmit.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
         {showErr}
      </View>
    );
  }

  setUserInfo = () => {
    console.log(this.state.username);
    this.props.userInfoFetchRequested(this.state.username);
    this.props.navigation.dispatch({ type: 'goToDashboard' });
  };
};



const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(userData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
