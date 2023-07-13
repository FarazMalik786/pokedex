import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Styles'
import { useSelector } from 'react-redux';
import Ionicons from "react-native-vector-icons/Ionicons"
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { backgroundColors } from '../../assets/Colors';
import {  useDispatch } from 'react-redux';
import { remove_pokemon } from '../../redux/favouritePokemons';

const FavoriteScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const favouritePokemonsList = useSelector((state) => state.FavouritePokemon);

    const removedFromFavourites = (id) =>{
        dispatch(remove_pokemon({ Id: id}));
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={responsiveHeight(4)} color="black" />
            </TouchableOpacity>
            <Text style={styles.Title}>FavouritePokemons</Text>
            <FlatList
                data={favouritePokemonsList}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            key={index}
                            style={[styles.itemcontainer, { backgroundColor: backgroundColors[item.types[0].type.name] }]}

                        >

                            <View>
                                <TouchableOpacity onPress={()=> removedFromFavourites(item?.id)}>
                                    <Ionicons name={"heart-sharp"} size={responsiveHeight(4)} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.name}>{item?.name}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {item?.types?.map((item, index) => {
                                        return <View key={index} style={styles.typeContainer}>
                                            <Text style={styles.typeText}>{item?.type?.name}</Text>
                                        </View>
                                    })}
                                </View>
                            </View>

                            <Image source={{ uri: item.sprites.other.home.front_default }}
                                style={styles.image}
                                resizeMode='contain'
                            />

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default FavoriteScreen