import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native';

import { connect } from 'react-redux';

import { Button } from 'react-native-paper'

import Touchable from '../components/UI/Touchable'
import Card from '../components/UI/Card'

import {getUsers} from '../services/api/api'
import { ADD_USER } from '../services/redux/action-types';

class LandingPage extends Component {

  componentDidMount(){
    getUsers()
      .then(res => {
        this.props.addUser(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Card style={{alignItems:'center'}}>
          <View style = {styles.btnContainer}>
            <Button
                color="green"
                icon="chevron-right"
                onPress={() => this.props.navigation.navigate('DisplayUsers')}
              >
                React Native & Redux Exercise
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
  btnContainer:{
    padding:10
  },
  header:{
    color:'black',
    fontSize:20,
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
      addUser: (user) => 
          dispatch({
              type: ADD_USER,
              newUser: user
          }),
      dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
