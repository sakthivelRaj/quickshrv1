import { combineReducers } from 'redux';
import auth from './authReducer';
import posts from './postsReducer';
import profile from './profileReducer';

export default combineReducers({
  auth,
  posts,
  profile
});
