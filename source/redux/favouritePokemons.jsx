import { createSlice } from "@reduxjs/toolkit";


const favouritePokemons_Slice = createSlice({
    name: 'favouritePokemons',
    initialState: [],
    reducers: {
        add_pokemon: (state, action) => {
            state.push(action.payload)
        },
        remove_pokemon: (state,action) =>{
           return state.filter((element)=> element.id !== action.payload.Id )
        }
    },

})
export const { add_pokemon  , remove_pokemon} = favouritePokemons_Slice.actions;

export default favouritePokemons_Slice.reducer;