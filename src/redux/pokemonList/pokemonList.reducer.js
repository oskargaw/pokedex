import PokemonActionTypes from "./pokemonList.types";

const INITIAL_STATE = {
  pokemons: [],
  isPending: false,
  error: ""
};

const pokemonListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonActionTypes.REQUEST_POKEMONS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case PokemonActionTypes.REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        isPending: false
      };
    case PokemonActionTypes.REQUEST_POKEMONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
