import React, { PureComponent } from 'react'
import './UserProfilesContainer.css'
import  Level  from './UserProfileComponents/level'
import  Gender  from './UserProfileComponents/gender'
import  Age  from './UserProfileComponents/age'
import { connect } from 'react-redux'
import "react-sweet-progress/lib/style.css";
import { updateUser } from '../actions/activeuser'
import { Link } from 'react-router-dom'
import { db } from '../firebase';

// import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function getSteps() {
  return ['What is your fitness level?', 'What is your gender', 'What is your age?'];
}



class Profile extends PureComponent {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

updateactiveUserLevel = level => {
    const {activeUser} = this.props
    const newUser = activeUser
    newUser.level = parseInt(level, 10)
    this.props.updateUser(newUser)
    db.updateUser(activeUser.id, newUser)
}
updateactiveUserGender = gender => {
    const {activeUser} = this.props
    const newUser = activeUser
    newUser.gender = gender
    this.props.updateUser(newUser)
    db.updateUser(activeUser.id, newUser)
}
updateactiveUserAge = age => {
    const {activeUser} = this.props
    const newUser = activeUser
    newUser.age = parseInt(age, 10)
    this.props.updateUser(newUser)
    db.updateUser(activeUser.id, newUser)
}

getStepContent = step => {
  switch (step) {
    case 0:
      return <Level updateLevel= {this.updateactiveUserLevel} />;
    case 1:
      return <Gender updateGender= {this.updateactiveUserGender}/>;
    case 2:
      return <Age updateAge= {this.updateactiveUserAge}/>;
    default:
      return 'Unknown step';
  }
}

  render() {

    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className="profile-stepper">
        <h1 className="headerProfile"> What about you? </h1>
        <Stepper   activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel ><h2>{label}</h2></StepLabel>
                <StepContent>
                  <div className="step-profiles" >{this.getStepContent(index)}</div >
                  <div >
                    <div>
                      <Button className= "Back"
                        disabled={activeStep === 0}
                        onClick={this.handleBack}

                      >
                        Back
                      </Button>
                      <Button
                        className ="Next"
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}

                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} >
            <Typography>
              <Link className="submit" to={ `/matches` }>
                <Button className ="profileMatches" variant="contained">
                  See your matches
                </Button>
              </Link>
            </Typography>
            <Button className= "reset" onClick={this.handleReset} >
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeUser: state.activeUser

  }
}


export default connect(mapStateToProps, { updateUser })(Profile)
