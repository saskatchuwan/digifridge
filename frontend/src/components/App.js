import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SplashPage from './splash/splash';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import Fridge from './fridge/fridge';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <ProtectedRoute path="/" component={Fridge} />
        <Switch>
          {/* currently, there is no route to / */}
          <AuthRoute exact path="/" component={SplashPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />

          {/* protected routes: will include /home (recipe results) and /saved (user saved recipes */}
        </Switch>
        {/* optional footer */}
      </div>
    );
  }
}

export default App;
