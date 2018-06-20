import React, { PureComponent } from 'react'
import './CartItem.css'
import Button from './Button'
import PropTypes from 'prop-types'

export default class CartItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    updateQuantity: PropTypes.func.isRequired
  }
  state = {}

  handleClickPlus = () => {
    const {id, quantity} = this.props;
    this.props.updateQuantity(id, quantity + 1)
  }

  handleClickMinus = () => {
    const {id, quantity} = this.props;
    this.props.updateQuantity(id, quantity - 1)
  }

  render() {
    return (
      <li className="cart-item">
        <span>{this.props.name}</span> -
        <span>{this.props.quantity}</span> -
        <span>{this.props.price}</span>
        <Button name="plus-button" innerValue="+" onClick={this.handleClickPlus} />
        <Button name="minus-button" innerValue="-" onClick={this.handleClickMinus} />
      </li>
    )
  }
}
