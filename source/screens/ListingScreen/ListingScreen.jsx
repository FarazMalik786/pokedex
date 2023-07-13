import { View, Text, FlatList, Button, StyleSheet, ImageBackground, Pressable, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Spinner from '../../common/spinner/Spinner';
import FilterRbSheet from './components/FilterRbSheet';
import ErrorModal from '../../common/ErrorModal.jsx/ErrorModal';
import RBSheet from "react-native-raw-bottom-sheet";

const ListingScreen = ({ navigation }) => {
    const filterRef = useRef();
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        getAllPokemons(0)
    }, []);

    useEffect(() => {
        if (isErrorVisible) {
            setTimeout(() => {
                setIsErrorVisible(false)
            }, 1500);
        }
    }, [isErrorVisible])

    const getAllPokemons = async (limit) => {

        await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${limit}&limit=10`).then((response) => {
            response?.data?.results.map(async (item, index) => {
                return await axios.get(`https://pokeapi.co/api/v2/pokemon/${item?.name}`).then((res) => {
                    setPokemonList((ext) => {
                        return [...ext, res?.data]
                    });
                }).catch((e) => {
                    console.log(e);
                    setIsErrorVisible(true)
                }).finally(() => {
                    setIsLoading(false)
                })
            })
        }).catch((e) => {
            console.log(e);
            setIsErrorVisible(true)
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const openFilters = () => {
        filterRef.current.open();
    }
   
    return (
        <View style={styles.container}>
           

            <ImageBackground source={require("../../assets/images/PokeballHeader.png")}
                style={styles.header}
            >
                <TouchableOpacity style={styles.favoriteIcon} onPress={() => navigation.navigate("favoritescreen")}>
                    <Fontisto name="favorite" color="gray" size={responsiveHeight(5)} />
                </TouchableOpacity>

                <Text style={styles.Title}>Pokédex</Text>
                <Text style={styles.Paragraph}>Search for Pokémon by name or using the National Pokédex number.</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.filterIcon} onPress={openFilters}>
                <MaterialIcons name="tune" size={responsiveHeight(5)} color="black" />
            </TouchableOpacity>
            {isLoading ?
                <Spinner />
                :
                <View style={{ paddingHorizontal: 20 }}>
                    <Pressable style={styles.searchBar}
                        onPress={() => navigation.navigate("searchscreen")}
                    >
                        <Ionicons name="search" size={26} color="black" />
                        <Text style={styles.searchPlaceholder}>What Pokémon are you looking for?</Text>
                    </Pressable>

                    <FlatList data={pokemonList}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.9}
                        onEndReached={() => getAllPokemons(pokemonList.length + 10)}
                        numColumns={2}
                        style={styles.flatlist}
                        // keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <Cards key={index} item={item} />
                            )
                        }}
                    />
                </View>
            }
            <RBSheet
                ref={filterRef}
                height={500}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }
                }}
            >
                <FilterRbSheet pokemonList={pokemonList} setPokemonListAfterFilter={setPokemonList}  />
            </RBSheet>
            <ErrorModal isvisible={isErrorVisible} />
        </View>
    )
}

export default ListingScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    header: {
        height: responsiveHeight(25),
        width: responsiveWidth(100),
        justifyContent: "flex-end",
        marginBottom: responsiveHeight(5),
        paddingHorizontal: 20
    },
    favoriteIcon: {
        position: "absolute",
        top: responsiveHeight(4),
        right: responsiveHeight(3)
    },
    Title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#17171B",
        marginBottom: 10,

    },
    Paragraph: {
        fontSize: 16,
        fontWeight: "400",
        color: "#747476",
        width: responsiveWidth(80)
    },
    searchPlaceholder: {
        color: "#747476",
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 5
    },
    searchBar: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        marginBottom: 50,
        flexDirection: "row",
        alignItems: "center"
    },
    filterIcon: {
        position: "absolute",
        right: responsiveWidth(10),
        bottom: responsiveHeight(10),
        zIndex: 5,
        backgroundColor: "lightgray",
        borderRadius: 50,
        padding: 10,
        opacity: 0.8
    }
})