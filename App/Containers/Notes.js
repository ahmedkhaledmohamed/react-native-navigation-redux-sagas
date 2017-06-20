import React from 'react';
import api from '../Utils/api';
import Separator from '../Components/Helpers/Separator';
import Badge from '../Components/Helpers/Badge';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as userData from "../Actions/userData";
import NotesListView from '../Components/Notes/NotesListView'

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

 class Notes extends React.Component{


  constructor(props){
    super(props);
    //this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      //dataSource: this.ds.cloneWithRows(this.props.notes),
      //notes: [],
      note: '',
      error: '',
      //userInfo: {}
    }
  }
  // componentWillReceiveProps(){
  //   console.log(this.props.notes);
  //   this.state = {
  //     dataSource: this.ds.cloneWithRows(this.props.notes),
  //     //notes: [],
  //     note: '',
  //     error: '',
  //     //userInfo: {}
  //   }
  // }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    })
  }
  // handleSubmit(){
  //   const {userInfo, notes} = this.props;
  //   var note = this.state.note;
  //   this.setState({
  //     note: ''
  //   });
  //   api.addNote(userInfo.login, note)
  //     .then((data) => {
  //       api.getNotes(userInfo.login)
  //         .then((data) => {
  //           this.setState({
  //             dataSource: this.ds.cloneWithRows(data)
  //           })
  //         });
  //     })
  //     .catch((error) => {
  //       console.log('Request failed', error);
  //       this.setState({error})
  //     });
  // }
  // renderRow(rowData){
  //   return (
  //     <View>
  //       <View style={styles.rowContainer}>
  //         <Text> {rowData} </Text>
  //       </View>
  //       <Separator />
  //     </View>
  //   )
  // }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <TextInput
            style={styles.searchInput}
            value={this.state.note}
            onChange={this.handleChange.bind(this)}
            placeholder="New Note" />
        <TouchableHighlight
            style={styles.button}
            onPress= {() => this.addNote()}//{this.handleSubmit.bind(this)}
            underlayColor="#88D4F5">
              <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
      </View>
    )
  }
  render(){
    return (
      <View style={styles.container}>

          <NotesListView notes={this.props.notes}/>
        {this.footer()}
      </View>
    )
  }

  addNote = () => {
    var note = this.state.note;
    this.setState({
      note: ''
    });
    const {userInfo} = this.props;
    this.props.notePostRequested(userInfo.login, note);
  };
};

// Notes.propTypes = {
//   userInfo: React.PropTypes.object.isRequired,
//   notes: React.PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  userInfo: state.userData.userInfo,
  notes: state.userData.notes
});

const mapDispatchToProps = dispatch => bindActionCreators(userData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
