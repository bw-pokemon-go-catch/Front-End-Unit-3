import React, { Component } from "react";

import { connect } from "react-redux";
import { EDITPokemon, getPokemon } from "../../actions/index";

class PokemonEditFROM extends Component {
  state = {
    PokemonNo: "",
    Name: "",
    Type1: "",
    Type2: "",
    MaxCP: 0,
    MaxHP: 0,
    ImageURL: ""
  };

  componentDidMount() {
    this.props.getPokemon();
    const editPokemon = this.props.pokemon.filter(poke => {
      return poke.id === this.props.match.params.id;
    });
console.log(editPokemon,'pokemonn')
    this.setState({
      id: this.props.match.params.id,
      Name: editPokemon.name,
      Type1: editPokemon.Type1,
      Type2: editPokemon.Type2,
      MaxCP: editPokemon.MaxCP,
      MaxHP: editPokemon.MaxHP,
      ImageURL: editPokemon.ImageURL
    });
  }

  onhandleChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandle = e => [
    e.preventDefault(),
    console.log(this.state),
    this.props.EDITPokemon(this.state),
    this.props.history.push("/pokemon")
  ];

  render() {
    console.log(this.props.pokemon,'helloe')
    return (
      <form
        onSubmit={this.onSubmitHandle}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "white"
        }}
      >
        <div>
          <img
            src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c32d.png"
            alt="pokemon"
          />
          <img
            src="https://www.stickpng.com/assets/thumbs/585960bd4f6ae202fedf2856.png"
            alt="pokemon"
          />
          <img
            src="https://www.stickpng.com/assets/thumbs/5859650e4f6ae202fedf2860.png"
            alt="pokemon"
          />
        </div>
        <h1
          style={{
            fontFamily: "Saira Stencil One, cursive",
            background: "#EED53D",
            color: "white",
            padding: "5px 10px"
          }}
        >
          EDIT
        </h1>
        Name:
        <input
          value={this.state.Name}
          name="Name"
          onChange={this.onhandleChange}
        />
        ImageURL:
        <input
          value={this.state.ImageURL}
          name="ImageURL"
          onChange={this.onhandleChange}
        />
        Pokemon#:
        <input
          type="number"
          value={this.state.PokemonNo}
          name="PokemonNo"
          onChange={this.onhandleChange}
        />
        MaxCp:
        <input
          type="number"
          value={this.state.MaxCP}
          name="MaxCP"
          onChange={this.onhandleChange}
        />
        MaxHp:
        <input
          type="number"
          value={this.state.MaxHP}
          name="MaxHP"
          onChange={this.onhandleChange}
        />
        Type1:
        <input
          value={this.state.Type1}
          name="Type1"
          onChange={this.onhandleChange}
        />
        Type2:
        <input
          value={this.state.Type2}
          name="Type2"
          onChange={this.onhandleChange}
        />
        <button
          style={{
            margin: "10px",
            background: "#ff0000",
            color: "white",
            outline: "none",
            border: "none"
          }}
        >
          Update
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ error, pokemon, fetchingData }) => ({
  error,
  pokemon,
  fetchingData
});

export default connect(
  mapStateToProps,
  { EDITPokemon, getPokemon }
)(PokemonEditFROM);
