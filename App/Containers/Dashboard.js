import React from 'react';
import Profile from './Profile';
import api from '../Utils/api';
import Repositories from './Repositories';
import Notes from './Notes';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as userData from "../Actions/userData";

import {
    Text, 
    View, 
    Image, 
    StyleSheet, 
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        //marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    imageWrapper: {
        height: 350,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends React.Component {

     constructor(props) {
          super(props);
     }

    makeBackground(btn) {
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }
        if (btn === 0) {
            obj.backgroundColor = '#48BBEC';
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }
        return obj;
    }

    render() {
        const {userInfo} = this.props;
       
        const imageWrapperContent = 
            this.props.userInfo.avatar_url? 
                <Image source={{
                    uri: this.props.userInfo.avatar_url
                }} style={styles.image}/> : 
                <ActivityIndicator
                    animating={true}
                    color="#111"
                    size="large">
                </ActivityIndicator>
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    {imageWrapperContent}
                </View>
                
              <TouchableHighlight style={this.makeBackground(0)}   onPress={() => this.props.navigation.dispatch({ type: 'goToProfile' })} underlayColor="#88D4F5">
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight style={this.makeBackground(1)} onPress={this.setUserRepos.bind(this)} // {this.goToRepos.bind(this)}
                underlayColor="#E39EBF">
                    <Text style={styles.buttonText}>View Repositories</Text>
                </TouchableHighlight>
                <TouchableHighlight style={this.makeBackground(2)} onPress= {this.setUserNotes.bind(this)} //{this.goToNotes.bind(this)}
                underlayColor="#9BAAF3">
                    <Text style={styles.buttonText}>Take Notes</Text>
                </TouchableHighlight>
            </View>

        );
    }

  setUserRepos = () => {
    const {userInfo} = this.props;
    this.props.userReposFetchRequested(userInfo.login);
    this.props.navigation.dispatch({ type: 'goToRepos' });
  };

  setUserNotes = () => {
    const {userInfo} = this.props;
    this.props.userNotesFetchRequested(userInfo.login);
    this.props.navigation.dispatch({ type: 'goToNotes' });
  };

};


// Dashboard.propTypes = {
//   userInfo: React.PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  userInfo: state.userData.userInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators(userData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
