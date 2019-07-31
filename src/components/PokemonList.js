import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pokemon from './Pokemon'
import Zoom from 'react-reveal/Zoom';
import { getPokemon,DeletePokemon } from '../actions';
import SearchBox from './SearchBox'
class PokemonList extends React.Component {
    state={search:''}
    componentDidMount() {
        this.props.getPokemon()
    };


   


    



    

render() {

const onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
        }

   const fliterPokemon = this.props.pokemon.filter(poke => {return poke.Name.toLowerCase().includes(this.state.search.toLowerCase())})
    return (
        <div>
        <ReactAudioPlayer
  src="./utils/pokemonSong.ogg"
  autoPlay
  controls
/>
            <h1 style={{color:'white',fontFamily: 'Saira Stencil One, cursive'}}>Pokemons </h1>
            <SearchBox search={this.state.search}  onChange={onChange}/>
         <div style={{display:'flex' ,flexWrap:'wrap' ,width:"100%",justifyContent:'center',alignItems:'center',padding:'20px',margin:'auto'}}>
             {fliterPokemon.map((poke,i) => <Zoom key={i} delay={500}  >  <Pokemon DeletePokemon={this.props.DeletePokemon} poke={poke}/></Zoom> )}
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
    )(PokemonList)
)