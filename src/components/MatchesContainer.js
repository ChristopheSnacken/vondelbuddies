import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Matches from './Matches'
import { updateMatches, setMatches } from '../actions/matches'
import { firebase } from '../firebase';
import { setUser } from '../actions/activeuser'
import { db } from '../firebase';

class MatchesContainer extends React.PureComponent {

  state = {
    authUser: null,
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser){
        this.setState(() => ({ authUser }))
        this.props.setUser(authUser.uid)
      } else {
        this.setState(() => ({ authUser: null }));
        this.props.history.push('/login');
      }
    })

    this.props.matches.length === 0 && db.onceGetUsers()
      .then((snapshot) => Object.values(snapshot.val()))
      .then(result => result.filter(match => this.filterMatches(match)))
      .then(matches => {
        this.props.setMatches(matches)
        this.props.updateMatches(this.filterMatches())
      })

      this.props.matches.length > 0 && this.props.updateMatches(this.filterMatches())

    }

  validateMatchProperty = (property) => {
    return typeof property !== "undefined" && property !== null
  }

  filterMatches = () => {
    const { activeUser, matches } = this.props
    return matches.filter(match => {
      return (
        this.filterMatchesBySports(match, activeUser) &&
        this.filterMatchesByAge(match, activeUser) &&
        this.filterMatchesByLevel(match, activeUser) &&
        this.filterMatchesByPark(match, activeUser) &&
        this.filterSelf(match, activeUser) &&
        !match.rejected
      )
    }).sort()
  }

  filterMatchesBySports = (match, activeUser) => {
    const isMatch = activeUser.sports.find(sport => {
      return match.sports.includes(sport)
    })

    if(typeof isMatch === "undefined") {
      return false
    }
    return true
  }

  filterMatchesByAge = (match, activeUser) => {
    return Math.abs(activeUser.age - match.age) <= 5
  }

  filterMatchesByLevel = (match, activeUser) => {
    return Math.abs(activeUser.level - match.level) <= 1
  }

  filterMatchesByPark = (match, activeUser) => {
    return activeUser.park === match.park
  }

  filterSelf = (match, activeUser) => {
    return match.id !== activeUser.id
  }

  accept = (id) => {
    const { matches } = this.props
    const newMatchIndex = matches
      .findIndex(match => match.id === id)

    matches[newMatchIndex].accepted = true
    this.props.updateMatches(matches)
    this.filterMatches()
    // TODO: update current user in users array in firebase with accepted user

  }

  reject = (id) => {
    const { matches } = this.props
    const newMatchIndex = matches
      .findIndex(match => match.id === id)

    matches[newMatchIndex].rejected = true
    this.props.updateMatches(this.filterMatches(matches))
     // TODO: update current user in users array in firebase with rejected user
    let userObj = this.props.activeUser
    userObj.matches = matches

  }

  render () {
      return (
          <Matches location={this.props.location} matches={this.props.matches} accept={this.accept} reject={this.reject}/>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    matches: state.matches,
    activeUser: state.activeUser
  };
}

export default compose(
  connect(mapStateToProps, { updateMatches, setUser, setMatches }),
  withRouter
)(MatchesContainer);
