import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: responsiveHeight(42),
        paddingHorizontal: 20,
        
    },
    image: {
        height: responsiveHeight(30),
        width: responsiveWidth(80),
        alignSelf: "center",
        position:"absolute",
        top: responsiveHeight(15),
        zIndex:2
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5)
    },
    name: {
        fontSize: 32,
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: responsiveHeight(1.5)
    },
    typeView: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginRight: 5,
        backgroundColor:"#FFFFFF50"
    },
    typeText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#FFFFFF"
    },
    container2: {
        flex: 2,
        paddingHorizontal: 25,
        paddingVertical:25,
        position: "relative",
        top: -20,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        
    },
})