import React, { Component } from 'react';

class MainPokemon extends Component {
  render() {
    return (
      <div className="main-pokemon">
        <img src={`./src/animated/${this.props.number}.gif`} />
        <h1>
          <span>#{this.props.number}</span> {this.props.name}
        </h1>
        <p>One green boi.</p>
    </div>
    );
  }
}

export default MainPokemon;