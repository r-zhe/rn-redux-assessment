import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

const Touchable = props => {
  return <TouchableOpacity onPress={props.fn} style={{...styles.TOStyle, ...props.style}}>{props.children}</TouchableOpacity>;
};


const styles = StyleSheet.create({
  TOStyle:{
    backgroundColor:'green',
    alignItems:'center',
    margin:5,
    justifyContent:'center',
    width:240,
    height : 30,
    borderRadius: 10
  }
});

export default Touchable;