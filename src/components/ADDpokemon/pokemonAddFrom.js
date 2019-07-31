import React, { Component } from "react";

import {connect} from 'react-redux'
import {POSTPokemon} from '../../actions/index'
class pokemonAddFrom extends Component {
  state = {
    PokemonNo: "",
    Name: "",
    Type1: "",
    Type2: "",
    MaxCP: 0,
    MaxHP: 0,
    ImageURL: "",
  
  };


onhandleChange= (e)=>{
e.preventDefault();

this.setState({[e.target.name]:e.target.value})
}

onHandleSubmit=(e)=>{
e.preventDefault();
this.props.POSTPokemon(this.state)
this.props.history.push('/pokemon')
}

  render() {
    return<form  onSubmit={this.onHandleSubmit} style={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center',color:'white'}} >
  
<h1 style={{fontFamily:'Saira Stencil One, cursive' ,background:'#000000',color:'white',padding:'5px 10px'}}>Whos That Pokemon?</h1>

Name:<input value={this.state.Name} name='Name'  onChange={this.onhandleChange}/>

ImageURL:<input  value={this.state.ImageURL} name='ImageURL'  onChange={this.onhandleChange}/>
Pokemon#:<input type='number' value={this.state.PokemonNo} name='PokemonNo'  onChange={this.onhandleChange}/>

MaxCp:<input type='number' value={this.state.MaxCP} name='MaxCP'  onChange={this.onhandleChange}/>

MaxHp:<input type='number' value={this.state.MaxHP} name='MaxHP'  onChange={this.onhandleChange}/>

Type1:<input value={this.state.Type1} name='Type1'  onChange={this.onhandleChange}/>

Type2:<input value={this.state.Type2} name='Type2'  onChange={this.onhandleChange}/>


<button style={{margin:'10px' ,background:'#B95244',color:'white',outline:'none',border:'none'}}>ADD</button>  <div>
<img src='https://www.stickpng.com/assets/thumbs/585965d64f6ae202fedf2871.png' alt='pokemon'/><img src='https://vignette.wikia.nocookie.net/pokemon/images/0/02/009Blastoise.png/revision/latest?cb=20140328191642' alt='pokemon'/>
<img src='https://www.stickpng.com/assets/thumbs/5859662e4f6ae202fedf2878.png' alt='pokemon'/>

</div>
    </form>;
  }
}

export default connect(null,{POSTPokemon}) (pokemonAddFrom);
