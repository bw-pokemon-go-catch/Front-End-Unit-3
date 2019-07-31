import React from 'react';

const Pokemon = (props) => {
    console.log(props.poke.Name,'here')
    return (
        <div style={{display:'flex',background:'white',margin:'20px',justifyContent:'center',alignItems:'center',flexDirection:'column',borderBottom:"2px #ff0000 solid",borderLeft:"1px #ff0000 solid"}}>
         <button style={{background:'transparent ' ,alignSelf:"end",padding:'none', outline:'none',border:'none'}} onClick={()=>props.DeletePokemon(props.poke.id)}>X</button>
            <h1>{props.poke.Name}</h1>
           
        </div>
    );
};

export default Pokemon;