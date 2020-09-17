import React, { Component } from "react";
import {View, Text, StatusBar, FlatList} from "react-native";

export default class App extends Component{
  render(){
    const style = {
      container:{
        flex:1
      },
      item:{
        
      },
    }
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#000000"/>
        <FlatList/>
      </View>
    )
  }
}