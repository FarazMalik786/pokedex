import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { backgroundColors } from '../../../assets/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { typeIcons } from '../../../assets/Icons'

const Cards = ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColors[item.types[0].type.name] }]}
            onPress={() => navigation.navigate("detailsscreen", { pokemonDetails: item })}
        >
            <Image source={{ uri: item?.sprites?.other?.home?.front_default }}
                style={styles.image}
                resizeMode='contain'
            />
            <View>
                <Text style={styles.name}>{item?.name}</Text>
                {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {item?.types?.map((item, index) => {
                        return <View key={index} style={styles.typeContainer}>
                            <Text style={{color:"white"}}>{typeIcons[item?.type?.name]}</Text>
                            <Text style={styles.typeText}>{item?.type?.name}</Text>
                        </View>
                    })}
                </View> */}
            </View>

        </TouchableOpacity>

    )
}

export default Cards
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: responsiveHeight(2),
        borderRadius: 10,
        marginRight: responsiveWidth(4),
        width: responsiveWidth(42)
    },
    name: {
        fontSize: responsiveFontSize(3.4),
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 5
    },
    image: {
        height: responsiveHeight(15),
        width: responsiveWidth(28),
        // position: "absolute",
        // right: 0,
        // top: -responsiveHeight(5)
    },
    typeContainer: {
        paddingVertical: 2,
        paddingHorizontal: 7,
        marginRight: 4,
        borderWidth: 0.5,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        textAlign: "center",
        alignItems:"center"
    },
    typeText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FFFFFF",

    }
})