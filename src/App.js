import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Pokemons from "./components/PokemonList";

import Register from "./components/Register";
import AddFrom from './components/ADDpokemon/pokemonAddFrom'
// import { getRestaurants } from './actions';
import { Navbar, NavbarBrand } from "reactstrap";

// console.log('APP props', props)
function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <Navbar style={{ backgroundColor: "#ffffff" }}>
          <NavbarBrand style={{ color: "#BD3736",display:'flex',fontSize:'10px' ,textAlign:'center',alignItems:'center' }}>
            {" "}
            <img
              alt="pokemon"
              style={{ width: "15%" }}
              src="https://i.dlpng.com/static/png/209308_preview.png"
            />
            Gotta <br /> Catch<br /> Em All
          </NavbarBrand>
          <div className="Links">
            {token ? (
             <div> <Link style={{ color: "black" }} to="/pokemon">
                Pokemons
              </Link>  <Link style={{ color: "black" }} to="/addpokemon">
               <span style={{background:'#ff0000',padding:'10px 5px',borderRadius:'10px',color:'white'}}>AddPokemons</span> 
              </Link></div>
            ) : (
              (<div>
                <Link style={{ color: "black" }} to="/register">
                  Register
                </Link>
              
                <Link style={{ color: "black" }} to="/login">
                  Login
                </Link></div>
              )
            )}
          </div>
        </Navbar>

        {token ? (
        <div>  <Route path="/pokemon" component={Pokemons} />      <Route path="/addpokemon" component={AddFrom} /></div>
        ) : (<div>
          <Route path="/login" component={Login} /> 
            <Route path="/register" component={Register} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
