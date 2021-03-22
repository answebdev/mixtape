import React from 'react';
import spinner from '../../img/spinner03.gif';

const Spinner = () => (
  <img
    src={spinner}
    alt='Loading...'
    style={{ width: '35px', height: 'auto', margin: 'auto', display: 'block' }}
  />
);

export default Spinner;
