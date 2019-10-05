import React from "react";
import { connect } from "react-redux";

import CardListPokemons from "../../components/card-list/card-list-pokemons.component";
import SearchBox from "../../components/search-box/search-box.component";

import { requestPokemons } from "../../redux/pokemons/pokemons.actions";
import { setSearchField } from "../../redux/search/search.actions";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  componentDidMount() {
    const { requestPokemons } = this.props;

    requestPokemons();
  }

  render() {
    const {
      pokemons: {
        pokemons: { results }
      },
      searchField: { searchField },
      setSearchField
    } = this.props;

    const filteredPokemons = results.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="homepage">
        <SearchBox searchChange={setSearchField} />
        <CardListPokemons pokemons={filteredPokemons} />
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons, searchField }) => ({
  pokemons,
  searchField
});

const mapDispatchToProps = dispatch => {
  return {
    setSearchField: event => dispatch(setSearchField(event.target.value)),
    requestPokemons: () => dispatch(requestPokemons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
