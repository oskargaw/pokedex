import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { requestPokemon } from "../../redux/pokemon/pokemon.actions";

import "./card.styles.scss";

const CardPokemons = ({ name, url, history, dispatch }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <CustomButton
      onClick={() => {
        history.push(`/${name}`);
        dispatch(requestPokemon(url));
      }}
    >
      See more
    </CustomButton>
  </div>
);

export default withRouter(connect(null)(CardPokemons));
