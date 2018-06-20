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
        </div>
      )
    } else {
      return (
        <div className="welcome-page">
          <WelcomeBackMessage />
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
