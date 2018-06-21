import * as React from 'react'
import OnboardingMessage from './OnboardingMessage'
import WelcomeBackMessage from './WelcomeBackMessage'
import { Link } from 'react-router-dom'

export default class Welcome extends React.PureComponent {
  render() {
      return (
        <div className="welcome-page">
          <OnboardingMessage />
        </div>
      )
  }
}
