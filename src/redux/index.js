import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './slices/pokemon';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export default store;
