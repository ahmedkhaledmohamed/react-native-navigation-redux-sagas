
//not used

import React from 'react';
import Separator from '../Helpers/Separator';
import Badge from '../Helpers/Badge';

import {
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

 class RepositoryView extends React.Component{
   constructor(props) {
       super(props);
   }

  render(){
    const {repo} = this.props;
    var desc = repo.description ? <Text style={styles.description}> {repo.description} </Text> : <View />;
    return (
     <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress= { () => this.props.dispatchToWebView(repo.html_url)} 
              underlayColor='transparent'>
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
    )
  }
};

// Repositories.propTypes = {
//   userInfo: React.PropTypes.object.isRequired,
//   repos: React.PropTypes.array.isRequired
// }


export default RepositoryView;
