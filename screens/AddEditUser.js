import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';

import Card from '../components/UI/Card';
import Touchable from '../components/UI/Touchable';

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
        this.setState({website:text})
        break

      case "companyName":
        if(text.includes("Company name: ")){
          text = text.replace("Company name: ","")
        }
        this.setState({companyName:text})
        break

      case "companyCatchPhrase":
        if(text.includes("Company Catch Phrase: ")){
          text = text.replace("Company Catch Phrase: ","")
        }
        this.setState({companyCatchPhrase:text})
        break

      case "companyBS":
        if(text.includes("Company bs: ")){
          text = text.replace("Company bs: ","")
        }
        this.setState({companyBS:text})
        break
      
      case "street":
        if(text.includes("Street name: ")){
          text = text.replace("Street name: ","")
        }
        this.setState({street:text})
        break

      case "suite":
        if(text.includes("Suite: ")){
          text = text.replace("Suite: ","")
        }
        this.setState({suite:text})
        break
      
      case "city":
        if(text.includes("City: ")){
          text = text.replace("City: ","")
        }
        this.setState({city:text})
        break
        
      case "zip":
        if(text.includes("Zip Code: ")){
          text = text.replace("Zip Code: ","")
        }
        this.setState({zipcode:text})
        break
      
      case "lat":
        if(text.includes("Latitude: ")){
          text = text.replace("Latitude: ","")
        }
        this.setState({lat:text})
        break

      case "lng":
        if(text.includes("Longitude: ")){
          text = text.replace("Longitude: ","")
        }
        this.setState({lng:text})
        break

      default:
        break
    }
  }

  onUpdate = () =>{

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

    if(this.props.params === undefined){
      this.props.addUser([formatData])
    }else{
      this.props.EditUsers(formatData)
    }
  }


  // Might be a good idea to use placeholder instead of default value but i dont know placeholder behavior with onChangeText so I didnt use them for now
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <ScrollView>
            <View style={{marginBottom:10}}/>
            <Text>Name : </Text>
            <TextInput 
              defaultValue={this.state.name} 
              onChangeText={(text) => this.addValues("name",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>Username : </Text>
            <TextInput 
              defaultValue={this.state.username} 
              onChangeText={(text) => this.addValues("username",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>Email : </Text>
            <TextInput 
              defaultValue={this.state.email} 
              onChangeText={(text) => this.addValues("email",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>Phone : </Text>
            <TextInput 
              defaultValue={this.state.phone} 
              onChangeText={(text) => this.addValues("phone",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>website : </Text>
            <TextInput 
              defaultValue={this.state.website} 
              onChangeText={(text) => this.addValues("website",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>Company : </Text>
            <TextInput 
              defaultValue={"Company name: " + this.state.companyName} 
              onChangeText={(text) => this.addValues("companyName",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Company Catch Phrase: " +this.state.companyCatchPhrase} 
              onChangeText={(text) => this.addValues("companyCatchPhrase",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Company bs: " +this.state.companyBS} 
              onChangeText={(text) => this.addValues("companyBS",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <Text>Address : </Text>
            <TextInput 
              defaultValue={"Street name: " + this.state.street} 
              onChangeText={(text) => this.addValues("street",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Suite: " +this.state.suite} 
              onChangeText={(text) => this.addValues("suite",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"City: " +this.state.city} 
              onChangeText={(text) => this.addValues("city",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Zip Code: " +this.state.zipcode} 
              onChangeText={(text) => this.addValues("zip",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Latitude: " +this.state.lat} 
              onChangeText={(text) => this.addValues("lat",text)}
              style={styles.textInputStyle}
            ></TextInput>

            <TextInput 
              defaultValue={"Longitude: " +this.state.lng} 
              onChangeText={(text) => this.addValues("lng",text)}
              style={styles.textInputStyle}
            ></TextInput>

          <View style={{marginBottom:20}}/>
          </ScrollView>
        </Card>
        <View style={{marginBottom:20}}/>
        <Touchable
          fn={()=>this.onUpdate()}
        >
          <Text style={{color:'white'}}>Update</Text>
        </Touchable>
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