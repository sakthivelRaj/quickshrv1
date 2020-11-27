import axios from 'axios';
// import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PROFILE } from './types';

// GET LEADS
export const getProfile = (id) => (dispatch, getState) => {
  axios
    .get(`/api/auth/profile/${id}/`, tokenConfig(getState))
    .then((res) => {
      console.log(res.data)
      const user = res.data
      // console.log("getProfile action", user.profile.image)
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};
