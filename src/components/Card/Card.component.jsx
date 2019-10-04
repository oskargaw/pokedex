import React from "react";

import "./card.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const Card = ({ name, url }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <CustomButton>See more</CustomButton>
  </div>
);

export default Card;
