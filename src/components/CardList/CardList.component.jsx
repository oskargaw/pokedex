import React from "react";

import Card from "../card/card.component";

import "./cardList.styles.scss";

const CardList = ({
  pokemons: {
    pokemons: { results }
  }
}) => (
  <div>
    {results ? (
      <div className="card-list">
        {results.map((pokemon, index) => (
          <Card key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    ) : (
      <div />
    )}
  </div>
);

export default CardList;
