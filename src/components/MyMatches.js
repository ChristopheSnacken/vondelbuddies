import React, { PureComponent } from 'react'
import './MyMatches.css'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOut'
import Img from './UserProfileComponents/img'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { updateUser } from '../actions/activeuser'
import { db, storage } from '../firebase';



class MyMatches extends PureComponent {
  updateactiveUserImg = img => {
    console.log("yo")
    console.log(img)
      const {activeUser} = this.props
      const newUser = activeUser
      newUser.img = img
      storage.uploadImage(activeUser.id, img)
  }


  render() {
    const { activeUser, matches } = this.props
      return (
        <div className="matches">
          <img className="profile-pic" src={require(`./../img/userphotos/profile_pic.png`)} alt="Current user's face" />
          <Img updateImg= {this.updateactiveUserImg}/>
          <h1 className="profile-name">{activeUser.name}</h1>
          <div className="my-matches-section">
            <h3 className="my-matches-title">My matches</h3>
            <div className="my-matches">
              {matches.length > 0 && matches.map(match => <Link key={match.id} params={{index: 0}} to={{pathname: `/matches`, query: {index: match.id}}}><img className="match-pic" src={require(`./../img/userphotos/uid-${match.img}.png`)} alt={match.name + "s face"} /></Link>)}
              {matches.length === 0 && `You don't have any matches yet.`}
            </div>
          </div>
          <div className="edit-buttons">
            <Link to={'/profile'}><button className="btn btn-small">Edit your profile</button></Link>
            <Link to={'/interests'}><button className="btn btn-small">Edit your activities</button></Link>
            <SignOutButton className="btn btn-small"/>
          </div>
        </div>
      )
  }
}

const mapStateToprops = state => {
  console.log(state)
  return {
    activeUser: state.activeUser,
    matches: state.matches

  }
}

export default connect(mapStateToprops, { updateUser })(MyMatches)
