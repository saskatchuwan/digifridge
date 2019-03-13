import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location.pathname,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));