import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './components/App';
import Services from './components/Services';
import Resources from './components/Resource';
import HomePage from './components/HomePage';
import Team from './components/Team';
import Project from './components/Project';
import DevicesList from './components/DevicesList';
import ServicesList from './components/ServicesList';
import IntentionDetail from './components/IntentionDetail';

export default (
  <Route component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/' component={HomePage} />
    <Route path='/services' component={Services} />
    <Route path='/resources' component={Resources} />
    <Route path='/team' component={Team} />
    <Route path='/projects' component={Project} />
    <Route path='/devicesList' component={DevicesList} />
    <Route path='/services/detail/:name' component={ServicesList} />
    <Route path='/intention' component={IntentionDetail} />
  </Route>
);