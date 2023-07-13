import { responsiveFontSize } from "react-native-responsive-dimensions"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"
const iconSize = responsiveFontSize(3)
const typeIcons = {
    bug:  <MaterialCommunityIcons name="ladybug" size={iconSize} />,
    dark: <MaterialIcons name="nightlight-round" size={iconSize} />,
    dragon: <FontAwesome5 name="dragon" size={iconSize}/>,
    electric: <MaterialCommunityIcons name="electron-framework" size={iconSize} /> ,
    fairy: <AntDesign name="aliwangwang" size={iconSize}/>,
    fighting: <FontAwesome5 name="hand-rock" size={iconSize}/>,
    fire: <MaterialCommunityIcons name="fire" size={iconSize} />,
    flying: <MaterialCommunityIcons name="language-swift" size={iconSize} />,
    ghost: <MaterialCommunityIcons name="ghost" size={iconSize} /> ,
    grass: <FontAwesome name="pagelines" size={iconSize} /> ,
    ground: <Fontisto name="stop" size={iconSize}/>,
    ice: <Ionicons name="cube" size={iconSize}/>,
    normal: <FontAwesome5 name="star-of-life" size={iconSize}/>,
    poison:  <MaterialCommunityIcons name="skull" size={iconSize} /> ,
    psychic: <FontAwesome5 name="brain" size={iconSize}/>,
    rock: <FontAwesome name="certificate" size={iconSize}/>,
    steel: <FontAwesome name="anchor" size={iconSize} /> ,
    water: <MaterialCommunityIcons name="water" size={iconSize} />,
}

const typeIconsName = [
    "bug", "dark" , "dragon","electric","fairy","fighting","fire","flying","ghost",
    "grass","ground","ice" , "normal","poison","psychic","rock","steel","water"
]

export { typeIcons , typeIconsName}