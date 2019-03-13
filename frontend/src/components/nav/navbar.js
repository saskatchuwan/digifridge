import React from 'react';
import {NavLink, Link, withRouter } from 'react-router-dom';
import './navbar.scss';
import cx from 'classnames';
import fridgelogo from '../../images/icons/fridge-round.svg';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/home'
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      this.setState({pathname: this.props.pathname});
    }
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks(pathname) {
    // console.log(pathname);
      if (this.props.loggedIn) {
        const loggedInSearch = cx('link nav-link', {'selected-link': pathname==='/home'});
        const loggedInSave = cx('link nav-link', { 'selected-link': pathname === '/saved' });
        return (
            <div className='logged-in-links'>

              <div className='content-links'>
                <button
                  className='link recipe-preferences'
                  onClick={this.props.openModal}>
                  Recipe Preferences
                </button>

                <Link 
                className={loggedInSearch} 
                  to={'/home'}>
                  Recipe Search
                </Link>

                <Link 
                className={loggedInSave} 
                  to={'/saved'}>
                  Saved Recipes
                </Link>
              </div>

              <button
                className='link logout-button'
                onClick={this.logoutUser}>
                Log Out
              </button>
            </div>
        );
      } else {
        const login = cx('link nav-link', { 'selected-link': pathname === '/login' });
        const signup = cx('link nav-link', { 'selected-link': pathname === '/signup' });
        return (
            <div className='logged-out-links'>
              <NavLink className={login} to={'/login'}>LOGIN</NavLink>
              <NavLink className={signup} to={'/signup'}>SIGNUP</NavLink>
            </div>
        );
      }
  }

  render() {
    const { pathname } = this.state
    
      return (
        <div className='navbar'>
            <a href='#/' className='nav-logo'>
              <img className='logo-icon' src={fridgelogo} alt='no logo' />
              <h1>Digifridge</h1>
            </a>
            { this.getLinks(pathname) }
        </div>
      );
  }
}

export default withRouter(NavBar);