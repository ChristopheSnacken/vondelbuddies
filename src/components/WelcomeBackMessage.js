import React from 'react'
import './Welcome.css'

export default function WelcomeBackMessage(props) {
  return (
    <div className="welcome-page">
      <div className='logo'><img src={require('../img/vondelbuddies_logo.png')} alt=""/></div>
      <h1 className="welcome-title">Welcome back!</h1>
      <h2>Find your sport buddy</h2>
      <label htmlFor="park-selector">Choose your park</label>
      <input className="park-selector" id="park-selector" defaultValue="Vondelpark" />

    </div>
  )
}

