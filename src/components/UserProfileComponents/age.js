import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'



export default class Level extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {age: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({age: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateAge(this.state.age);
    event.preventDefault();
  }




  render () {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.age} onChange={this.handleChange} />
            </label>
            <input className="submit" type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
