import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div id='nbar' className='navbar bg-primary'>
        <Link to='/'>
          <p className='nav-title'>{title}</p>
        </Link>
        <div id='links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/artists'>Artists</Link>
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
