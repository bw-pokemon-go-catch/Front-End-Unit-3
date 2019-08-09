import React from "react";
import { connect } from "react-redux";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Loader } from 'semantic-ui-react'
import { login } from "../actions";
import ReactPlayer from 'react-player'

import Fade from 'react-reveal/Fade';
import { SimpleImg } from 'react-simple-img';
class Login extends React.Component {
  state = {
    
      username: "",
      password: ""
    
  };

  handleChange = e => {
    this.setState({
      
        [e.target.name]: e.target.value
      
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state)
   
       
      setTimeout(function(){ document.location.reload(); this.props.history.push("/pokemon")}, 400)


  };

  
   

  render() {
    console.log()
    return this.props.loggingIn ?<Fade duration={1000} ><SimpleImg  height={500} src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c31f.png" /></Fade> :(
      <div>
        <ReactPlayer volume='.1' loop='false'  width="0" height='0'  style={{zIndex:"-1" ,display:'absulote'}} url='https://www.youtube.com/watch?v=gF1FJRM8Wck' playing />
        <Form onSubmit={this.login}>


       
        <h1 style={{fontFamily:'Saira Stencil One, cursive' ,color:'white',padding:'5px 10px'}}>Login</h1>

          <FormGroup>   
            <Label for="username">Username: </Label>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Input 
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password: </Label>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Input
                type="text"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <Button color="warning" >
           { this.props.loggingIn ? <Loader active inline='centered'/> :'Login'}
          </Button> <div>
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c319.png"
            alt="pokemon"
          />
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c32a.png"
            alt="pokemon"
          />
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/585965284f6ae202fedf2862.png"
            alt="pokemon"
          />
        </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
