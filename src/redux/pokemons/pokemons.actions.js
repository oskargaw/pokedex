import PokemonsActionTypes from "./pokemons.types";

export const requestPokemons = () => dispatch => {
  dispatch({ type: PokemonsActionTypes.REQUEST_POKEMONS_PENDING });
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=200")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: PokemonsActionTypes.REQUEST_POKEMONS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: PokemonsActionTypes.REQUEST_POKEMONS_FAILED,
        payload: error
      })
    );
};
