import PokemonActionTypes from "./pokemon.types";

const INITIAL_STATE = {
  pokemon: {},
  isPending: false,
  error: ""
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonActionTypes.REQUEST_POKEMON_PENDING:
      return {
        ...state,
        isPending: true
      };
    case PokemonActionTypes.REQUEST_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isPending: false
      };
    case PokemonActionTypes.REQUEST_POKEMON_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};

export default pokemonReducer;
