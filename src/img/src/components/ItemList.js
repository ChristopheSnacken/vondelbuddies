import React, { PureComponent } from 'react'
import CartItem from './CartItem'
import Summary from './Summary'
import './ItemList.css'
import AddItems from './AddItems'

export default class ItemList extends PureComponent {
  state = {
    items: [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570,
        quantity: 1
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649,
        quantity: 2
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1,
        quantity: 1
    }],
    amountMoney: 0,
    amountItems: 0
  }

  componentDidMount() {
    this.calcTotalAmount()
    this.calcTotalItems()
  }

  calcTotalAmount = () => {
    let newAmount = this.state.items.reduce((a, b) => {
      return a + (b.price * b.quantity)
    }, 0)
    this.setState({
      amountMoney: newAmount
    })
  }

  calcTotalItems = () => {
    let newAmount = this.state.items.reduce((a, b) => {
      return a + b.quantity
    }, 0)
    this.setState({
      amountItems: newAmount
    })
  }

  addItems = (name) => {
    const newItem = {
      id: Math.round(Math.random() * 10000),
      name,
      price: Math.round(Math.random() * 100),
      quantity: 1
    }

    this.setState({
      items: this.state.items.concat(newItem)
    })
  }

  updateQuantity = (id, changedQuantity) => {
    let updatedItems = this.state.items.map(item => {
      return item.id === id ? {...item, quantity: changedQuantity} : item
    }).filter(item => {
      return item.quantity !== 0;
    })

    this.setState({
      items: updatedItems
    }, () => {
      this.calcTotalAmount();
      this.calcTotalItems();
    })
  }

  checkout = () => {
    this.setState({
      items: [],
      amountMoney: 0,
      amountItems: 0
    })
  }

  renderItems = () => {
    return (this.state.items.map(item => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          updateQuantity={this.updateQuantity}
        />
       )
    }))
  }

  render() {
    return (
      <div className="list">
        <AddItems addItem={this.addItems} />
        <ul className="item-list">{ this.renderItems() }</ul>
        <Summary amount={this.state.amountMoney} quantity={this.state.amountItems}/>
      </div>
    )
  }
}
