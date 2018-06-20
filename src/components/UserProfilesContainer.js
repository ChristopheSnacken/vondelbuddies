import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import  Level  from './UserProfileComponents/level'
import  Gender  from './UserProfileComponents/gender'
import  Age  from './UserProfileComponents/age'
import { connect } from 'react-redux'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


class Profile extends PureComponent {


  render (){
    return (
      <div>
        <Progress
          type="circle"
          className= "Progress"
          percent={88}
          status="success"
          theme={{
            success: {
              symbol: '🏄‍',
              color: '#4daa57',

            }
          }}
        />
        <h1> What about you? </h1>
        <Level />
        <Gender />
        <Age />

      </div>


    )
}
}

const mapStateToProps = state => {
  return {
    state
  }
}


export default connect(mapStateToProps, { })(Profile)
