import {
  RETRIEVE_ALL_POSTS,
  RETRIEVE_SPECIFIC_USER_POSTS,
  RETRIEVE_SPECIFIC_POST,
  REPLACE_POST,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from './ActionTypes';

const initialState = {
  loading: true,
  postsList: [],
  userPosts: [],
  post: {},
  errMsg: '',
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_ALL_POSTS:
      return {
        ...state,
        loading: false,
        postsList: action.payload,
      };
    case RETRIEVE_SPECIFIC_USER_POSTS:
      return {
        ...state,
        loading: false,
        userPosts: action.payload,
      };
    case RETRIEVE_SPECIFIC_POST:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case REPLACE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        // post: action.payload,
      };
    default:
      return state;
  }
};
