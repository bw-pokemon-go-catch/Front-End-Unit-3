import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pokemon from './Pokemon'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { getPokemon,DeletePokemon } from '../actions';
import SearchBox from './SearchBox'
import ReactPlayer from 'react-player'

import { SimpleImg } from 'react-simple-img';

import Pagination from './Pagination'
class PokemonList extends React.Component {
    state={search:'',loading:false,currentPage:1,postsPerPage:9}







    componentDidMount() {
        this.props.getPokemon()
    };


   


    



    

render() {

const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;

const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage

const currentPokemon = this.props.pokemon.slice(indexOfFirstPost,indexOfLastPost)




const onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
        }

   const fliterPokemon = currentPokemon.filter(poke => {return poke.Name.toLowerCase().includes(this.state.search.toLowerCase())})
const paginate =(pagenumber)=> this.setState({currentPage:pagenumber})
   
    return this.props.fetchingData? <Fade  delay={100} duration={500}><SimpleImg width={500} applyAspectRatio={true} animationDuration={1000}  height={500} src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c31f.png" /></Fade> :(
        <div>
     

  {/*<ReactPlayer volume='.4' loop='false'  width="0" height='0'  style={{zIndex:"-1" ,display:'absulote'}} url='https://www.youtube.com/watch?v=ZBUPW6sK2S0' playing />*/}
       <Fade bottom big cascade delay={300}>    <h1 style={{color:'white',fontFamily: 'Saira Stencil One, cursive'}}>{this.props.pokemon.length} Pokemon in your DataBase </h1></Fade> 
            <SearchBox search={this.state.search}  onChange={onChange}/>
         <div style={{display:'flex' ,flexWrap:'wrap' ,width:"100%",justifyContent:'center',alignItems:'center',padding:'20px',margin:'auto'}}>
             {fliterPokemon.map((poke,i) => <Zoom key={i} delay={500}  >  <Pokemon DeletePokemon={this.props.DeletePokemon} poke={poke}/></Zoom> )}
            </div>

        <Pagination paginate={paginate} postsPerPage={this.state.postsPerPage}  totalPosts={this.props.pokemon.length}/>
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