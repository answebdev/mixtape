import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Landing from './components/pages/Landing';
import ArtistList from './components/pages/ArtistList';
import Artist from './components/pages/Artist';
import Error from './components/pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/artists' component={ArtistList} />
          <Route exact path='/artists/:id' component={Artist} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
