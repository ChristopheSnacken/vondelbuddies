import React, { PureComponent } from 'react'
import './AddItems.css'

export default class AddItems extends PureComponent {

  state = {
    name: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({
      name: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item-name">Name: </label>
        <input id="item-name" name="name" type="text" placeholder="Insert item name" onChange={this.handleChange} value={this.state.name}/>
        <input type="Submit" />
      </form>
    )
  }
}
