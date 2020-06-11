import { SET_AUTH_USER, LOGOUT } from './user.constant';

const token = localStorage.getItem('token');

const initState = {
  authUser: {},
  authenticated: !!token,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
