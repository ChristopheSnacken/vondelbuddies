import { connect } from 'react-redux'
import Badge from '@material-ui/core/Badge';
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {

  render() {
    const acceptedMatches = this.props.matches.filter(match => match.accepted === true)
    return (
      <div>
        <div className="home">
          <Link to={'/matches'}><img src={require('../img/search_icon.png')} alt="home"/></Link>
        </div>
        <div className="profile">
          <Badge matches={acceptedMatches} badgeContent={acceptedMatches.length} color="primary">
            <Link to={'/mymatches'}><img src={require('../img/profile_icon.png')} alt="profile"/></Link>
          </Badge>

        </div>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps)(Header)
