import React from 'react';
import { connect } from 'react-redux';

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

 class Web extends React.Component{
   constructor(props) {
       super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <WebView source={this.props.url}/>
      </View>
    );
  }
};

// Web.propTypes = {
//  url: React.PropTypes.string.isRequired
// };

const mapStateToProps = state => ({
  url: state.nav.webViewURL
});


export default connect(mapStateToProps)(Web);

