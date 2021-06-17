import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert} from 'react-native';

import { connect } from 'react-redux';

import {Button } from 'react-native-paper'

import Card from '../components/UI/Card'
import Touchable from '../components/UI/Touchable'

import { CLEAR_USERS } from '../services/redux/action-types';

class ClearUsers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{alignItems:'center'}}>
          <View style = {styles.btnContainer}>

          <Button
              style={{width:195}}
              color="red"
              icon="delete"
              onPress={() => {
                Alert.alert(
                    "ALERT",
                    "Are you sure ?",
                    [
                      {
                        text: "Yes",
                        onPress: () => this.props.clearUsers(),
                      },
                      {
                        text: "No",
                        onPress: () => {console.log("Cancelled")},
                        style:"cancel"
                      },
                    ],
                    {
                      cancelable: true,
                      onDismiss: () => {console.log("Dismiss alert")}
                    }
                  );
              }}
            >
              Clear all user
            </Button>
          </View>

        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TOFonts:{
    color:"#FFFFFF"
  }
});

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
      clearUsers: () => 
          dispatch({
              type: CLEAR_USERS,
          }),
      dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClearUsers);