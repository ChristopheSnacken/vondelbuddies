import * as React from 'react'
import './MyMatches.css'
import { Link } from 'react-router-dom'

export default function MyMatches(props) {
  const { activeUser, matches } = props
  return (
    <div className="matches">
      <img className="profile-pic" src={require(`./../img/userphotos/profile_pic.png`)} alt="Current user's face" />
      <h1 className="profile-name">{activeUser.name}</h1>
        <h3 className="my-matches-title">My matches</h3>
        <div className="my-matches">
        {matches.length > 0 && matches.map(match => <Link key={match.id} params={{index: 0}} to={{pathname: `/matches`, query: {index: match.id}}}><img className="match-pic" src={require(`./../img/userphotos/uid-${match.img}.png`)} alt={match.name + "s face"} /></Link>)}
        {matches.length === 0 && `You don't have any matches yet.`}
      </div>
    </div>

  )
}
