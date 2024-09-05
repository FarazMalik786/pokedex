import React, { useEffect } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import Navigation from './source/navigation/Navigation'
import ListingScreen from './source/screens/ListingScreen/ListingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { mystore } from './source/redux/Store'
import messaging from '@react-native-firebase/messaging';


const Stack = createNativeStackNavigator()
const App = () => {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      
      // Alert.alert(remoteMessage?.notification?.title);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // getReq()
    getToken()
  }, [])

  async function getToken() {
    const requestPermission = await requestUserPermission()
    // const registered = await messaging().registerDeviceForRemoteMessages()
    const apn = await messaging()?.getAPNSToken()
    console.log("apn :",apn);
    
    await messaging().setAPNSToken('74657374696E67746F6B656E');
    // console.log("registered :",registered);
    
    if (true) {

      try {
        const myToken = await messaging().getToken()
        console.log("myToken :", myToken);
      } catch (error) {
        console.log("error", error);
      }

    }

  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission()
    
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
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