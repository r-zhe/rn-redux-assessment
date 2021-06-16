import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import { connect } from 'react-redux';

import Card from '../components/UI/Card'
import Touchable from '../components/UI/Touchable'


class DisplayUsers extends Component {

  state={
    allUsers:[]
  }

  componentDidMount(){
    if(this.props.user.users.length > 0){
      this.setState({allUsers:[...this.props.user.users]})
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(JSON.stringify(this.props.user.users) !== JSON.stringify(prevState.allUsers)){
      this.setState({allUsers:[...this.props.user.users]})
    }
  }

  // componentWillUnmount(){
  //   this.setState({allUsers:[]})
  // }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
            {this.state.allUsers.length > 0 
              ? this.state.allUsers.map((user,idx) => {
                return <TouchableOpacity 
                          key={idx}
                          onPress={() => this.props.navigation.navigate("AddEditUser", {selectedUser:user})}>
                  <Card style={styles.cardStyle}>
                    <Text style={styles.cardText}> Name : {user.name} </Text>
                  </Card>
                </TouchableOpacity> 

              })
              : <Text style={{color:'black'}}> No User </Text>}
        </ScrollView>

        <View style={{flexDirection:'row'}}>
          <View>
            <Touchable
            style={{width:195}}
              fn={() =>{
                  this.props.navigation.navigate("AddEditUser")  
                }
              }
            >
              <Text>Add User</Text>
            </Touchable>
          </View>

          <View>
            <Touchable
              style={{backgroundColor:'red',width:195}}
              fn={() =>{
                this.props.navigation.navigate("ClearUsers")  
                }}
            >
              <Text>Clear All User</Text>
            </Touchable>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginBottom:20
  },
  cardStyle: {
    margin:3,
    width:"100%",
    height:50,
    justifyContent:'center'
  },
  cardText:{
    color:'black',
    // margin: 'center'
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


export default connect(mapStateToProps, mapDispatchToProps)(DisplayUsers);