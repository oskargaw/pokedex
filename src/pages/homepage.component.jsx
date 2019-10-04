import React from "react";
import { connect } from "react-redux";

import { requestPokemons } from "../redux/pokemonList/pokemonList.actions";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  componentDidMount() {
    const { requestPokemons } = this.props;

    requestPokemons();
  }

  render() {
    return <div>HELLO WORLD</div>;
  }
}

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

const mapDispatchToProps = dispatch => ({
  requestPokemons: () => dispatch(requestPokemons())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
