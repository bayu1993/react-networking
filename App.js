import React, { Component } from "react";
import {View, Text, StatusBar, FlatList} from "react-native";

export default class App extends Component{
  render(){
    return (
      <View>
        <StatusBar backgroundColor="#000000"/>
        <FlatList/>
      </View>
    )
  }
}