import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  CLEAR_POST,
  UPDATE_POST,
} from '../constants/post.constant';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from './async.actions';
import { actionTypes } from '../../config/config';

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
      console.log(err.response.data);
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

export const createPost = (post, history) => dispatch => {
  const formData = new FormData();

  formData.append('title', post.title);
  formData.append('content', post.content);
  if (post.image.file) {
    formData.append('image', post.image.file.originFileObj);
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
      toastr.error('Oops', 'Some thing when wrong, please try again');
      dispatch(asyncActionError());
    });
};

export const updatePost = (id, post, history) => dispatch => {
  const formData = new FormData();

  formData.append('title', post.title);
  formData.append('content', post.content);
  if (post.image.file) {
    formData.append('image', post.image.file.originFileObj);
  }

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  dispatch(asyncActionStart(actionTypes.post.UPDATE_POST));

  axios
    .post(`http://localhost:5001/api/post/${id}`, formData, config)
    .then(res => {
      const post = res.data;

      dispatch({ type: UPDATE_POST, payload: { post } });
      dispatch(asyncActionFinish());
      toastr.success('Success', 'Your post has been updated');
      history.push('/cam-nang-du-lich');
    })
    .catch(err => {
      toastr.error('Oops', 'Some thing when wrong, please try again');
      dispatch(asyncActionError());
    });
};

export const clearPost = () => ({ type: CLEAR_POST });
