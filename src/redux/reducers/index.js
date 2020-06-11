import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import userReducer from './user.reducers';
import asyncReducer from './async.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const root = combineReducers({
  post: postReducer,
  user: userReducer,
  async: asyncReducer,
  toastr: toastrReducer,
});

export default root;
