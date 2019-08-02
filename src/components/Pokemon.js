import React,{useState} from "react";
import { useSpring, animated } from "react-spring";
import {Link} from 'react-router-dom'

import Fade from 'react-reveal/Fade';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];



const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Pokemon = props => {
  console.log(props.poke.Name, "here");
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));



  const { Name, PokemonNo, Type1, Type2, MaxHP, MaxCP, ImageURL,id } = props.poke;

const[state,setState]= useState(false)

const  Toggle =() => setState(!state)


  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }}
    >
      <div className="Outer_Card" style={{marginBottom:'20px'}}>
       <div className="Inner_Card">
          <button
            className="x_btn"
            onClick={() =>props.DeletePokemon(id)}
          >
         <span style={{fontSize:'0.4rem',
    background: 'rgb(255, 0, 0)',
    borderRadius: '10px',
    padding: '5px 5px',
    /* margin-bottom: 116px, */
    position:' relative',
    top:' -50px',color:'white'}}>   { `click hear to delete ${Name}`}</span>
          </button>
         <Fade right big cascade delay={1000}>  
          <div className="card_Name_div">
            <h1 className="card_Name_h1">{Name}</h1>

            <h1 className="card_hp">Hp:{MaxHP}</h1>
          </div>
          <img alt="pokemon" className="card_img" src={ImageURL} />

          <div className="card_extra">
            <span>type1: {Type1}</span>
            <span>type2: {Type2}</span>
          </div>
          <div className="card_extra" style={{ fontSize: ".5rem" }}>
            <span>Cp:{MaxCP}</span>
            <span>#{PokemonNo}</span>
          </div></Fade>
          <Link style={{textDecoration:'none' ,background:'#ff0000',color:'white'}} to={`/pokemon/${id}`}> Edit</Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Pokemon;

