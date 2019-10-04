import { combineReducers } from "redux";

import pokemonListReducer from "./pokemonList/pokemonList.reducer";

export default combineReducers({
  pokemons: pokemonListReducer
});
