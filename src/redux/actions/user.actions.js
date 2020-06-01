import axios from "axios";
import { SET_AUTH_USER } from "../constants/user.constant";

export const login = (userCredentials, history) => (dispatch) => {
  const { email, password } = userCredentials;
  axios
    .post("http://localhost:5000/api/auth/login", { email, password })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return axios.get("http://localhost:5000/api/auth/");
    })
    .then((res) => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (userCredentials, history) => (dispatch) => {
  const { username, email, password, confirmPassword } = userCredentials;
  axios
    .post("http://localhost:5000/api/auth/register", {
      username,
      email,
      password,
      confirmPassword,
    })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return axios.get("http://localhost:5000/api/auth/");
    })
    .then((res) => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAuthUser = (token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios
    .get("http://localhost:5000/api/auth/")
    .then((res) => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SET_AUTH_USER, payload: { user: {} } });
};
