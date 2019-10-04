import React from "react";

import "./card.styles.scss";

const Card = ({ name, url }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <p>Hello from pokemon</p>
  </div>
);

export default Card;
