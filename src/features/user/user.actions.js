import axios from "axios";
import { SET_AUTH_USER, LOGOUT } from "./user.constant";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/async.actions";
import { closeModal } from "../modal/modal.actions";
import { toastr } from "react-redux-toastr";

export const login = (userCredentials, history) => (dispatch) => {
  const { email, password } = userCredentials;

  dispatch(asyncActionStart("login"));

  axios
    .post("https://still-castle-31935.herokuapp.com/api/auth/login", {
      email,
      password,
    })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return axios.get("https://still-castle-31935.herokuapp.com/api/auth/");
    })
    .then((res) => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
      dispatch(asyncActionFinish());
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
      dispatch(asyncActionError(err.response.data));
    });
};

export const register = (userCredentials, history) => (dispatch) => {
  const { username, email, password, confirmPassword } = userCredentials;
  axios
    .post("https://still-castle-31935.herokuapp.com/api/auth/register", {
      username,
      email,
      password,
      confirmPassword,
    })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return axios.get("https://still-castle-31935.herokuapp.com/api/auth/");
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
    .get("https://still-castle-31935.herokuapp.com/api/auth/")
    .then((res) => {
      const user = res.data;

      dispatch({ type: SET_AUTH_USER, payload: { user } });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadProfileImage = (file) => async (dispatch) => {
  const formData = new FormData();
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  formData.append("image", file.originFileObj);

  dispatch(asyncActionStart("uploadAvatar"));
  try {
    const res = await axios.post(
      "https://still-castle-31935.herokuapp.com/api/auth/me/upload",
      formData,
      config
    );
    const { user } = res.data;

    dispatch({ type: SET_AUTH_USER, payload: { user } });
    dispatch(getAuthUser());
    // dispatch(getAuthProfile());
    dispatch(asyncActionFinish());
    dispatch(closeModal());
    toastr.success("Success", "Your avatar has been updated");
  } catch (err) {
    console.log(err.response.data);

    dispatch(asyncActionError());
    toastr.error("Oops", "Some thing went wrong, please try again");
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SET_AUTH_USER, payload: { user: {} } });
  dispatch({ type: LOGOUT });
};
