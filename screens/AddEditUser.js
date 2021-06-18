import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Keyboard} from 'react-native';

import { TextInput,IconButton } from 'react-native-paper';

import Card from '../components/UI/Card';

import { connect } from 'react-redux';

import { EDIT_USER,ADD_USER } from '../services/redux/action-types';

class EditUser extends Component {

  state={
    name:this.props.route.params ? this.props.route.params.selectedUser.name : "",
    username:this.props.route.params ? this.props.route.params.selectedUser.username:"",
    email:this.props.route.params? this.props.route.params.selectedUser.email:"",
    phone:this.props.route.params? this.props.route.params.selectedUser.phone:"",
    website:this.props.route.params ? this.props.route.params.selectedUser.website:"",
    companyName:this.props.route.params? this.props.route.params.selectedUser.company.name:"",
    companyCatchPhrase:this.props.route.params? this.props.route.params.selectedUser.company.name:"",
    companyBS:this.props.route.params? this.props.route.params.selectedUser.company.bs:"",
    street:this.props.route.params? this.props.route.params.selectedUser.address.street:"",
    zipcode:this.props.route.params? this.props.route.params.selectedUser.address.zipcode:"",
    city:this.props.route.params? this.props.route.params.selectedUser.address.city:"",
    suite:this.props.route.params? this.props.route.params.selectedUser.address.suite:"",
    lat:this.props.route.params? this.props.route.params.selectedUser.address.geo.lat:"",
    lng:this.props.route.params? this.props.route.params.selectedUser.address.geo.lng:"",
  }

  addValues = (id,text) => {
    switch(id){
      case "name":
        this.setState({name:text})
        break

      case "username":
        this.setState({username:text})
        break

      case "email":
        this.setState({email:text})
        break

      case "phone":
        this.setState({phone:text})
        break

      case "website":
        console.log("website",text)
        this.setState({website:text})
        break

      case "companyName":
        this.setState({companyName:text})
        break

      case "companyCatchPhrase":
        this.setState({companyCatchPhrase:text})
        break

      case "companyBS":
        this.setState({companyBS:text})
        break
      
      case "street":
        this.setState({street:text})
        break

      case "suite":
        this.setState({suite:text})
        break
      
      case "city":
        this.setState({city:text})
        break
        
      case "zip":
        this.setState({zipcode:text})
        break
      
      case "lat":
        this.setState({lat:text})
        break

      case "lng":
        this.setState({lng:text})
        break

      default:
        break
    }
  }

  onUpdate = () =>{

    Keyboard.dismiss()

    let newID;

    if(this.props.user !== undefined && this.props.user.users.length > 0 ){
      newID = this.props.user.users[this.props.user.users.length-1].id + 1
    }
    else{
      newID = 0
    }

    let formatData ={
      id: this.props.route.params ? this.props.route.params.selectedUser.id : newID,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      address: {
        street: this.state.street,
        suite: this.state.suite,
        city: this.state.city,
        zipcode: this.state.zipcode,
        geo: {
          lat: this.state.lat,
          lng: this.state.lng
        }
      },
      phone: this.state.phone,
      website: this.state.website,
      company: {
        name: this.state.companyName,
        catchPhrase: this.state.companyCatchPhrase,
        bs: this.state.companyBS
      }
    }

    if(this.props.route.params === undefined){
      this.props.addUser([formatData])
    }else{
      this.props.EditUsers(formatData)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <ScrollView>
            <View style={{marginTop:'12%'}}/>
            <TextInput
              label="Name"
              defaultValue={this.state.name} 
              onChangeText={(text) => this.addValues("name",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Username"
              defaultValue={this.state.username} 
              onChangeText={(text) => this.addValues("username",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Email"
              defaultValue={this.state.email} 
              onChangeText={(text) => this.addValues("email",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Phone"
              defaultValue={this.state.phone} 
              onChangeText={(text) => this.addValues("phone",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              label="Website"
              defaultValue={this.state.website} 
              onChangeText={(text) => this.addValues("website",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <View style={{padding:'2%'}}/>
            <TextInput
              label="Street Name"
              defaultValue={this.state.street} 
              onChangeText={(text) => this.addValues("street",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Suite"
              defaultValue={this.state.suite} 
              onChangeText={(text) => this.addValues("suite",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="City"
              defaultValue={this.state.city} 
              onChangeText={(text) => this.addValues("city",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Zip Code"
              defaultValue={this.state.zipcode} 
              onChangeText={(text) => this.addValues("zip",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Latitude"
              defaultValue={this.state.lat} 
              onChangeText={(text) => this.addValues("lat",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Longitude"
              defaultValue={this.state.lng} 
              onChangeText={(text) => this.addValues("lng",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <View style={{padding:'2%'}}/>
            <TextInput
              label="Company"
              defaultValue={this.state.companyName} 
              onChangeText={(text) => this.addValues("companyName",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Company Catch Phrase"
              defaultValue={this.state.companyCatchPhrase} 
              onChangeText={(text) => this.addValues("companyCatchPhrase",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput
              label="Company bs"
              defaultValue={this.state.companyBS} 
              onChangeText={(text) => this.addValues("companyBS",text)}
              style={styles.textInputStyle}
            ></TextInput>

          
          {/* <View style={{marginBottom:3}}/> */}
          </ScrollView>
        </Card>
        <View style={{paddingBottom:'1%'}}/>

        <IconButton
          icon="check-outline"
          color="green"
          size={20}
          onPress={() => this.onUpdate()}
        />

        <View style={{paddingBottom:50}}/>
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
  textInputStyle:{
    backgroundColor:'#d3d3d3',
    marginBottom: 5
  }
});

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
      EditUsers: (user) => 
          dispatch({
              type: EDIT_USER,
              newUser:user
          }),
      addUser: (user) => 
          dispatch({
              type: ADD_USER,
              newUser: user
          }),
      dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser);