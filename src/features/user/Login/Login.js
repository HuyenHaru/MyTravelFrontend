import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../user.actions';
import {
  InputGroup,
  FormControl,
  Alert,
  Spinner,
  Button,
} from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, actionType, error } = useSelector(state => state.async);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    const user = {
      email: state.email,
      password: state.password,
    };
    dispatch(login(user, history));
  };

  const loginLoading = actionType === 'login' ? loading : false;

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        {error && error.error && error.error.email && (
          <Alert className='error' variant='danger'>
            {error.error.email.msg}
          </Alert>
        )}
        {error && error.password && (
          <Alert className='error' variant='danger'>
            {error.password.msg}
          </Alert>
        )}
        {error && error.general && error.general.msg && (
          <Alert className='error' variant='danger'>
            {error.general.msg}
          </Alert>
        )}
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>
              <i className='fas fa-envelope'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Email'
            aria-label='Email'
            name='email'
            aria-describedby='basic-addon1'
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='pass'>
              <i className='fas fa-lock'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Mật khẩu'
            type='password'
            aria-label='Password'
            name='password'
            aria-describedby='pass'
            onChange={onChange}
          />
        </InputGroup>

        <Button type='submit'>
          {loginLoading && <Spinner animation='border' variant='primary' />}
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default Login;
