import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth , responsiveFontSize} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        paddingVertical:25,
        backgroundColor:"white"
    },
    flatlist:{
       
    },
    itemcontainer:{
       flexDirection:"row",
        alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical: responsiveHeight(0),
        borderRadius: 10,
        marginRight: responsiveWidth(4),
        marginTop: responsiveHeight(5)
       
    },
    Title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#17171B",
        marginBottom: responsiveHeight(3),

    },
    name: {
        fontSize: responsiveFontSize(3.4),
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 5
    },
    image: {
        height: responsiveHeight(20),
        width: responsiveWidth(35),
        position: "absolute",
        right: responsiveWidth(3),
        top: -responsiveHeight(7)
    },
    typeContainer: {
        paddingVertical: 2,
        paddingHorizontal: 7,
        marginRight: 4,
        borderWidth: 0.5,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        textAlign: "center",
        
    },
    typeText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FFFFFF",

    }
})