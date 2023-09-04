import {
  RETRIEVE_ALL_POSTS,
  RETRIEVE_SPECIFIC_USER_POSTS,
  RETRIEVE_SPECIFIC_POST,
  REPLACE_POST,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from './ActionTypes';
import axios from 'axios';

export const getPostList = data => {
  return {
    type: RETRIEVE_ALL_POSTS,
    payload: data,
  };
};

export const FetchPostsList = () => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const postsList = res.data;
        dispatch(getPostList(postsList));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getSpecificUserPostList = data => {
  return {
    type: RETRIEVE_SPECIFIC_USER_POSTS,
    payload: data,
  };
};

export const FetchSpecificUserPostsList = id => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => {
        const userPosts = res.data;
        // console.log(userPosts);
        dispatch(getSpecificUserPostList(userPosts));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getSpecificPost = data => {
  return {
    type: RETRIEVE_SPECIFIC_POST,
    payload: data,
  };
};

export const FetchSpecificPost = id => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        const post = res.data;
        // console.log(postsList);
        dispatch(getSpecificPost(post));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const replacePost = data => {
  return {
    type: REPLACE_POST,
    payload: data,
  };
};

export const replaceSpecificPost = (id, data) => {
  return dispatch => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then(res => {
        const post = res.data;
        // console.log('zzzz>', res.status);
        dispatch(replacePost(post));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updatePost = data => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

export const updateSpecificPost = (id, data) => {
  return dispatch => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then(res => {
        const post = res.data;
        console.log('zzzz>', res.status);
        dispatch(updatePost(post));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const createPost = data => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};

export const createSpecificPost = data => {
  return dispatch => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then(res => {
        const post = res.data;
        console.log('zzzz>', post, res.status);
        dispatch(createPost(post));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deletePost = () => {
  return {
    type: DELETE_POST,
    // payload: data,
  };
};

export const deleteSpecificPost = id => {
  return dispatch => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        // const post = res.data;
        console.log('zzzz>', res.status);
        dispatch(deletePost());
      })
      .catch(err => {
        console.log(err);
      });
  };
};
