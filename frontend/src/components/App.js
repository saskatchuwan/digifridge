import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SplashPage from './splash/splash';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import ProtectedInApp from './protectedInApp';


class App extends React.Component {
  render() {
    return (
      <div className='in-app-container'>
        <NavBarContainer />

        <Switch>
          <AuthRoute exact path="/" component={SplashPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />

          <ProtectedRoute path='/' component={ProtectedInApp} />
        </Switch>
        
        {/* optional footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
