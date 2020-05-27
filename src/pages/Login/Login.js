import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/user.actions";
import { InputGroup, FormControl } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    const user = {
      email: state.email,
      password: state.password,
    };
    dispatch(login(user, history));
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <i className="fas fa-envelope"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Email"
            type="email"
            aria-label="Email"
            name="email"
            aria-describedby="basic-addon1"
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="pass">
              <i className="fas fa-lock"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Mật khẩu"
            type="password"
            aria-label="Password"
            name="password"
            aria-describedby="pass"
            onChange={onChange}
          />
        </InputGroup>

        <button type="submit" className="btn btn-danger fr">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
