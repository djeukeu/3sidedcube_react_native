import { getPokemons } from '../slices/pokemon';

export const getPokemonsAction = () => {
  return async (dispatch, _getState) => {
    dispatch(getPokemons());
  };
};
