import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import classes from '../styles/Home.module.css';
// import cassette from '../../img/cassette.png';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mixtape</title>
        <style type='text/css'>{`
        body {
          background-color: #ffffff;
          // background-color: #B2A996;
        }

        .container {
          max-width: 100%;
          height: 100%;
          margin: auto;
          overflow: hidden;
          padding: 0;
        }
        
        .navbar,
        .footer {
          display: none;
        }
    `}</style>
      </Helmet>
      <Container>
        <div className={classes.Container}>
          <div className={classes.Steelblue}></div>
          <div className={classes.Salmon}>
            <Link className={classes.Mixtape} to='/artists'>
              MIXTAPE
            </Link>
          </div>
          <div className={classes.Khaki}>
            <Link className={classes.Mixtape} to='/artists'>
              MIXTAPE
            </Link>
          </div>
          <div className={classes.Violet}></div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
