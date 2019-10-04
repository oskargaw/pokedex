import PokemonActionTypes from "./pokemonList.types";

export const requestPokemons = () => dispatch => {
  dispatch({ type: PokemonActionTypes.REQUEST_POKEMONS_PENDING });
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: PokemonActionTypes.REQUEST_POKEMONS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: PokemonActionTypes.REQUEST_POKEMONS_FAILED,
        payload: error
      })
    );
};
