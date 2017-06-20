import React from 'react';
import Separator from '../Components/Helpers/Separator';
import Badge from '../Components/Helpers/Badge';
import { connect } from 'react-redux';


import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

 class Profile extends React.Component{
   constructor(props) {
       super(props);
   }

  getRowTitle(user, item){
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render(){
    //var userInfo = this.state.userInfo;
    const {userInfo} = this.props;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return <View key={index}/>
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.getRowTitle(userInfo, item)}</Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge/>
        {list}
      </ScrollView>
    )
  }
};

// Profile.propTypes = {
//   userInfo: React.PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  userInfo: state.userData.userInfo,
});

export default connect(mapStateToProps)(Profile);
