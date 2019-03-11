import React from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {
        email: '',
        handle: '',
        password: '',
        password2: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
    const pw = nextProps.errors.password ? nextProps.errors.password : '';
    const em = nextProps.errors.email ? nextProps.errors.email : '';
    const hn = nextProps.errors.handle ? nextProps.errors.handle : '';
    const pw2 = nextProps.errors.password2 ? nextProps.errors.password2 : '';
    this.setState({errors: {email: em, handle: hn, password: pw, password2: pw2}});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const emailErrorCN = cx({ 'session-errors': this.state.errors.email.includes('Email'), 'no-error': this.state.errors.email === '' });
    const handleErrorCN = cx({ 'session-errors': this.state.errors.handle.includes('Name'), 'no-error': this.state.errors.handle === '' }) 
    const pwErrorCN = cx({ 'session-errors': this.state.errors.password.includes('Password'), 'no-error': this.state.errors.password === '' }) 
    const pw2ErrorCN = cx({ 'session-errors': this.state.errors.password2.includes('Confirm') || this.state.errors.password2.includes('match'), 'no-error': this.state.errors.password2 === '' }) 
    return (
      <div className="login-form-container login">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
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
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Name"
              />
              <div className={handleErrorCN}>
                {this.state.errors.handle}
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
            <div className='session-input'>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                /> 
              <div className={pw2ErrorCN}>
                {this.state.errors.password2}
              </div>
              </div>
              <div className='session-button'>
                <input type="submit" value="Sign Up" />
              </div>
            
            {/* {this.renderErrors()} */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);