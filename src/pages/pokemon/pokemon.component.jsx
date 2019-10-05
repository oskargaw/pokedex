import React from "react";
import { connect } from "react-redux";

import CardListPokemon from "../../components/card-list/card-list-pokemon.component";

import "./pokemon.styles.scss";

const PokemonPage = ({ pokemon, match }) => {
  const pokemonName = match.url.substr(1);

  return (
    <div className="pokemon-page">
      <div className="pokemon-page__title">{pokemonName}</div>
      <CardListPokemon pokemon={pokemon} />
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export default connect(mapStateToProps)(PokemonPage);
