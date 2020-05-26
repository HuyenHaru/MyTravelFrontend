import { GET_POSTS, GET_POST } from "../constants/post.constant";

const initState = {
  posts: [],
  currentPost: {},
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case GET_POST:
      return {
        ...state,
        currentPost: action.payload.post,
      };
    default:
      return state;
  }
};

export default postReducer;
