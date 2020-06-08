import { GET_POSTS, GET_POST, ADD_POST } from "../constants/post.constant";

const initState = {
  posts: [],
  currentPost: {},
};

const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload.posts,
      };
    case GET_POST:
      return {
        ...state,
        currentPost: payload.post,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload.post],
        currentPost: payload.post,
      };
    default:
      return state;
  }
};

export default postReducer;
