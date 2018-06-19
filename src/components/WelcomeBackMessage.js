import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeBackMessage(props) {
  return (
    <div className="welcome-page">
      <h1 className="welcome-title">Welcome back!</h1>
      <h2>Find your sport buddy</h2>
      <label htmlFor="park-selector">Choose your park</label>
      <input className="park-selector" id="park-selector" defaultValue="Vondelpark" />
      <Link to={'./interests'}><button className="cta-button">Continue</button></Link>
    </div>
  )
}
