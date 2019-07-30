import React from 'react';

const Pokemon = (props) => {
    console.log(props.poke.Name,'here')
    const {Name,PokemonNo,Type1,Type2,MaxHP,MaxCP,ImageURL}=props.poke
    return (
        <div style={{borderRadius:'10px',display:'flex',background:'white',margin:'20px',justifyContent:'center',alignItems:'center',flexDirection:'column',borderBottom:"2px #ff0000 solid",borderLeft:"1px #ff0000 solid",width:' 35%',
        height: 'auto'}}>
        <div style={{border:'black 5px solid',borderRadius:'10px',padding: '14px'}}>
         <button style={{background:'transparent ' ,alignSelf:"end",padding:'none', outline:'none',border:'none'}} onClick={()=>props.DeletePokemon(props.poke.id)}>X</button>
         <div  style={{display:'flex'  , justifyContent:'space-between'}}>
         <h1 style={{fontSize:'.8rem',textAlign:' start',fontWeight:'bold'}}>{Name}</h1>
         <h1 style={{fontSize:'.8rem',fontWeight:'bold'}}>Hp:{MaxHP}</h1></div>
         <img style={{border:'groove 8px #ff0000',width:'76%',padding:'10px 20px' ,height:"137px",background:'#f3f1e1'}} src={ImageURL}/>
            
            <div style={{display:'flex' ,justifyContent:'space-evenly' ,fontSize:'.7rem',alignItems:'center'}}>
                <span>type1: {Type1}</span>
                <span>type2: {Type2}</span>
            </div>
            <div style={{display:'flex' ,justifyContent:'space-evenly',fontSize:'.5rem',alignItems:'center'}}>

            <span>Cp:{MaxCP}</span>
                <span>#{PokemonNo}</span>
            </div>
           </div>
        </div>
    );
};

export default Pokemon;