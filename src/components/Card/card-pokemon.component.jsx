import React from "react";

import "./card.styles.scss";

const CardPokemon = ({ name, value }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <div className="card__text">{value}</div>
  </div>
);

export default CardPokemon;
