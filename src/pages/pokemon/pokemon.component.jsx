import React from "react";
import { connect } from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css";

import CardListPokemon from "../../components/card-list/card-list-pokemon.component";

import "./pokemon.styles.scss";

AOS.init();

const PokemonPage = ({ pokemon, match }) => {
  const pokemonName = match.url.substr(1);

  const animation = "fade-left";
  const animationDuration = "1500";
  const animationDelay = "50";

  return (
    <div className="pokemon-page">
      <div
        className="pokemon-page__title"
        data-aos={animation}
        data-aos-duration={animationDuration}
        data-aos-delay={animationDelay}
      >
        {pokemonName}
      </div>
      <CardListPokemon pokemon={pokemon} />
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export default connect(mapStateToProps)(PokemonPage);
