import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Navigation from './source/navigation/Navigation'
import ListingScreen from './source/screens/ListingScreen/ListingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { mystore } from './source/redux/Store'


const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer >
      <Provider store={mystore}>
        <Navigation />
      </Provider>
      <StatusBar translucent={true} backgroundColor="transparent" />
    </NavigationContainer>
  )
}

export default App