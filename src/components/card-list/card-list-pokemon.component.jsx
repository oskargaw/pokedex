import React from "react";

import CardPokemon from "../card/card-pokemon.component";

import "./cardList.styles.scss";

const CardListPokemon = ({
  pokemon: {
    pokemon: { stats }
  }
}) => (
  <div>
    {stats ? (
      <div className="card-list">
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

export default CardListPokemon;
