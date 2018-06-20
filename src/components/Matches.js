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

  render() {
    const { index } = this.state
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
        if(index > 0) index --
        break
      case 'reject':
        this.props.reject(id)
        if(index < this.props.matches.length) index ++
        break
      default:
        break
    }
    this.setState({
      index: index
    })
  }

  renderMatch = (match) => {
    return (
      <div className="match-container" key={match.id} style={Object.assign({}, styles.slide)}>
        <div className="match-img">Image</div>
        <ul className="match-info">
          <li><b>Name:</b> {match.name}</li>
          <li><b>Age:</b> {match.age}</li>
          <li><b>Level:</b> {match.level}</li>
          <li><b>Park: </b>{match.park}</li>
          <li><b>Bio:</b> {match.bio}</li>
          <li><b>Activities:</b> {match.sports.join(", ")}</li>
          {!match.accepted &&
            <div className="match-control-buttons">
              <button className="match-control-accept" onClick={()=>this.onClickHandler(match.id, "accept")}><img src={require('../img/accept.png')} alt="accept"/></button>
              <button className="match-control-decline" onClick={()=>this.onClickHandler(match.id, "reject")}><img src={require('../img/decline.png')} alt="reject"/></button>
            </div>
          }

          { match.accepted &&
            <a className="match-control-chat" href={`https://api.whatsapp.com/send?phone=${match.phone}`}><button className="btn">Send WhatsApp</button></a>
          }
        </ul>
      </div>
    )
  }
}

export default Matches;
