import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import './Matches.css';


const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
  slide: {
    padding: 0,
    height: '90vh',
  },
};

class Matches extends React.PureComponent {
  state = {
    index: 0
  }
  setIndex = () => {
    const location = this.props.location
    if(location.query !== undefined) {
      const userIndex = this.props.matches
        .findIndex(match => match.id === location.query.index)
      this.setState({index: userIndex})
    }
  }

  componentDidMount() {
    this.setIndex()
  }

  render() {
    const { index } = this.state
    if(this.props.matches.length === 0) {
      return <h1 className="matches-emtpy-state">No more VondelBuddies found, why not come back later?</h1>
    }
    return (
      <BindKeyboardSwipeableViews enableMouseEvents index={index} onSwitching={(index) => this.setState({index: index})}>
        {this.props.matches.map(this.renderMatch)}
      </BindKeyboardSwipeableViews>
    )
  }
  
  onClickHandler = (id, action) => {
    let index = this.state.index
    switch(action) {
      case 'accept':
        this.props.accept(id)
        break
      case 'reject':
        this.props.reject(id)
        if(index < (this.props.matches.length -1)) {
          index ++
        }  else {
          index = 0
        }
        break
      default:
        break
    }
    this.setState({
      index: index
    })
  }

  renderMatch = (match) => {
    match.sports = match.sports || []
    const levels = {0: "Beginner", 1:"Intermediate", 2:"Advanced"}
    return (
      <div className="match-container" key={match.id} style={Object.assign({}, styles.slide)}>
        <div className="match-img">
          <img src={require(`../img/foto_${match.img}.png`)} alt="home"/>
          {!match.accepted &&
            <div className="match-control-buttons">
              <button className="match-control-decline" onClick={()=>this.onClickHandler(match.id, "reject")}><img src={require('../img/decline.png')} alt="reject"/></button>
              <button className="match-control-accept" onClick={()=>this.onClickHandler(match.id, "accept")}><img src={require('../img/accept.png')} alt="accept"/></button>
            </div>
          }
        </div>
        <div className="flex-container">
          <h3 className="match-name">{match.name}, {match.age}</h3>
          <ul className="match-info">
            <li><b>Fitness Level:</b> {levels[match.level]}</li>
            <li><b>Park: </b>{match.park}</li>
            <li><b>Sports:</b> {match.sports.join(", ")}</li>
            <li><b>Bio:</b> {match.bio}</li>


            { match.accepted &&
              <a className="match-control-chat" href={`https://api.whatsapp.com/send?phone=${match.phone}`}><button className="btn">Send WhatsApp</button></a>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Matches;
