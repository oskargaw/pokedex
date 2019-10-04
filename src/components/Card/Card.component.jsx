import React from "react";

const Card = ({ name, url }) => (
  <div class="card">
    <img className="card__image" src={url} alt="pokemon" />
    <div class="card__text">
      <h4>
        <b>Pokemon</b>
      </h4>
      <p>Hello from pokemon</p>
    </div>
  </div>
);

export default Card;
