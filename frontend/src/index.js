import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //for testing
  window.axios = axios;
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store}/>, root);
});

