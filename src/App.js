import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import ArtistList from './components/pages/ArtistList';
import Artist from './components/pages/Artist';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list-of-artists' component={ArtistList} />
          <Route exact path='/list-of-artists/:id' component={Artist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
