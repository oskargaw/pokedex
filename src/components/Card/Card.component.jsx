import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { requestPokemon } from "../../redux/pokemon/pokemon.actions";

import "./card.styles.scss";

const Card = ({ name, url, requestPokemon }) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <CustomButton onClick={() => requestPokemon(url)}>See more</CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  requestPokemon: url => dispatch(requestPokemon(url))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
