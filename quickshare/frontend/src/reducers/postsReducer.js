import { GET_POSTS, DELETE_POST, ADD_POST,
 CLEAR_POSTS, GET_POST_DETAIL } from '../actions/types.js';

const initialState = {
  posts: [],
  post_detail:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        post_detail: null
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        post_detail: null
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        post_detail: null
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        post_detail: null
      };
    case GET_POST_DETAIL:
      return {
        ...state,
        post_detail: action.payload
      }
    default:
      return state;
  }
}
