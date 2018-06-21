import * as React from 'react'
import { connect } from 'react-redux';
import Matches from './Matches'
import { setMatchesInit, updateMatches, setMatches } from '../actions/matches'
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
      }
    })

    db.onceGetUsers()
      .then(snapshot => {
        this.props.setMatches(Object.values(snapshot.val()))
        this.props.updateMatches(this.filterMatches())
      })
  }

  filterMatches = () => {
    const { activeUser, matches } = this.props
    return matches.filter(match => {
      return (
        this.filterMatchesBySports(match, activeUser) &&
        this.filterMatchesByAge(match, activeUser) &&
        this.filterMatchesByLevel(match, activeUser) &&
        this.filterMatchesByPark(match, activeUser) &&
        !match.rejected
      )
    }).sort()
  }

  filterMatchesBySports = (match, activeUser) => {
    const isMatch = activeUser.sports.find(sport => {
      return match.sports.indexOf(sport)
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

  accept = (id) => {
    const { matches } = this.props
    const newMatchIndex = matches
      .findIndex(match => match.id === id)

    matches[newMatchIndex].accepted = true
    this.props.updateMatches(matches)
    this.filterMatches()
  }

  reject = (id) => {
    const { matches } = this.props
    const newMatchIndex = matches
      .findIndex(match => match.id === id)

    matches[newMatchIndex].rejected = true
    this.props.updateMatches(this.filterMatches(matches))
  }

  render () {
    console.log(this.props);
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

export default connect(mapStateToProps, { updateMatches,setMatchesInit, setUser, setMatches })(MatchesContainer);
