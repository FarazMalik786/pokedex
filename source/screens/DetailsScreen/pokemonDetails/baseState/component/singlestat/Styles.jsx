import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: responsiveHeight(2)
    },
    title: {
        fontSize: 13,
        fontWeight: "500",
        color: "#17171B",
        width: responsiveWidth(30)
    },
    basestat: {
        fontSize: 16,
        fontWeight: "400",
        color: "#747476",
        width: responsiveWidth(10)
    },
    percentage: {
        backgroundColor: "#74747630",
        height: responsiveHeight(1.1),
        borderRadius: 10,
        width: responsiveWidth(42)
    }


})