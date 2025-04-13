import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import config from '../config';

const OFFSET = 20;

export const PokemonContext = createContext({
  pokemons: [],
  getPokemonList: async () => {},
});

const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonList = useCallback(async (offset = 0, limit = OFFSET) => {
    // Get the list of Pokemons with the given offset value.
    const response = await axios.get(
      `${config.api}pokemon?offset=${offset * OFFSET}&limit=${limit}`
    );
    response.data.results.map((pokemon) => {
      // Get Pokemon details
      axios.get(pokemon.url).then((pokemonData) => {
        setPokemons((prevState) => {
          // update the pokemon list and remove any possible duplicates
          const updatedState = _.uniqBy(
            [
              ...prevState,
              {
                id: pokemonData.data.id,
                name: pokemonData.data.name,
                height: pokemonData.data.height,
                weight: pokemonData.data.weight,
                types: pokemonData.data.types.map((el) => el.type.name),
                sprite: pokemonData.data.sprites.front_default,
              },
            ],
            'id'
          );
          return updatedState;
        });
      });
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons: pokemons, getPokemonList }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
