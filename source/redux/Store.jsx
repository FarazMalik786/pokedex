import { configureStore } from '@reduxjs/toolkit';
import FavouritePokemon_Reducer from './favouritePokemons';


export const mystore = configureStore({
    reducer:{
        FavouritePokemon : FavouritePokemon_Reducer,  
    },
});