import React from "react";

import Particles from "react-particles-js";

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
    </div>
  );
}

export default App;
