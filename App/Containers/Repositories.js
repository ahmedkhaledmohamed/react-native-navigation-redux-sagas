import React from 'react';
import Separator from '../Components/Helpers/Separator';
import Badge from '../Components/Helpers/Badge';
import Web_View from '../Containers/WebView';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as userData from "../Actions/userData";

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

 class Repositories extends React.Component{
   constructor(props) {
       super(props);
   }

  render(){
    const {userInfo, repos} = this.props;
    var list = this.props.repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress= { () => this.props.navigation.dispatch({ type: 'goToWebView', webViewURL: repos[index].html_url })} //{this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <Badge/>
        {list}
      </ScrollView>
    )
  }
};

// Repositories.propTypes = {
//   userInfo: React.PropTypes.object.isRequired,
//   repos: React.PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
  userInfo: state.userData.userInfo,
  repos: state.userData.repos
});

const mapDispatchToProps = dispatch => bindActionCreators(userData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
