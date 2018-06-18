import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(props) {
  return <Link to={'./interests'}><span className="button">Get started</span></Link>
}
