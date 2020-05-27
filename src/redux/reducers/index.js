import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducers";

const root = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default root;
