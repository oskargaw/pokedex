import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import CardPokemon from "../card/card-pokemon.component";

import "./cardList.styles.scss";

AOS.init();

const CardListPokemon = ({
  pokemon: {
    pokemon: { stats }
  }
}) => {
  const animation = "fade-zoom-in";
  const animationDuration = "1500";
  const animationDelay = "50";

  return (
    <div>
      {stats ? (
        <div
          className="card-list"
          data-aos={animation}
          data-aos-duration={animationDuration}
          data-aos-delay={animationDelay}
        >
          {stats.map((stat, index) => (
            <CardPokemon
              key={index}
              name={stat.stat.name}
              value={stat.base_stat}
            />
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default CardListPokemon;
