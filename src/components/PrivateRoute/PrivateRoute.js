import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from 'contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { auth } = useContext(AuthContext);
  console.log(auth, 'PrivateRoute');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
