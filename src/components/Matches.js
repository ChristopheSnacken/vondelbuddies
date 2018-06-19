import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    backgroundColor: '#B3DC4A',
  },
};


function Matches(props) {
    
    return (
        <BindKeyboardSwipeableViews enableMouseEvents>
            {
                props.matches.map((match) => {
                    return(
                        <div key={match.id} style={Object.assign({}, styles.slide)}>
                            <ul>
                                <li>{match.name}</li>
                                <li>Age: {match.age}</li>
                                <li>Activity: {match.activity}</li>
                            </ul>
                            <button onClick={()=>props.accept(match.id)}>Accept</button>
                            <button onClick={()=>props.reject(match.id)}>Reject</button>
                        </div>
                    )
                })
            }    
         </BindKeyboardSwipeableViews>
    );
}

export default Matches;