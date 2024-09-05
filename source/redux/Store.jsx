import { configureStore } from '@reduxjs/toolkit';
import FavouritePokemon_Reducer from './favouritePokemons';
import { fakestoreApi } from './FakeStoreApi';


export const mystore = configureStore({
    reducer:{
        FavouritePokemon : FavouritePokemon_Reducer, 
        [fakestoreApi.reducerPath] : fakestoreApi.reducer 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakestoreApi.middleware),
});