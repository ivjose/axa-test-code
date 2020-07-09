import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import Button from 'components/Button';

import './Home.styles.css';

const Home = () => {
  return (
    <Layout>
      <h1>Good Morning, Developer!</h1>
      <Link to="/registration">
        <Button text="Ready? Let's get started!" />
      </Link>
    </Layout>
  );
};

export default Home;
