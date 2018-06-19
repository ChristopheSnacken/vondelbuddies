import * as React from 'react'
import Matches from './Matches'

export default class MatchesContainer extends React.PureComponent {
state = {
  prevIndex: 0
}

getMatches = () => {
  const matches = [{name: 'match1', age: 27, sport: "running"}, {name: 'match2', age: 28, sport: "egging tourists"}, {name: 'match3', age: 29, sport: "climbing"}]
  return matches.slice(1).reverse().concat(matches)
}

  getSwipeDirection = (newIndex) => {
    const matches = this.getMatches()
    console.log(matches);
    if(newIndex > this.state.prevIndex) {
      console.log("left")
    } else {
      console.log("right")
    }

    this.setState({
      prevIndex: newIndex
    })
  }

  render() {
    return <Matches getSwipeDirection={this.getSwipeDirection} matches={this.getMatches()}/>
  }
}
