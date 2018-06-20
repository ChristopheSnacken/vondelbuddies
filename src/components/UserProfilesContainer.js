import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import  Level  from './UserProfileComponents/level'
import  Gender  from './UserProfileComponents/gender'
import  Age  from './UserProfileComponents/age'
import { connect } from 'react-redux'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { updateUser } from '../actions/activeuser'


class Profile extends PureComponent {

  updateactiveUserLevel = level => {
      const {activeUser} = this.props
      const newUser = activeUser
      newUser.level = parseInt(level)
      this.props.updateUser(newUser)
  }
  updateactiveUserGender = gender => {
      const {activeUser} = this.props
      const newUser = activeUser
      newUser.gender = gender
      this.props.updateUser(newUser)
  }
  updateactiveUserAge = age => {
      const {activeUser} = this.props
      const newUser = activeUser
      newUser.age = parseInt(age)
      this.props.updateUser(newUser)
  }

  render (){
    console.log(this.props)
    return (
      <div>

        <h1> What about you? </h1>
        <Level updateLevel= {this.updateactiveUserLevel}/>
        <Gender updateGender= {this.updateactiveUserGender}/>
        <Age updateAge= {this.updateactiveUserAge}/>

      </div>


    )
}
}

const mapStateToProps = state => {
  console.log(state)
  return {
    activeUser: state.activeUser

  }
}


export default connect(mapStateToProps, { updateUser })(Profile)
