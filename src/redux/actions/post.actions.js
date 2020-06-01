import axios from "axios";
import { GET_POSTS, GET_POST } from "../constants/post.constant";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("http://localhost:5000/posts")
    .then((res) => {
      const posts = res.data.data;
      dispatch({ type: GET_POSTS, payload: { posts } });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const fetchPost = (id) => (dispatch) => {
  axios
    .get(`http://localhost:5000/posts/${id}`)
    .then((res) => {
      console.log(res);
      const post = res.data;
      dispatch({ type: GET_POST, payload: { post } });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
