import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types"
import { getPokemonDetails } from '../api';

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

export const getPokemonstWithDetails = 
  (pokemons = []) => 
  async (dispatch) => {

  const pokemonsDetailed = await Promise.all(
    pokemons.map(pokemon => getPokemonDetails(pokemon))
  );

  dispatch(setPokemons(pokemonsDetailed));
};
