import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Stats from './components/Stats';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';
import Services from './components/Services';
import Resources from './components/Resource';
import HomePage from './components/HomePage';
import Team from './components/Team';
import Project from './components/Project';

export default (
  <Route component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/' component={HomePage} />
    <Route path='/services' component={Services} />
    <Route path='/resources' component={Resources} />
    <Route path='/team' component={Team} />
    <Route path='/projects' component={Project} />
    <Route path='/characters/:id' component={Character} />
    <Route path='/add' component={AddCharacter} />
    <Route path=':category' component={CharacterList}>
      <Route path=':race' component={CharacterList}>
        <Route path=':bloodline' component={CharacterList} />
      </Route>
    </Route>
  </Route>
);