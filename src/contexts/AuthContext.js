import React, { useEffect, createContext, useState } from 'react';
import { clearToken, getToken, setToken } from 'utils/auth';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, token: getToken() });
  // we will use loading later

  useEffect(() => {
    const token = getToken();

    console.log(token, 'AuthProvider');

    if (token) {
      setAuth({
        loading: false,
        token,
      });
    }
  }, []);

  const setAuthToken = (value) => {
    console.log(value, 'CONTASDASD!!');
    setToken(value);
    setAuth((prevState) => ({
      ...prevState,
      token: value,
    }));
  };

  const setClearToken = () => {
    clearToken();
    setAuth((prevState) => ({
      ...prevState,
      token: '',
    }));
  };

  // a function that will help us to add the user data in the auth

  return (
    <AuthContext.Provider value={{ auth, setAuthToken, setClearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
