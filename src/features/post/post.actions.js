import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  CLEAR_POST,
  UPDATE_POST,
  COMMENT_ON_POST,
  DELETE_POST_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  GET_POSTS_BY_TYPE,
} from "./post.constant";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/async.actions";
import { actionTypes } from "../../app/utils/config";

export const fetchPosts = (page = null, limit = null) => (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POSTS));
  const query = page && limit ? `?page=${page}&limit=${limit}` : "";

  axios
    .get(`https://still-castle-31935.herokuapp.com/api/post/${query}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
      dispatch(asyncActionFinish());
    })
    .catch((err) => {
      console.log(err);
      dispatch(asyncActionError());
    });
};

export const fetchPostsByType = (type, page = null, limit = null) => async (
  dispatch
) => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POSTS));
  const query = page && limit ? `?page=${page}&limit=${limit}` : "";

  axios
    .get(
      `https://still-castle-31935.herokuapp.com/api/post/type/${type}/${query}`
    )
    .then((res) => {
      dispatch({
        type: GET_POSTS_BY_TYPE,
        payload: {
          data: res.data,
          type,
        },
      });
      dispatch(asyncActionFinish());
    })
    .catch((err) => {
      console.log(err);
      dispatch(asyncActionError());
    });
};

export const fetchPost = (id) => (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POST));
  axios
    .get(`https://still-castle-31935.herokuapp.com/api/post/${id}`)
    .then((res) => {
      const { post } = res.data;
      dispatch({ type: GET_POST, payload: { post } });
      dispatch(asyncActionFinish());
    })
    .catch((err) => {
      console.log(err);
      dispatch(asyncActionError());
    });
};

export const fetchPostProfile = (token, page = 1, limit = 6) => (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.FETCH_POSTS));

  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  axios
    .get(
      `https://still-castle-31935.herokuapp.com/api/post/me/?page=${page}&limit=${limit}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      const { docs, total, limit, page, pages } = res.data;
      dispatch({
        type: GET_POSTS,
        payload: { posts: docs, total, limit, page, pages },
      });
      dispatch(asyncActionFinish());
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(asyncActionError());
    });
};

export const createPost = (newPost, history) => (dispatch) => {
  const formData = new FormData();

  formData.append("title", newPost.title);
  formData.append("content", newPost.content);
  formData.append("type", newPost.type);

  if (newPost.image.file) {
    formData.append("image", newPost.image.file.originFileObj);
  }

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  dispatch(asyncActionStart(actionTypes.post.CREATE_POST));

  axios
    .post(
      `https://still-castle-31935.herokuapp.com/api/post/`,
      formData,
      config
    )
    .then((res) => {
      const { post } = res.data;

      dispatch({ type: ADD_POST, payload: { post } });
      dispatch(asyncActionFinish());
      toastr.success("Success", "Your post has been created");
      history.push(`/cam-nang-du-lich/${post._id}`);
    })
    .catch((err) => {
      console.log(err);
      toastr.error("Oops", "Some thing when wrong, please try again");
      dispatch(asyncActionError());
    });
};

export const updatePost = (updatedPost, history) => (dispatch) => {
  const formData = new FormData();

  if (updatedPost.title) formData.append("title", updatedPost.title);
  if (updatedPost.content) formData.append("content", updatedPost.content);
  if (updatedPost.type) formData.append("type", updatedPost.type);

  if (updatedPost.image.file) {
    formData.append("image", updatedPost.image.file.originFileObj);
  }

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  dispatch(asyncActionStart(actionTypes.post.UPDATE_POST));

  axios
    .post(
      `https://still-castle-31935.herokuapp.com/api/post/${updatedPost._id}`,
      formData,
      config
    )
    .then((res) => {
      const { post } = res.data;

      dispatch({ type: UPDATE_POST, payload: { post } });
      dispatch(asyncActionFinish());
      toastr.success("Success", "Your post has been updated");
      history.push(`/cam-nang-du-lich/${post._id}`);
    })
    .catch((err) => {
      console.log(err);
      toastr.error("Oops", "Some thing when wrong, please try again");
      dispatch(asyncActionError());
    });
};

export const commentOnPost = (postId, comment) => async (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.CREATE_POST));

  try {
    const response = await axios.post(
      `https://still-castle-31935.herokuapp.com/api/post/comment/${postId}`,
      comment
    );
    const { post } = response.data;

    dispatch({ type: COMMENT_ON_POST, payload: { post } });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log(err);
    toastr.error("Oops", "Some thing when wrong, please try again");
    dispatch(asyncActionError());
  }
};

export const deletePostComment = (postId, commentId) => async (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.DELETE_POST_COMMENT, commentId));

  try {
    const response = await axios.delete(
      `https://still-castle-31935.herokuapp.com/api/post/comment/${postId}/${commentId}`
    );
    const { post } = response.data;

    dispatch({ type: DELETE_POST_COMMENT, payload: { post } });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log(err);
    dispatch(asyncActionError());
    toastr.error("Oops", "Some thing went wrong, please try again");
  }
};

export const likePost = (postId) => async (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.LIKE_POST));

  try {
    const response = await axios.put(
      `https://still-castle-31935.herokuapp.com/api/post/like/${postId}`
    );
    const { post } = response.data;

    dispatch({ type: LIKE_POST, payload: { post } });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log(err);
    dispatch(asyncActionError());
    toastr.error("Oops", err.response.data.general.msg);
  }
};

export const unlikePost = (postId) => async (dispatch) => {
  dispatch(asyncActionStart(actionTypes.post.UNLIKE_POST));

  try {
    const response = await axios.put(
      `https://still-castle-31935.herokuapp.com/api/post/unlike/${postId}`
    );
    const { post } = response.data;

    dispatch({ type: UNLIKE_POST, payload: { post } });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log(err.response.data);
    dispatch(asyncActionError());
    toastr.error("Oops", err.response.data.general.msg);
  }
};

export const clearPost = () => ({ type: CLEAR_POST });
