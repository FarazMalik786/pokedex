import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './Styles'

const FirstScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("listingscreen");
        }, 1500);
    });

    return (
        <View style={styles.container}>
            <Image source={require(`../../assets/images/wallpaper.webp`)}
                style={styles.image}
                
            />
        </View>
    )
}

export default FirstScreen