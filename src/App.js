import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { Route, Redirect, Switch } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <div className="app">
      <p>App</p>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="*" compoent={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
