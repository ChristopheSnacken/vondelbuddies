import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import { connect } from 'react-redux'
import { updateUser } from '../actions/activeuser'
import { Link } from 'react-router-dom'
import  Interest  from './Interests'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { db } from '../firebase';
import './Interests.css';

class InterestContainer extends PureComponent {
  updateactiveUserInterest = sports => {
      const {activeUser} = this.props
      const newUser = activeUser
      newUser.sports = sports      
      this.props.updateUser(newUser)
      db.updateUser(activeUser.id, newUser)
  }

render () {
  return (
    <div>
    <Interest updateInterest= {this.updateactiveUserInterest} />
    <Paper square elevation={0} >
      <Typography>
        <Link to={ `/profile` }>
                  <Button className="headerButton" variant="contained">
                    Next
                  </Button>
                </Link>
      </Typography>
    </Paper>
  </div>
  )
}

}

const mapStateToProps = state => {
  return {
    activeUser: state.activeUser
  }
}


export default connect(mapStateToProps, { updateUser })(InterestContainer)
