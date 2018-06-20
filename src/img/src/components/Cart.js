import React, { PureComponent } from 'react'
import Title from './Title'
import ItemList from './ItemList'
import CheckoutButton from './CheckoutButton'
import './Cart.css'

export default class Cart extends PureComponent {
  constructor(props) {
    super(props)
    this.childRefCheckout = React.createRef();
  }

  clickHandler = () => {
    this.childRefCheckout.current.checkout()
  }

  render() {
    return (
      <div>
        <Title text="Your Shopping Cart"/>
        <ItemList ref={this.childRefCheckout} />
        <CheckoutButton name="checkout" innerValue="Checkout" onClick={this.clickHandler}/>
      </div>
    )
  }
}
