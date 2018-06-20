import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Summary extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,

  }

  render() {
    return (
      <div>
        <h2>Summary</h2>
        <span className="quantity">Total amount of items in your cart: {this.props.quantity}</span><br />
        <span className="amount">Total Amount: {this.props.amount}</span>
      </div>
    )
  }
}
