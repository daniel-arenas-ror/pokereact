import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
}

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithdetails',
  async ({ limit, offset }, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemon(limit, offset);
    const pokemonsDetails = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false))
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.id);
      state.pokemons[currentPokemonIndex].isFavorite = !state.pokemons[currentPokemonIndex].isFavorite;
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;
export default dataSlice.reducer;
