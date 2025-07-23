import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

export default combineReducers({
  data: pokemonsReducer,
  ui: uiReducer
});
