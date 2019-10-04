import PokemonsActionTypes from "./pokemons.types";

const INITIAL_STATE = {
  pokemons: [],
  isPending: false,
  error: ""
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.REQUEST_POKEMONS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case PokemonsActionTypes.REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        isPending: false
      };
    case PokemonsActionTypes.REQUEST_POKEMONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
