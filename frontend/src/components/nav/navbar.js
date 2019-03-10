import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

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
      if (this.props.loggedIn) {
        return (
            <div className='logged-in-links'>
                <Link to={'/home'}>Recipe Search</Link>
                <Link to={'/saved'}>Saved Recipes</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='logged-out-links'>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='navbar'>
            <a href='#/'>
              <h1>Digifridge</h1>
            </a>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;