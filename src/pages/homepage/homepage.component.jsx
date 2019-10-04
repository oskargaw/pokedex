import React from "react";
import { connect } from "react-redux";

import CardList from "../../components/cardList/cardList.component";

import { requestPokemons } from "../../redux/pokemons/pokemons.actions";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  componentDidMount() {
    const { requestPokemons } = this.props;

    requestPokemons();
  }

  render() {
    const { pokemons } = this.props;

    return (
      <div className="homepage">
        <CardList pokemons={pokemons} />
      </div>
    );
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
