import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import matchApp from './reducers';
import App from './App';
import './index.scss';
import { successUserAuthentication, checkUserNotLogin } from './actions';
import { getUser } from './api';
import { objectKeysToCamelCase } from './utility/formattingData';

const store = createStore(
  matchApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const loadUser = async () => {
  const result = await getUser();
  if (!result.isAuthenticated) return store.dispatch(checkUserNotLogin());
  store.dispatch(successUserAuthentication(objectKeysToCamelCase(result.user)));
};

loadUser();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
