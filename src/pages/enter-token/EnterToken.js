import React, { useState, useEffect, useContext } from 'react';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Input from 'components/Input';

import { AuthContext } from 'contexts/AuthContext';

import './EnterToken.styles.css';

const EnterToken = () => {
  const { auth, setAuthToken, setClearToken } = useContext(AuthContext);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(auth.token, 'TOKE!!@!@');

    if (auth.token) {
      setValue(auth.token);
    }
  }, [auth.token]);

  function handleUpdate(e) {
    e.preventDefault();

    setAuthToken(value);
  }

  function handleClearToken() {
    setValue('');
    setClearToken();
  }

  return (
    <Layout>
    
      <div className="enter-token-page">
      <h1>Enter your token</h1>
        <form onSubmit={handleUpdate}>
          <Input
            required
            name="token"
            label="Token"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button text="Save Token" type="submit" />
          <Button text="Clear Token" color="light" onClick={handleClearToken} />
        </form>
      </div>
    </Layout>
  );
};

export default EnterToken;
