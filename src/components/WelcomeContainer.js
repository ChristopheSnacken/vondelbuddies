import * as React from 'react'
import OnboardingMessage from './OnboardingMessage'
import WelcomeBackMessage from './WelcomeBackMessage'
import { connect } from 'react-redux'

class Welcome extends React.PureComponent {
  state = {
    currentUser: {
      new: false
    }
  }
  render() {
    if(this.state.currentUser.new) {
      return <OnboardingMessage />
    } else {
      return <WelcomeBackMessage />
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Welcome)
