import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails, getPokemonDetailsByName } from '../api';
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonDetails: null,
  searchTerm: '',
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

export const fetchPokemonDetailsByName = createAsyncThunk(
  'data/fetchPokemonDetailsByName',
  async (name, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonDetails = await getPokemonDetailsByName(name);
    dispatch(setPokemonDetails(pokemonDetails));
    dispatch(setLoading(false));
  }
);

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
    setPokemonDetails: (state, action) => {
      state.pokemonDetails = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setPokemons, setFavorite, setPokemonDetails, setSearchTerm } = dataSlice.actions;
export default dataSlice.reducer;
