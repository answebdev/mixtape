import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div className='navbar bg-primary'>
        <a href='/'>
          <p className='nav-title'>{title}</p>
        </a>
        <div id='links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/list-of-artists'>Artists</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.defaultProps = {
  title: 'Mixtape',
};

export default Navigation;
