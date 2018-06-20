import * as React from 'react'
import Settings from './Settings'
import { connect } from 'react-redux'

class SettingsContainer extends React.PureComponent{
  render() {
    console.log(this.props)
    return (
      <Settings />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(SettingsContainer)
