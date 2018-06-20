import * as React from 'react'
import OnboardingMessage from './OnboardingMessage'
import WelcomeBackMessage from './WelcomeBackMessage'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Welcome extends React.PureComponent {
  state = {
    currentUser: {
      new: false
    }
  }
  render() {
    if(this.props.activeUser.new === true) {
      return (
        <div className="welcome-page">
          <OnboardingMessage />
          <Link to={'./interests'}><button className="btn">Let's begin</button></Link>
        </div>
      )
    } else {
      return (
        <div className="welcome-page">
          <WelcomeBackMessage />
          <Link to={'./interests'}><button className="btn">Let's begin</button></Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser
  }
}

export default connect(mapStateToProps)(Welcome)
