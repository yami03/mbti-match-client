import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ListMembers from './containers/Signup';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <div className="app">
      <div className="wrap">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/ListMembers" component={ListMembers} />
          <Route path="/profile" component={Profile} />
          <Route path="*" compoent={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
