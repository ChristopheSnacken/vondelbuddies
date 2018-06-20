import React from 'react'
import Button from './Button'

export default class CheckoutButton extends Button {
  render() {
    return (<Button name="checkout" innerValue={this.props.innerValue} onClick={this.props.onClick}/>)
  }
}
