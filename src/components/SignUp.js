import React, { Component } from 'react';
import { auth, db } from '../firebase';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { setUser } from '../actions/activeuser'

const SignUpPages = ({ history }) =>
  <div>
    <div className='logo'><img src={require('../img/vondelbuddies_logo.png')} alt=""/></div>
    <SignUpForm history={history} />
</div>


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const generateIMG = () => Math.floor(Math.random() * 4)

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
        history,
      } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

         // set user to currentuser in redux state
        this.props.setUser({
          id: authUser.user.uid,
          username,
          email,
          bio:'This is my super cool bio', 
          img:generateIMG(), 
          park:'Vondelpark', 
          phone:'0625273211'
        })

         // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email,'This is my super cool bio',generateIMG(),'Vondelpark','0625273211')
          .then(() => {  


            this.setState(() => ({ ...INITIAL_STATE }));

            history.push('/welcome');

          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });


      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }


  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
        <form onSubmit={this.onSubmit}>
          <TextField
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Full Name"
            label="Full Name"
            className="text-field"
          />
          <TextField
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
            label="Email Address"
            className="text-field"
          />
         <TextField
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
            label="Password"
            className="text-field"
          />
         <TextField
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
            label="Confirm Password"
            className="text-field"
          />
         <button className="btn" disabled={isInvalid} type="submit">
            Sign Up
          </button>

          { error && <p>{error.message}</p> }
        </form>
      );
  }
}

export const SignUpPage = withRouter(SignUpPages);


export default connect(
  null, { setUser })(SignUpForm);
