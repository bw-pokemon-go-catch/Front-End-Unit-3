import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Login from "./components/Login";
import Pokemons from "./components/PokemonList";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import AddFrom from "./components/ADDpokemon/pokemonAddFrom";
import EditFrom from './components/EditPokemon/PokemonEditFROM'
// import { getRestaurants } from './actions';
import { Navbar, NavbarBrand } from "reactstrap";

// console.log('APP props', props)
function App(props) {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <Navbar style={{ backgroundColor: "black" }}>
          <NavbarBrand
            style={{
              color: "#BD3736",
              display: "flex",
              fontSize: "10px",
              textAlign: "center",
              alignItems: "center"
            }}
          >
           
            <img
              alt="pokemon"
              style={{ width: "15%" }}
              src="https://i.dlpng.com/static/png/209308_preview.png"
            />
         <span style={{color:"#ffffff",fontFamily:'Saira Stencil One, cursive' }}>  Gotta <br /> Catch
            <br /> Em All <br />
            Worthymon</span>
          </NavbarBrand>
          <div className="Links">
            {token ? (
              <div>
               
                <Link style={{ color: "white" }} to="/pokemon">
                  Pokemons
                </Link>{" "}
                <Link style={{ color: "black" }} to="/addpokemon">
                  <span
                    style={{
                      background: "#1A3F44",
                      padding: "10px 5px",
                      borderRadius: "10px",
                      color: "white"
                    }}
                  >
                    AddPokemons
                  </span>
                </Link>
                <Link onClick={()=>{localStorage.removeItem("token");setTimeout(function(){ document.location.reload();}, 200)}} style={{ color: "black" }} to="/">
                  <span
                    style={{
                      background: "#1A3F44",
                      padding: "10px 5px",
                      borderRadius: "10px",
                      color: "white"
                    }}
                  >
                    LogOut
                  </span>
                </Link>
              </div>
            ) : (
              <div>
                <Link style={{ color: "white" }} to="/register">
                  Register
                </Link>

                <Link style={{ color: "black" }} to="/login">
                <span  style={{
                      background: "#1A3F44",
                      padding: "10px 5px",
                      borderRadius: "10px",
                      color: "white"
                    }}>Login</span>
                  
                </Link>
              </div>
            )}

          </div>
        </Navbar>
        <Route exact path="/" component={MainPage} />
        {token ? (
          <div>
           
            <Route exact path="/pokemon" component={Pokemons} />
            <Route exact path="/addpokemon" component={AddFrom} />
            <Route path='/pokemon/:id' component={EditFrom}/>
            <Redirect to='/pokemon' />
          </div>
        ) : (
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to='/' />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
