import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import  Level  from './UserProfileComponents/level'
import  Gender  from './UserProfileComponents/gender'
import  Age  from './UserProfileComponents/age'
import { connect } from 'react-redux'


class Profile extends PureComponent {


  render (){
    return (
      <div>
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
