import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: false
});

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      //return { ...state, pokemons: action.payload }
      return state.setIn(['pokemons'], fromJS(action.payload))
    case SET_LOADING:
      //return { ...state, loading: action.payload }
      return state.set('loading', action.payload)
    case SET_FAVORITE:
      const currentPokemonIndex = state.getIn(['pokemons']).findIndex(pokemon => pokemon.get('id') === action.payload.id);
      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'isFavorite']);

      return state.setIn(['pokemons', currentPokemonIndex, 'isFavorite'], !isFavorite);
    default:
      return state;
  }
}
