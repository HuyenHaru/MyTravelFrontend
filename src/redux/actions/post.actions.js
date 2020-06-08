import axios from "axios";
import { GET_POSTS, GET_POST, ADD_POST } from "../constants/post.constant";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "./async.actions";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("http://localhost:5001/api/post")
    .then((res) => {
      const { docs, total, limit, page, pages } = res.data;
      dispatch({
        type: GET_POSTS,
        payload: { posts: docs, total, limit, page, pages },
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const fetchPost = (id) => (dispatch) => {
  axios
    .get(`http://localhost:5001/api/post/${id}`)
    .then((res) => {
      const post = res.data;
      dispatch({ type: GET_POST, payload: { post } });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const fetchPostProfile = () => (dispatch) => {
  axios
    .get(`http://localhost:5001/api/post/profile/`)
    .then((res) => {
      const { docs, total, limit, page, pages } = res.data;
      dispatch({
        type: GET_POSTS,
        payload: { posts: docs, total, limit, page, pages },
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const createPost = (post, history) => (dispatch) => {
  const formData = new FormData();
  dispatch(asyncActionStart("createPost"));
  if (post.title) {
    formData.append("title", post.title);
  }
  if (post.content) {
    formData.append("content", post.content);
  }
  if (post.image) {
    formData.append("image", post.image);
  }

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  axios
    .post(`http://localhost:5001/api/post/`, formData, config)
    .then((res) => {
      const post = res.data;

      dispatch({ type: ADD_POST, payload: { post } });
      dispatch(asyncActionFinish());
      history.push("/cam-nang-du-lich");
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(asyncActionError());
    });
};
