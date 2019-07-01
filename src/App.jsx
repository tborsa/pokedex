import React, { Component } from 'react';
import Pokedex from './Pokedex.jsx';

class App extends Component {
  render() {
    const name = "bulbasaur";
    const classname = "app";
    return (
      <div className={classname}>
        <Pokedex />
      </div>
    );
  }
}

export default App;
