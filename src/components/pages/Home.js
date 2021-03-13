import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mixtape</title>
      </Helmet>
      <Container>
        <h3>Home</h3>
      </Container>
    </div>
  );
};

export default Home;
