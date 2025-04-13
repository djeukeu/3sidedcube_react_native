import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import config from '../config';

const OFFSET = 20;

export const PokemonContext = createContext({
  pokemons: [],
  pokemonsCount: 0,
  getPokemonList: async () => {},
  getPokemonDetail: async () => {},
});

// pokemon data structure
const pokemonDataFormat = (data) => {
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((el) => el.type.name),
    abilities: data.abilities.map((el) => el.ability.name),
    sprite: data.sprites.front_default,
    species: data.species.name,
    stats: data.stats.map((el) => {
      return { name: el.stat.name, value: el.base_stat };
    }),
  };
};

const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsCount, setPokemonsCount] = useState([]);

  const getPokemonList = useCallback(async (offset = 0, limit = OFFSET) => {
    try {
      // Get the list of Pokemons with the given offset value.
      const response = await axios.get(
        `${config.api}pokemon?offset=${offset * OFFSET}&limit=${limit}`
      );
      setPokemonsCount(response.data.count);
      response.data.results.map((pokemon) => {
        // Get Pokemon details
        axios.get(pokemon.url).then((pokemonData) => {
          setPokemons((prevState) => {
            // update the pokemon list and remove any possible duplicates
            const updatedState = _.uniqBy(
              [...prevState, pokemonDataFormat(pokemonData.data)],
              'id'
            );
            return updatedState;
          });
        });
      });
    } catch (error) {
      throw error.message;
    }
  }, []);

  const getPokemonDetail = useCallback(async (id) => {
    try {
      const response = await axios.get(`${config.api}pokemon/${id}`);
      return pokemonDataFormat(response.data);
    } catch (error) {
      throw error.message;
    }
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemons,
        pokemonsCount,
        getPokemonList,
        getPokemonDetail,
      }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
