import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { backgroundColors } from '../../assets/Colors';

const ErrorModal = ({isvisible , closeModal}) => {
    return (
        <>
            <Modal isVisible={isvisible} 
            
            >
                <View style={styles.container}>
                    <MaterialIcons name="dangerous" color="red" size={responsiveHeight(10)} />
                    <Text style={styles.text}>Try Again Later !!!</Text>
                </View>
            </Modal>
        </>
    )
}

export default ErrorModal
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        padding: responsiveHeight(5),
        borderRadius: 30,
    },
    text: {
        fontSize: responsiveFontSize(3),
        fontWeight: "700",
        color: "black"
    }
})