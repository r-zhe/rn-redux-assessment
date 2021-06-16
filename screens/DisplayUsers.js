import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import { connect } from 'react-redux';

import Card from '../components/UI/Card'

class DisplayUsers extends Component {

  state={
    allUsers:[]
  }

  componentDidMount(){
    if(this.props.user.users.length > 0){
      this.setState({allUsers:[...this.state.allUsers,...this.props.user.users]})
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.user.users) !== JSON.stringify(this.state.allUsers)){
      this.setState({allUsers:[...this.props.user.users]})
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={{height:1000}}> */}
          {this.state.allUsers.length > 0 
            ? this.state.allUsers.map((user,idx) => {
              return <TouchableOpacity key={idx}>
                <Card style={styles.cardStyle}>
                  <Text style={styles.cardText}> Name : {user.name} </Text>
                </Card>
              </TouchableOpacity> 

            })
            : <Text style={{color:'black'}}> No User </Text>}
        {/* </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
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


export default connect(mapStateToProps, null)(DisplayUsers);