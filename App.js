import React, { Component } from "react";
import {View, Text, StatusBar, FlatList, ActivityIndicator} from "react-native";

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      data:[],
      isLoading:true
    }
  }

  async componentDidMount(){
    try{
      const response = await fetch("https://api.github.com/users/bayu1993/repos");
      const result = await response.json();
      this.setState({data:result, isLoading:false});
    }catch(error){
      console.log(error);
    }
  }

  render(){
    const {data, isLoading} = this.state
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
        {
          isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              renderItem = { ({item}) => <Text>{item.name}</Text> }
            />
          )
        }
      </View>
    );
  }
}