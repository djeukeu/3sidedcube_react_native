import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: '',
  },
  reducers: {
    getPokemons: (_state, action) => {
      return { pokemons: action.payload };
    },
  },
});

export const { getPokemons } = pokemonSlice.actions;

export default pokemonSlice;
