import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        paddingTop: responsiveHeight(4)
    },
    title : {
        fontSize: 16,
        fontWeight:"700",
        marginBottom: responsiveHeight(3)
    },
   
    
})