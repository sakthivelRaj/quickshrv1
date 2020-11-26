import { GET_POSTS, DELETE_POST, ADD_POST, CLEAR_POSTS } from '../actions/types.js';

const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case CLEAR_POSTS:
      console.log("inside CLEAR_POSTS")
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}
