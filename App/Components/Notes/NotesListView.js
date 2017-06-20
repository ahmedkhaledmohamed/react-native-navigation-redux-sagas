import React from 'react';
import Badge from '../../Components/Helpers/Badge';
import Separator from '../../Components/Helpers/Separator';
import NoteRow from './NoteRow';

import {
  ListView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
  }
});

 class NotesListView extends React.Component{

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
  }

  renderRow(rowData){
    return (
      <NoteRow rowData={rowData}/>
    )
  }
  render(){
    return (
          <ListView
            dataSource={this.ds.cloneWithRows(this.props.notes)}
            renderRow={this.renderRow}
            renderHeader={() => <Badge/>} />

    )
  }
}

export default NotesListView;
