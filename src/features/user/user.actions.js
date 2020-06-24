import axios from 'axios';
import { SET_AUTH_USER, LOGOUT } from './user.constant';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';

export const login = (userCredentials, history) => dispatch => {
  const { email, password } = userCredentials;

  dispatch(asyncActionStart('login'));

  axios
    .post('/api/auth/login', { email, password })
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return axios.get('/api/auth/');
    })
    .then(res => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
      dispatch(asyncActionFinish());
      history.push('/');
    })
    .catch(err => {
      console.log(err);
      dispatch(asyncActionError(err.response.data));
    });
};

export const register = (userCredentials, history) => dispatch => {
  const { username, email, password, confirmPassword } = userCredentials;
  axios
    .post('/api/auth/register', {
      username,
      email,
      password,
      confirmPassword,
    })
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return axios.get('/api/auth/');
    })
    .then(res => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAuthUser = token => dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  axios
    .get('/api/auth/')
    .then(res => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
    })
    .catch(err => {
      console.log(err);
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: SET_AUTH_USER, payload: { user: {} } });
  dispatch({ type: LOGOUT });
};
