import { View, Text, TextInput, Image, ImageBackground, StatusBar, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { styles } from './Styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import axios from 'axios'
import Spinner from '../../common/spinner/Spinner'
import ErrorModal from '../../common/ErrorModal.jsx/ErrorModal'


const SearchScreen = ({ navigation }) => {
  const [inputValue, setinputValue] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (isErrorVisible) {
      setTimeout(() => {
        setIsErrorVisible(false)
      }, 1500);
    }
  }, [isErrorVisible]);

  const search = async () => {
    setIsLoading(true)
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`).then((res) => {
      setPokemonDetails(res?.data)
    }).catch(() => {
      isErrorVisible(true)
    }).finally(() => {
      setIsLoading(false);
      setinputValue("")
    })
  }
  return (
    <View style={styles.container}>
     

      <ImageBackground source={{ uri: "https://www.colorwallpapers.com/uploads/wallpaper/pokemon-wallpapers/width-853/3C1Kiv5M4Cck-wonderful-pokemon-backgrounds-image-for-computer.jpg" }}
        style={styles.backgroundimage}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
          <Ionicons name="arrow-back" size={responsiveHeight(4)} color="white" />
        </TouchableOpacity>
        <View style={styles.searchbar}>
          <Ionicons name="search" size={responsiveFontSize(3)} color="black" />
          <TextInput placeholder='What Pokémon are you looking for?'
            placeholderTextColor="#747476"
            style={styles.textInput}
            onChangeText={(v) => {
              if (v !== "" || v) {
                setinputValue(v);
              } else {
                setPokemonDetails({})
              }
            }}
            keyboardType='web-search'
            onSubmitEditing={search}
          >
            <Text style={styles.textInputText}>{inputValue}</Text>
          </TextInput>
        </View>
      </ImageBackground>
      <View style={styles.container2}>
        {
          isLoading ?
            <Spinner />
            :
            <TouchableOpacity style={styles.searchedPokemonView}
              onPress={() => navigation.navigate("detailsscreen", { pokemonDetails: pokemonDetails })}
            >
              <Image source={{ uri: pokemonDetails?.sprites?.other?.home.front_default }}
                style={styles.searchedPokemonImage}
              />
              <Text style={styles.searchedPokemonText}>{pokemonDetails?.name}</Text>
            </TouchableOpacity>
        }
      </View>
      <ErrorModal isvisible={isErrorVisible} />
    </View>
  )
}

export default SearchScreen