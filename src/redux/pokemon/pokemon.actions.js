import PokemonActionTypes from "./pokemon.types";

export const requestPokemon = url => dispatch => {
  dispatch({ type: PokemonActionTypes.REQUEST_POKEMON_PENDING });
  fetch(url)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: PokemonActionTypes.REQUEST_POKEMON_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: PokemonActionTypes.REQUEST_POKEMON_FAILED,
        payload: error
      })
    );
};
