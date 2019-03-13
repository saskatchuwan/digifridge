import React from 'react';
import {NavLink, Link, withRouter } from 'react-router-dom';
import './navbar.scss';
// import cx from 'classnames';
import fridgelogo from '../../images/icons/fridge-round.svg';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   pathname: ''
    // };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  // componentDidUpdate(prevProps){
  //   if (this.props !== prevProps) {
  //     console.log(this.props.location);
  //     this.setState({pathname: this.props.location});
  //   }
  // }

  // Selectively render links dependent on whether the user is logged in
  getLinks(pathname) {
    console.log(pathname);
      if (this.props.loggedIn) {
        // const loggedInSearch = cx('link nav-link', {'selected-link': pathname.includes('/home')});
        // const loggedInSave = cx('link nav-link', {'selected-link': pathname.includes('/saved')});
        return (
            <div className='logged-in-links'>

              <div className='content-links'>
                <a href='#' 
                  className='link recipe-preferences'
                  onClick={this.props.openModal}>
                  Recipe Preferences
                </a>

                <Link 
                className='link nav-link' 
                  to={'/home'}>
                  Recipe Search
                </Link>

                <Link 
                className='link nav-link' 
                  to={'/saved'}>
                  Saved Recipes
                </Link>
              </div>

              <a href='#'
                className='link logout-button'
                onClick={this.logoutUser}>
                Log Out
              </a>
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
    // const { pathname } = this.state
    
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