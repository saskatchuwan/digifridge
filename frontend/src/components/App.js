import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from './home/home';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
