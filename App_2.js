import { NavigationContainer, StackActions } from "@react-navigation/native";
import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,Switch,Image, FlatList, TouchableOpacity, ScrollView, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
export default function App () {
  const styles = StyleSheet.create({
    title: {
      fontSize: 32,
    },
  });
  const DATA = [
    {
      name:'Alvaro',
      surname:'Carrasco',
      phone:982919213,
      icono:'car-sport'
    },
    {
      name:'Pepe',
      surname:'Carrasco',
      phone:982919213,
      icono:'account-circle'
    },
    {
      name:'Maria',
      surname:'Carrasco',
      phone:982919213,
      icono:'account-circle'
    },
    {
      name:'Ana',
      surname:'Carrasco',
      phone:982919213,
      icono:'account-circle'
    },
    {
      name:'Daniel',
      surname:'Carrasco',
      phone:982919213,
      icono:'account-circle'
    }
  ]
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.surname}</Text>
      <Text>{item.phone}</Text>
    </View>
  )
  
  const Stack = createNativeStackNavigator();
  return (
    
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem} 
        keyExtractor={item=>item.id}/>
    </View>
    
  )
  

}