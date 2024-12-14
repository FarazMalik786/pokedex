import { configureStore } from '@reduxjs/toolkit';
import FavouritePokemon_Reducer from './favouritePokemons';
import { fakestoreApi } from './FakeStoreApi';

function customMiddleware(store) {
    return (next) => {
        return (action) => {
            next(action)
        }
    }
}
export const mystore = configureStore({
    reducer:{
        FavouritePokemon : FavouritePokemon_Reducer, 
        [fakestoreApi.reducerPath] : fakestoreApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([fakestoreApi.middleware , customMiddleware]),
    
});