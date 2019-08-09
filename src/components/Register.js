import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { SimpleImg } from 'react-simple-img';
import { register } from '../actions';

import Fade from 'react-reveal/Fade';
class Register extends React.Component {
    state = {
        
            username: '',
            password: '',
            email: ''
        
    }

    handleChange = e => {
        this.setState({
            
                
                [e.target.name]: e.target.value
            
        })
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state)
         this.props.history.push("/login");
    }
    
    render() {


   return     this.props.registering ? <Fade duration={1000} ><SimpleImg  height={500} src="https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c31f.png" /></Fade>:
        (
            <div>
                <Form onSubmit={this.register}>

        <h1 style={{fontFamily:'Saira Stencil One, cursive' ,color:'white',padding:'5px 10px'}}>Login</h1>



                    <FormGroup >
                        <Label for='username'>Username: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                    <FormGroup >
                        <Label for='password'>Password: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='password'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                    <FormGroup >
                        <Label for='email'>Email: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                <Button color='warning'>Submit
                    </Button>
                <div>
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/5859662e4f6ae202fedf2878.png"
            alt="pokemon"
          />
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/585960224f6ae202fedf2853.png"
            alt="pokemon"
          />
          <img style={{width:'30%'}}
            src="https://www.stickpng.com/assets/thumbs/585960dd4f6ae202fedf2857.png"
            alt="pokemon"
          />
        </div>
                </Form>

            </div>
        )
    }
}

    const mapStateToProps = state => ({
        // error: state.error,
        registering: state.registering
    })

    export default connect(
        mapStateToProps,
        { register }
    )(Register);
