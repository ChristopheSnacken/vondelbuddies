import * as React from 'react'
import MyMatches from './MyMatches'
import { connect } from 'react-redux'

class MyMatchesContainer extends React.PureComponent{
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

export default connect(mapStateToProps)(MyMatchesContainer)
