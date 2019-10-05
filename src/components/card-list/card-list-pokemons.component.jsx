import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import CardPokemons from "../card/card-pokemons.component";

import "./cardList.styles.scss";

AOS.init();

const CardListPokemons = ({ pokemons }) => {
  const animation = "fade-zoom-in";
  const animationDuration = "1500";
  const animationDelay = "50";

  return (
    <div>
      {pokemons ? (
        <div
          className="card-list"
          data-aos={animation}
          data-aos-duration={animationDuration}
          data-aos-delay={animationDelay}
        >
          {pokemons.map((pokemon, index) => (
            <CardPokemons key={index} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default CardListPokemons;
