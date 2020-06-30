import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  CLEAR_POST,
  UPDATE_POST,
  COMMENT_ON_POST,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST_COMMENT,
  GET_POSTS_BY_TYPE,
} from './post.constant';

const initState = {
  posts: {
    docs: [],
    totalDocs: 0,
    limit: 10,
    totalPages: 0,
    page: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
  experiencePosts: {
    docs: [],
    totalDocs: 0,
    limit: 10,
    totalPages: 0,
    page: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
  foodPosts: {
    docs: [],
    totalDocs: 0,
    limit: 10,
    totalPages: 0,
    page: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
  placePosts: {
    docs: [],
    totalDocs: 0,
    limit: 10,
    totalPages: 0,
    page: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
  currentPost: null,
};

const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          ...payload,
        },
      };
    case GET_POST:
      return {
        ...state,
        currentPost: payload.post,
      };
    case GET_POSTS_BY_TYPE:
      switch (payload.type) {
        case 'experience':
          return {
            ...state,
            experiencePosts: payload.data,
          };
        case 'food':
          return {
            ...state,
            foodPosts: payload.data,
          };
        case 'place':
          return {
            ...state,
            placePosts: payload.data,
          };
        default:
          return {
            ...state,
            experiencePosts: payload.data,
          };
      }
    case ADD_POST:
      return {
        ...state,
        currentPost: payload.post,
      };
    case UPDATE_POST:
      return {
        ...state,
        currentPost: payload.post,
      };
    case COMMENT_ON_POST:
    case LIKE_POST:
    case UNLIKE_POST:
    case DELETE_POST_COMMENT:
      return {
        ...state,
        currentPost: payload.post,
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
