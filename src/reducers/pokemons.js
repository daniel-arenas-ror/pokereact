import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false
};

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex(pokemon => pokemon.id === action.payload.id);
      newPokemonsList[currentPokemonIndex].isFavorite = !newPokemonsList[currentPokemonIndex].isFavorite;

      if (currentPokemonIndex >= 0) {
        return { ...state, pokemons: newPokemonsList }
      }
      return { ...state }
    default:
      return state;
  }
}
