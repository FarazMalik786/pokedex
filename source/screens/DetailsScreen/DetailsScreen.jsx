import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { styles } from './Styles';
import { backgroundColors } from '../../assets/Colors';
import Ionicons from "react-native-vector-icons/Ionicons"
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Navigation from '../../navigation/Navigation';
import TopTabNavigation from '../../navigation/TopTabNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { add_pokemon, remove_pokemon } from '../../redux/favouritePokemons';

const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { pokemonDetails } = route.params;
  const favouritePokemonsList = useSelector((state) => state.FavouritePokemon);

  const isExistingFavouritePokemon = () => {
    return favouritePokemonsList.some((existing) => existing.id === pokemonDetails?.id);
  }

  const handleFavouitePokemon = () => {

    if (isExistingFavouritePokemon()) {
      return dispatch(remove_pokemon({ Id: pokemonDetails?.id }));
    } else {
      return dispatch(add_pokemon(pokemonDetails));
    }
  }
  return (
    <View style={styles.container}>
     

      <View style={[styles.imageContainer, { backgroundColor: backgroundColors[pokemonDetails.types[0].type.name] }]}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={responsiveHeight(4)} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFavouitePokemon}>
            <Ionicons name={isExistingFavouritePokemon() ? "heart-sharp" : "heart-outline"} size={responsiveHeight(4)} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.name}>{pokemonDetails?.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {pokemonDetails?.types?.map((item, index) => {
              return (
                <View style={styles.typeView}>
                  <Text style={styles.typeText}>{item?.type?.name}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>

      <Image source={{ uri: pokemonDetails.sprites.other.home.front_default }}
        resizeMode='contain'
        style={styles.image}
      />

      <View style={styles.container2}>
        <TopTabNavigation pokemonDetails={pokemonDetails} />
      </View>
    </View>
  )
}

export default DetailsScreen