import React from "react";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";

import Homepage from "./pages/homepage/homepage.component";
import PokemonPage from "./pages/pokemon/pokemon.component";

import "./App.scss";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function App() {
  return (
    <div className="container">
      <Particles className="particles" params={particlesOptions} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:pokemon" component={PokemonPage} />
      </Switch>
    </div>
  );
}

export default App;
