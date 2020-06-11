import { combineReducers } from 'redux';
import postReducer from '../../features/post/post.reducer';
import userReducer from '../../features/user/user.reducers';
import asyncReducer from '../../features/async/async.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const root = combineReducers({
  post: postReducer,
  user: userReducer,
  async: asyncReducer,
  toastr: toastrReducer,
});

export default root;
