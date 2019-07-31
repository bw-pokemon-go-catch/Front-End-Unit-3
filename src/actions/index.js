

import signUpAxios from 'axios';
import axios from '../Authentication/AxiosAuth';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios()
    // const user_id = localStorage.getItem(${userId})
    .post('https://pokemon-go-bw-backend.herokuapp.com/auth/login', creds)
    .then(res => { console.log('token', res.data.token);
        console.log('userId', res.data.userId);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message
        });
      });
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = userInfo => dispatch => {
    dispatch({ type: REGISTER_START });
    signUpAxios
    .post('https://pokemon-go-bw-backend.herokuapp.com/auth/register', userInfo)
    .then(res => {
        console.log('register', res.data);
        dispatch({ type: REGISTER_SUCCESS })
    })
    .catch(err => {
        console.log(err)
    })
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getPokemon= () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios()
    .get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
    .then(res => {
        console.log('response', res);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, 
            payload: err.response })
    })
}




export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE'

export const DeletePokemon= (id) => dispatch => {
    dispatch({ type: DELETE_DATA_START });
    axios()
    .get(`https://pokemon-go-bw-backend.herokuapp.com/pokemon/${id}`)
    .then(res => {
        console.log('response', res);
        dispatch({ type: DELETE_DATA_SUCCESS, payload: id })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: DELETE_DATA_FAILURE, 
            payload: err.response })
    })
}
