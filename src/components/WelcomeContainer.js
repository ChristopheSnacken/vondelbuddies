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
        <div>
          <OnboardingMessage />
          <Link to={'./interests'}><button className="cta-button">Continue</button></Link>
        </div>
      )
    } else {
      return (
        <div>
          <WelcomeBackMessage />
          <Link to={'./interests'}><button className="cta-button">Continue</button></Link>
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
