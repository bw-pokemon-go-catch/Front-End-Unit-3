import React from 'react';

const Pokemon = (props) => {
    console.log(props.poke.Name,'here')
    const {Name,PokemonNo,Type1,Type2,MaxHP,MaxCP,ImageURL}=props.poke
    return (
        <div style={{borderRadius:'10px',display:'flex',background:'white',margin:'20px',justifyContent:'center',alignItems:'center',flexDirection:'column',borderBottom:"2px #ff0000 solid",borderLeft:"1px #ff0000 solid",width:' 35%',
        height: '212px'}}>
        <div style={{border:'orange 5px solid',borderRadius:'10px',padding: '14px'}}>
         <button style={{background:'transparent ' ,alignSelf:"end",padding:'none', outline:'none',border:'none'}} onClick={()=>props.DeletePokemon(props.poke.id)}>X</button>
         <img style={{border:'groove 8px yellow',width:'76%',padding:'10px 20px' ,height:"137px"}} src={ImageURL}/>
            <h1 style={{fontSize:'.8rem'}}>{Name}</h1>
            <div>
                <span>{Type1}</span>
                <span>{Type2}</span>
            </div>
           </div>
        </div>
    );
};

export default Pokemon;