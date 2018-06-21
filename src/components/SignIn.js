import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'

const SignInPage = ({ history }) =>
  <div>
    <div className='logo'><img src={require('../img/vondelbuddies_logo.png')} alt=""/></div>
    <h2 className="sub-title">Find your sport buddy</h2>
    <SignInForm history={history} />
    <p><Link to={'/signup'}>Create account</Link> </p>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/matches');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>

         <TextField
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          label="Email Address"
          className="text-field"
        />
        <br></br>
        <TextField
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
          label="Password"
          className="text-field"
        />
        <button className="btn" disabled={isInvalid} type="submit">
          Sign In
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}



export default withRouter(SignInPage);

export {
  SignInForm,
};
