import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import NavBar from './navbar';
import {withRouter} from 'react-router-dom';
const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('preferences')),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));