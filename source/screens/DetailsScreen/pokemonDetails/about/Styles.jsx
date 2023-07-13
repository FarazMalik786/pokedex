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
    singleDetailContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom: responsiveHeight(2)
    },
    detailTitle:{
        fontSize:13,
        fontWeight:"500",
       
        color:"#17171B",
        width: responsiveWidth(30)
    },
    detailValue:{
        fontSize:15,
        fontWeight:"400",
        color:"#747476",
        width: responsiveWidth(70),
    }
    
})