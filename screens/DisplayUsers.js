import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import { connect } from 'react-redux';

import _ from 'lodash'

import { List,TextInput,Button } from 'react-native-paper'


class DisplayUsers extends Component {

  state={
    allUsers:[],
    filteredUser:[]
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

  textInputUpdate = (text) => {
    let tempName = [...this.state.allUsers]
    let filteredUser = tempName.map(user => {
        if(user.name.toString().toLowerCase().includes(text.toLowerCase())){
            return user
        }
        else{
            return null
        }
    })

    let temp = filteredUser.filter(el => el !== null)

    this.setState({
      allUsers:_.cloneDeep(this.state.allUsers),
      filteredUser: _.cloneDeep(temp)
    })
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          label="Search by Name"
          right={<TextInput.Icon name="magnify" />}
          onChangeText={(text) => {
            this.textInputUpdate(text)
          }}
        />
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            {this.state.allUsers.length > 0 
              ? this.state.filteredUser.length > 0 
                ? this.state.filteredUser.map((user,idx) => {
                    return <TouchableOpacity 
                              key={idx}
                              onPress={() => this.props.navigation.navigate("AddEditUser", {selectedUser:user})}>
                                <List.Item
                                  title={user.name}
                                  description={"Username: "+user.username}
                                  left={props => <List.Icon {...props} icon="face" />}
                                />
                          </TouchableOpacity>
                  })
                : this.state.allUsers.map((user,idx) => {
                    return <TouchableOpacity 
                              key={idx}
                              onPress={() => this.props.navigation.navigate("AddEditUser", {selectedUser:user})}>
                                <List.Item
                                  title={user.name}
                                  description={"Username: "+user.username}
                                  left={props => <List.Icon {...props} icon="face" />}
                                />
                          </TouchableOpacity> 
                  })
              : <Text style={{color:'black'}}> No User </Text>}
        </ScrollView>

        <View style={{flexDirection:'row'}}>
          <View>
            <Button
              color="green"
              style={{width:195}}
              icon="account-plus-outline"
              onPress={() => this.props.navigation.navigate("AddEditUser")  }
            >
              Add User
            </Button>

          </View>

          <View>
            <Button
              style={{width:195}}
              color="red"
              icon="delete"
              onPress={() => this.props.navigation.navigate("ClearUsers")   }
            >
              Clear all user
            </Button>
          </View>

          

        </View>

        <View style={{marginBottom:'20%'}}/>

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