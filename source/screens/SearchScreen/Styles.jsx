import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    backgroundimage: {

        height: responsiveHeight(40),
        width: responsiveWidth(100),
        justifyContent: "flex-end",
        paddingHorizontal: 25
    },
    container2: {
        flex: 2,
        paddingHorizontal: 25,
        position: "relative",
        top: -20,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    goBackIcon: {
        position:"absolute",
        top: responsiveHeight(3),
        left: responsiveWidth(5)
    },
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: responsiveHeight(1.9),
        backgroundColor: "#fff",
        borderRadius: 50,
        marginBottom: 30,
      

    },
    textInput: {
        marginLeft: 5,

    },
    textInputText: {
        color: "#747476",
        fontSize: 16,
        fontWeight: "400"
    },
    searchedPokemonView: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    searchedPokemonImage: {
        height: responsiveHeight(30),
        width: responsiveWidth(60)
    },
    searchedPokemonText: {
        fontSize: responsiveFontSize(5),
        fontWeight: "600",
        color: "black"
    }
})