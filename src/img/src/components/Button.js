import React, { PureComponent } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

export default class Button extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    innerValue: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  state = {}

  // clickHandler = (event) => {
  //   event.preventDefault();
  //   this.props.action();
  // }

  render() {
    return (<button className="plus-button" name={this.props.name} onClick={this.props.onClick}>{this.props.innerValue}</button>);
  }
}
