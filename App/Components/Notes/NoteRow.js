import React from 'react';
import Separator from '../../Components/Helpers/Separator';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

var styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
  }
});

 class NoteRow extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {this.props.rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }
}

export default NoteRow;
