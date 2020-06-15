import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  CLEAR_POST,
  UPDATE_POST,
} from './post.constant';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';
import { actionTypes } from '../../app/utils/config';

export const fetchPosts = () => dispatch => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POSTS));

  axios
    .get('http://localhost:5001/api/post')
    .then(res => {
      const { docs, total, limit, page, pages } = res.data;
      dispatch({
        type: GET_POSTS,
        payload: { posts: docs, total, limit, page, pages },
      });
      dispatch(asyncActionFinish());
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(asyncActionError());
    });
};

export const fetchPost = id => dispatch => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POST));
  axios
    .get(`http://localhost:5001/api/post/${id}`)
    .then(res => {
      const post = res.data;
      dispatch({ type: GET_POST, payload: { post } });
      dispatch(asyncActionFinish());
    })
    .catch(err => {
      // console.log(err.response.data);
      dispatch(asyncActionError());
    });
};

export const fetchPostProfile = () => dispatch => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POSTS));

  axios
    .get(`http://localhost:5001/api/post/profile/`)
    .then(res => {
      const { docs, total, limit, page, pages } = res.data;
      dispatch({
        type: GET_POSTS,
        payload: { posts: docs, total, limit, page, pages },
      });
      dispatch(asyncActionFinish());
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(asyncActionError());
    });
};

export const createPost = (newPost, history) => dispatch => {
  const formData = new FormData();

  formData.append('title', newPost.title);
  formData.append('content', newPost.content);
  formData.append('type', newPost.type);

  if (newPost.image.file) {
    formData.append('image', newPost.image.file.originFileObj);
  }

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  dispatch(asyncActionStart(actionTypes.post.CREATE_POST));

  axios
    .post(`http://localhost:5001/api/post/`, formData, config)
    .then(res => {
      const post = res.data;

      dispatch({ type: ADD_POST, payload: { post } });
      dispatch(asyncActionFinish());
      toastr.success('Success', 'Your post has been created');
      history.push('/cam-nang-du-lich');
    })
    .catch(err => {
      console.log(err);
      toastr.error('Oops', 'Some thing when wrong, please try again');
      dispatch(asyncActionError());
    });
};

export const updatePost = (updatedPost, history) => dispatch => {
  const formData = new FormData();

  if (updatedPost.title) formData.append('title', updatedPost.title);
  if (updatedPost.content) formData.append('content', updatedPost.content);
  if (updatedPost.type) formData.append('type', updatedPost.type);

  if (updatedPost.image.file) {
    formData.append('image', updatedPost.image.file.originFileObj);
  }

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  dispatch(asyncActionStart(actionTypes.post.UPDATE_POST));

  axios
    .post(`http://localhost:5001/api/post/${updatedPost._id}`, formData, config)
    .then(res => {
      const post = res.data;

      dispatch({ type: UPDATE_POST, payload: { post } });
      dispatch(asyncActionFinish());
      toastr.success('Success', 'Your post has been updated');
      history.push('/cam-nang-du-lich');
    })
    .catch(err => {
      console.log(err);
      toastr.error('Oops', 'Some thing when wrong, please try again');
      dispatch(asyncActionError());
    });
};

export const clearPost = () => ({ type: CLEAR_POST });
