import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pokemon from './Pokemon'

import { getPokemon,DeletePokemon } from '../actions';

class Cities extends React.Component {
    componentDidMount() {
        this.props.getPokemon()
    };

render() {
    console.log('cityID', this.props.pokemon)
    return (
        <div>
            <h1 className='cities-header'>Pokemons </h1>
            
            <div className='city-list-wrapper' style={{display:'flex' ,flexWrap:'wrap' ,width:"50%",justifyContent:'center',alignItems:'center',padding:'20px',margin:'auto'}}>
             {this.props.pokemon.map((poke,i) => <Pokemon key={i} DeletePokemon={this.props.DeletePokemon} poke={poke}/>)}
            </div>
        </div>
    )
}
}

const mapStateToProps = ({ error, pokemon, fetchingData }) => ({
    error,
    pokemon,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        {getPokemon,DeletePokemon }
    )(Cities)
)