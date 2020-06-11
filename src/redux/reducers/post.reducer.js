import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  CLEAR_POST,
  UPDATE_POST,
} from '../constants/post.constant';

const initState = {
  posts: [],
  currentPost: null,
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
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.post._id ? payload.post : post
        ),
      };
    case CLEAR_POST:
      return {
        ...state,
        currentPost: null,
      };
    default:
      return state;
  }
};

export default postReducer;
