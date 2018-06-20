import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import './Matches.css';
import Grid from '@material-ui/core/Grid';


const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
  slide: {
    padding: 0,
    minHeight: 100,
  },
};

function Matches(props) {
  return (
    <BindKeyboardSwipeableViews enableMouseEvents>
        {
          props.matches.map((match) => {
              return(
                  <div className="match-container" key={match.id} style={Object.assign({}, styles.slide)}>
                    <div className="match-img">Image</div>
                    <ul className="match-info">
                      <li><b>Name:</b> {match.name}</li>
                      <li><b>Age:</b> {match.age}</li>
                      <li><b>Level:</b> {match.level}</li>
                      <li><b>Park: </b>{match.park}</li>
                      <li><b>Bio:</b> {match.bio}</li>
                      <li><b>Activity:</b></li>
                    </ul>
                  {!match.accepted &&
                    <div className="match-control-buttons">
                      <button onClick={()=>props.accept(match.id)}>Accept</button>
                      <button onClick={()=>props.reject(match.id)}>Reject</button>
                    </div>
                  }
                  { match.accepted && <a className="btn chat-btn " href={`https://api.whatsapp.com/send?phone=${match.phone}`}>Send WhatsApp</a>}
                </div>
              )
          })
        }
   </BindKeyboardSwipeableViews>
  );
}

export default Matches;
