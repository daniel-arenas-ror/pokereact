import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: []
});

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return state.setIn(['pokemons'], fromJS(action.payload))
    case SET_FAVORITE:
      const currentPokemonIndex = state.getIn(['pokemons']).findIndex(pokemon => pokemon.get('id') === action.payload.id);
      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'isFavorite']);

      return state.setIn(['pokemons', currentPokemonIndex, 'isFavorite'], !isFavorite);
    default:
      return state;
  }
}
