import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { requestPokemon } from "../../redux/pokemon/pokemon.actions";

import "./card.styles.scss";

const Card = ({ name, url, requestPokemon, history, match, linkUrl }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <CustomButton
      onClick={() => {
        history.push(`/${name}`);
        requestPokemon(url);
      }}
    >
      See more
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  requestPokemon: url => dispatch(requestPokemon(url))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Card)
);
