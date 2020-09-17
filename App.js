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
      setTimeout(() => {
        this.setState({data:result, isLoading:false});        
      }, 2000);
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
        margin:10, 
        fontSize:16,
        padding:20, 
        color:"#eeeeee", 
        backgroundColor:"#000000", 
        elevation:4,
        borderRadius:10
      },
      indicator:{
        height:80,
        flex:1
      }
    }
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#000000"/>
        {
          isLoading ? <ActivityIndicator 
          color="#000000" size="large" style={style.indicator}
          animating={true}/> : (
            <FlatList
              data={data}
              renderItem = { ({item}) => <Text style={style.item}>{item.name}</Text> }
            />
          )
        }
      </View>
    );
  }
}