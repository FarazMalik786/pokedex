import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth , responsiveFontSize} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black"
    },
  image:{
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  }
})