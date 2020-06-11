import { SET_AUTH_USER } from './user.constant';

const initState = {
  authUser: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
