import { combineReducers } from "redux";
import postReducer from "./post.reducer";

const root = combineReducers({
  post: postReducer,
});

export default root;
