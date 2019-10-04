import { combineReducers } from "redux";

import pokemonsReducer from "./pokemons/pokemons.reducer";
import pokemonReducer from "./pokemon/pokemon.reducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
});
