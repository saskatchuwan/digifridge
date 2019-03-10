import React from 'react';
import ReactDOM from 'react-dom';

// We will use this to make our requests instead of AJAX
import axios from 'axios';
// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';  

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import { fetchRecipesEdamam, fetchRecipesFood2Fork } from './util/recipes_api_util';

import 'normalize.css';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
    
  } else {
    store = configureStore({});
  }

  //for testing
  window.axios = axios;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchRecipesEdamam = fetchRecipesEdamam;
  window.fetchRecipesFood2Fork = fetchRecipesFood2Fork;
  
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store}/>, root);
});

