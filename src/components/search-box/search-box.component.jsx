import React from "react";

import "./search-box.styles.scss";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search-box">
      <input
        className="search-box__input"
        type="search"
        placeholder="search pokemons"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
