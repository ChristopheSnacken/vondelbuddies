import * as React from 'react'
import OnboardingMessage from './OnboardingMessage'


export default class Welcome extends React.PureComponent {
  render() {
      return (
        <div className="welcome-page">
          <OnboardingMessage />
        </div>
      )
  }
}
