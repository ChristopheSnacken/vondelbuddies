import React from 'react'
import './Welcome.css'

export default function OnboardingMessage(props) {
  return (
    <div className="welcome-page">
      <h1 className="welcome-title">Welcome to VondelBuddies</h1>
      <h2>Find your sport buddy</h2>
      <label htmlFor="park-selector">Choose your park</label>
      <input className="park-selector" id="park-selector" defaultValue="Vondelpark" />
    </div>
  )
}
