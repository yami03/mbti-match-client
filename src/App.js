import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ListMembers from './containers/ListMembers';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

const App = () => {
  /*const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          authed === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    );
  };*/

  return (
    <div className="app">
      <div className="wrap">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/users/list" component={ListMembers} />
          <Route path="/user/profile" component={Profile} />
          <Route path="*" compoent={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
