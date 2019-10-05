import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import pokemonsReducer from "./pokemons/pokemons.reducer";
import pokemonReducer from "./pokemon/pokemon.reducer";
import searchReducer from "./search/search.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemons", "pokemon"]
};

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
  searchField: searchReducer
});

export default persistReducer(persistConfig, rootReducer);
