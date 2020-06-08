import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducers";
import asyncReducer from "./async.reducer";

const root = combineReducers({
  post: postReducer,
  user: userReducer,
  async: asyncReducer,
});

export default root;
