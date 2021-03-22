import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classes from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Mixtape</title>
        <style type='text/css'>{`
        // body {
        //   background-color: #ffffff;
        // }

        // .container {
        //   max-width: 100%;
        //   height: 100%;
        //   margin: auto;
        //   overflow: hidden;
        //   padding: 0;
        // }
        
        .navbar,
        .footer {
          display: none;
        }
    `}</style>
      </Helmet>

      <header className={classes.Header}>
        <h1 className={classes.H1}>Mixtape</h1>
        <br />
        <h4 className={classes.H4}>
          <p>A Collection of</p>
          <p>Desert Island Tunes</p>
        </h4>
        <br />
        <Link className={classes.Button} to='/artists'>
          Enter
        </Link>
      </header>
    </div>
  );
};

export default Landing;
