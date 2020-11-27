import axios from 'axios';
// import { returnErrors } from './messages';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_POSTS
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      console.log(res.data)      
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("loading fail")
      console.log(err.response)
    });
};

// LOGIN USER
export const login = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ email, password });
  
  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response)
    });
};

// REGISTER USER
export const register = ({ username, firstName, lastName, email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


  // Request Body
  const body = JSON.stringify({ username:username, first_name:firstName, last_name:lastName, email:email, password:password });

  axios
    .post('/api/auth/register', body, config)
    .then((res) => {
      console.log("registerapi response", res.data)      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("registerapi error response", err.response)
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: CLEAR_POSTS });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
    console.log(err.response)
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
