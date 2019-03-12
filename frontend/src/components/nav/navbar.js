import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './navbar.scss';
import cx from 'classnames';

import fridgelogo from '../../images/icons/fridge-round.svg';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    // const loggedInHome = cx('nav-link', {'active': this.props.location.includes('home')});
    // const loggedInSave = cx('nav-link', { 'active': this.props.location.includes('saved') });
      if (this.props.loggedIn) {
        return (
            <div className='logged-in-links'>
                <NavLink className='nav-link' to={'/home'}>Recipe Search</NavLink>
                <NavLink className='nav-link' to={'/saved'}>Saved Recipes</NavLink>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='logged-out-links'>
              <NavLink className='nav-link' to={'/login'}>LOGIN</NavLink>
              <NavLink className='nav-link' to={'/signup'}>SIGNUP</NavLink>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='navbar'>
            <a href='#/' className='nav-logo'>
              <img className='logo-icon' src={fridgelogo} alt='no logo' />
              <h1>Digifridge</h1>
            </a>
            { this.getLinks() }
        </div>
      );
  }
}

export default withRouter(NavBar);