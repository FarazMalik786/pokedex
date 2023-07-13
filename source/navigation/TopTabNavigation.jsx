import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from '../screens/DetailsScreen/pokemonDetails/about/About';
import BaseState from '../screens/DetailsScreen/pokemonDetails/baseState/BaseState';

const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = ({ pokemonDetails }) => {
  
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: "black" , tabBarInactiveTintColor: "gray" , tabBarLabelStyle:{fontWeight:"700"}}}>
      <Tab.Screen name='about'>
      {() => <About  pokemonDetails={pokemonDetails} />}
      </Tab.Screen>
      <Tab.Screen name='basestate' >
      {() => <BaseState pokemonDetails={pokemonDetails}/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default TopTabNavigation