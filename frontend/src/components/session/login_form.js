import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.scss';
import cx from 'classnames';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {password: [], email: []}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  componentDidMount(){
    this.props.clearErrors();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
    }
    const pw = nextProps.errors.password ? nextProps.errors.password : '';
    const em = nextProps.errors.email ? nextProps.errors.email : '';
    this.setState({errors: {password: pw, email: em}});
  }

  update(field) {
    
    return e => {this.setState({
      [field]: e.currentTarget.value
    });
  }}

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }
  handleDemo(){
    this.props.login({ email: 'gfieri@foodnetwork.com', password: 'password' });
  }


  render() {
    const emailErrorCN = cx({ 'session-errors': this.state.errors.email.includes('user'), 
                              'no-error': this.state.errors.password=== ''}); 
    const pwErrorCN = cx({ 'session-errors': this.state.errors.password.includes('password'), 
                            'no-error': this.state.errors.password=== ''}); 
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <h3>Log In</h3>
          <div className='login-items'>
            <div className='session-input'>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <div className={emailErrorCN}>
                {this.state.errors.email}
              </div>
            </div>
            <div className='session-input'>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <div className={pwErrorCN}>
                {this.state.errors.password}
              </div>
            </div>
            <br/>
            <div className='session-input'>
              <input id='submit-button' type="submit" value="Login" />
            </div>
            <div className='session-input'>
            <button onClick={this.handleDemo}>Demo Login</button>
          </div>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);