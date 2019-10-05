import React from "react";

import CardPokemons from "../card/card-pokemons.component";

import "./cardList.styles.scss";

const CardListPokemons = ({
  pokemons: {
    pokemons: { results }
  }
}) => (
  <div>
    {results ? (
      <div className="card-list">
        {results.map((pokemon, index) => (
          <CardPokemons key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    ) : (
      <div />
    )}
  </div>
);

export default CardListPokemons;
