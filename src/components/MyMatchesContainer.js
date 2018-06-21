import * as React from 'react'
import MyMatches from './MyMatches'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';
import { firebase } from '../firebase';

class MyMatchesContainer extends React.PureComponent{

  state = {
    authUser: null,
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser){
        this.setState(() => ({ authUser }))
        // this.props.setUser(authUser.uid)
      } 
      else{
        this.setState(() => ({ authUser: null }));
        this.props.history.push('/login');
      } 
    })
  }


  render() {
    const acceptedMatches = this.props.matches.filter(match => match.accepted === true)
    return (
      <MyMatches activeUser={this.props.activeUser} matches={acceptedMatches}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser,
    matches: state.matches
  }
}


export default compose(
  connect(mapStateToProps),
  withRouter
)(MyMatchesContainer);
