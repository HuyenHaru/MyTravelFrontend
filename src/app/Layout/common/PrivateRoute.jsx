import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading } = useSelector(state => state.async);
  const { authenticated } = useSelector(state => state.user);

  return (
    <Route
      {...rest}
      render={props =>
        !loading && !authenticated ? (
          <Redirect to='/dang-nhap' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
