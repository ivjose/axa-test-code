import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Input from 'components/Input';
import AlertDisplay from 'components/AlertDisplay';

import { register } from './helpers';

import './Registration.styles.css';

const defaultValue = {
  type: '',
  message: '',
};

const Registration = () => {
  const history = useHistory();

  const [regField, setRegField] = useState({
    name: '',
    email: '',
    mobile: '',
    positionApplied: '',
    source: '',
  });
  const [status, setStatus] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  function handleUpdateField(value, selected) {
    setStatus(defaultValue);
    setRegField((prevState) => ({
      ...prevState,
      [selected]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const value = {
      Name: regField.mobile,
      Email: regField.email,
      Mobile: regField.mobile,
      PositionApplied: regField.positionApplied,
      Source: regField.source,
    };
    setLoading(true);
    try {
      await register(value);
      setStatus({
        type: 'success',
        message: 'Your information has been successfully submitted.',
      });

      setTimeout(() => {
        history.push('/enter-token');
      }, 1500);
    } catch (error) {
      if (error.Result >= 400) {
        setStatus({
          type: 'error',
          message: 'Oops, Please check the fields and re-submit, Thank you!',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="home-page">
        <h1>Registration</h1>
        {status.type && (
          <AlertDisplay message={status.message} status={status.type} />
        )}

        <form onSubmit={handleSubmit}>
          <Input
            required
            name="name"
            label="Name"
            value={regField.name}
            onChange={(e) => handleUpdateField(e.target.value, 'name')}
          />
          <Input
            required
            type="email"
            name="Email"
            label="email"
            value={regField.email}
            onChange={(e) => handleUpdateField(e.target.value, 'email')}
          />
          <Input
            required
            type="tel"
            name="mobile"
            label="Mobile"
            value={regField.mobile}
            onChange={(e) => handleUpdateField(e.target.value, 'mobile')}
          />
          <Input
            required
            name="positionApplied"
            label="Position Applied"
            value={regField.positionApplied}
            onChange={(e) =>
              handleUpdateField(e.target.value, 'positionApplied')
            }
          />
          <Input
            required
            name="source"
            label="Source"
            value={regField.source}
            onChange={(e) => handleUpdateField(e.target.value, 'source')}
          />
          <Button text="Submit" type="submit" disabled={loading} />
        </form>
      </div>
    </Layout>
  );
};

export default Registration;
