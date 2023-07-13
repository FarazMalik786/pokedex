import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingScreen from '../screens/ListingScreen/ListingScreen'
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import FirstScreen from '../screens/FirstScreen/FirstScreen'

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='firstscreen' component={FirstScreen} />
      <Stack.Screen name='listingscreen' component={ListingScreen} />
      <Stack.Screen name='detailsscreen' component={DetailsScreen} options={{ animation: "slide_from_right" }} />
      <Stack.Screen name='searchscreen' component={SearchScreen} />
      <Stack.Screen name='favoritescreen' component={FavoriteScreen} />
    </Stack.Navigator>

  )
}

export default Navigation