import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import  Level  from './UserProfileComponents/level'
import  Gender  from './UserProfileComponents/gender'
import  Age  from './UserProfileComponents/age'
import { connect } from 'react-redux'
import "react-sweet-progress/lib/style.css";
import { updateUser } from '../actions/activeuser'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';



class Profile extends PureComponent {
  state = {
   expanded: null,
 };

 handleChange = panel => (event, expanded) => {
   this.setState({
     expanded: expanded ? panel : false,
   });
 };

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
    const { expanded } = this.state;
    return (
      <div>
      <div>

        <h1> What about you? </h1>

        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >What is your fitness level?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Level updateLevel= {this.updateactiveUserLevel}/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >What is your gender?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Gender updateGender= {this.updateactiveUserGender}/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >What is your age?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Age updateAge= {this.updateactiveUserAge}/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      <br/>


      </div>
      <div className="matches">
        <Link to={ `/matches` }>
          <Button variant="contained">
            See your matches
          </Button>
        </Link>

      </div>
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
