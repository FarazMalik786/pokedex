import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const animatedValue =  new Animated.Value(0) 
const Spinner = () => {
   
    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 100,
                duration: 3000,
                useNativeDriver: true
            })).start()
    },[])

    return (
        <View style={styles.container}>
            <Animated.Image source={require("../../assets/images/pokeball.png")}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    )
}

export default Spinner
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        transform:[{rotate: animatedValue.interpolate({
            inputRange:[0,50,100],
            outputRange:['0deg' , '360deg' , '0deg']
        })}]
    }
})