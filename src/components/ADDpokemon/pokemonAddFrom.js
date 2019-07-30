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
    return<form  onSubmit={this.onHandleSubmit} style={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center'}} >

Name:<input value={this.state.Name} name='Name'  onChange={this.onhandleChange}/>

ImageURL:<input  value={this.state.ImageURL} name='ImageURL'  onChange={this.onhandleChange}/>
Pokemon#:<input type='number' value={this.state.PokemonNo} name='PokemonNo'  onChange={this.onhandleChange}/>

MaxCp:<input type='number' value={this.state.MaxCP} name='MaxCP'  onChange={this.onhandleChange}/>

MaxHp:<input type='number' value={this.state.MaxHP} name='MaxHP'  onChange={this.onhandleChange}/>

Type1:<input value={this.state.Type1} name='Type1'  onChange={this.onhandleChange}/>

Type2:<input value={this.state.Type2} name='Type2'  onChange={this.onhandleChange}/>


<button style={{margin:'10px' ,background:'#ff0000',color:'white',outline:'none',border:'none'}}>ADD</button>
    </form>;
  }
}

export default connect(null,{POSTPokemon}) (pokemonAddFrom);
