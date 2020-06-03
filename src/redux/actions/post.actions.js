import axios from "axios";
import { GET_POSTS, GET_POST } from "../constants/post.constant";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/post")
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
    .get(`http://localhost:5000/api/post/${id}`)
    .then((res) => {
      // console.log(res);
      const post = res.data;
      dispatch({ type: GET_POST, payload: { post } });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const fetchPostProfile = () => (dispatch) => {
  axios
    .get(`http://localhost:5000/api/post/profile/`)
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
