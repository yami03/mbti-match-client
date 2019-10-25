import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ListMembers from './containers/ListMembers';
import Profile from './containers/Profile';
import Edit from './containers/Edit';
import ChatList from './containers/ChatList';
import ChatView from './containers/ChatView';
import NotFound from './containers/NotFound';
import MainLoading from './containers/MainLoading';

const App = () => {
  const { isAuthenticated, isMainLoading } = useSelector(state => ({
    isAuthenticated: state.isAuthenticated,
    isMainLoading: state.isMainLoading
  }));

  const privateRender = (Component, props) => {
    return isAuthenticated === true ? (
      <Component props={props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
  };

  const notLoginRender = (Component, props) => {
    return !isAuthenticated === true ? (
      <Component props={props} />
    ) : (
      <Redirect
        to={{ pathname: '/profile', state: { from: props.location } }}
      />
    );
  };

  return (
    <div className="app">
      <div className="wrap">
        {isMainLoading ? (
          <MainLoading />
        ) : (
          <Switch>
            <Redirect exact path="/" to="/login" />
            <Route
              path="/login"
              render={props => notLoginRender(Login, props)}
            />
            <Route
              path="/signup"
              render={props => notLoginRender(Signup, props)}
            />
            <Route
              path="/profile/edit"
              render={props => privateRender(Edit, props)}
            />
            <Route
              path="/profile"
              render={props => privateRender(Profile, props)}
            />
            <Route
              path="/users/list"
              render={props => privateRender(ListMembers, props)}
            />

            <Route
              path="/chats"
              render={props => privateRender(ChatList, props)}
            />
            <Route
              path="/chat/room/:roomId"
              render={props => privateRender(ChatView, props)}
            />
            <Route from="*" component={NotFound} />
          </Switch>
        )}
      </div>
    </div>
  );
};

export default App;
