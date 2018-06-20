import * as React from 'react'
import './MyMatches.css'

export default function MyMatches(props) {
  const { activeUser, matches } = props
  return (
    <div className="matches">
      <img className="profile-pic" src={require(`./../img/userphotos/profile_pic.png`)} alt="Current user's face" />
      <h3>{activeUser.name}</h3>
      <div className="my-matches">
        <h4>My matches</h4>
        <hr className="divider" />
        {matches.length > 0 && matches.map(match => <img className="match-pic" src={require(`./../img/userphotos/uid-${match.img}.png`)} alt={match.name + "s face"} />)}
        {matches.length === 0 && `You don't have any matches yet.`}
      </div>
    </div>

  )
}
