import React from "react";

import Card from "../Card/Card.component";

const CardList = pokemons =>
  pokemons.map((pokemon, index) => (
    <div>
      <Card key={index} name={pokemon.name} url={pokemon.url} />
    </div>
  ));

export default CardList;
