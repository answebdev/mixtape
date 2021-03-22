import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import classes from '../styles/Error.module.css';

// GIF Source: https://giphy.com/stickers/retro-mixtape-cassette-XDutFIsipAQk1iAns2

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Mixtape | Error</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          letter-spacing: 1px;
          background-color: #C7D1C8 !important;
        }
        
        .navbar {
          display: none;
        }
    `}</style>
      </Helmet>
      <Container className={classes.CassetteContainer} fluid>
        <div className={classes.Parent}>
          <div className={classes.Child1}>
            <h4 className={classes.ErrorH4}>OOPS!</h4>
            <h4 className={classes.ErrorH4}>404 Page Not Found.</h4>
          </div>
          <div className={classes.Child2}>
            <img
              className={classes.Cassette}
              src='https://media2.giphy.com/media/XDutFIsipAQk1iAns2/source.gif'
              alt='Cassette'
            />
          </div>
          <div className={classes.Child3}>
            <Link className={classes.BackBtn} to='/artists'>
              <i className='fas fa-arrow-left'></i> BACK TO SAFETY
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;
