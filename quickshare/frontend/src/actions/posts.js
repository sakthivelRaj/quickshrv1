import axios from 'axios';
// import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST_DETAIL } from './types';

// GET LEADS
export const getPosts = () => (dispatch, getState) => {
  axios
    .get('/api/posts/', tokenConfig(getState))
    .then((res) => {
      console.log(res.data)
      const posts = res.data
      console.log("*******check the api object")
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};

export const getPostDetail = (id) => (dispatch, getState) => {
  axios
    .get(`/api/posts/${id}/`, tokenConfig(getState))
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: GET_POST_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};

// DELETE LEAD
export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}/`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addPost = (post) => (dispatch, getState) => {
  axios
    .post('/api/posts/', post, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response.data, err.response.status))
};
