import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'




export default class Level extends PureComponent {
  constructor() {
    super();

    this.state = {
      level: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  this.setState({
    level: event.target.value,

    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.updateLevel(this.state.level)

}




  render (){

    return (
      <div className="Level">
        <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value = "0"
                    checked={this.state.level === "0"}
                    onChange={this.handleChange}
                  />
                  Beginner
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value= "1"
                    checked={this.state.level === "1"}
                    onChange={this.handleChange}
                  />
                  Intermediate
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="2"
                    checked={this.state.level === "2"}
                    onChange={this.handleChange}
                  />
                  Advanced
                </label>
              </li>
            </ul>
          <button className="submit" type="submit">Submit</button>
        </form>
    </div>
    )
  }
}
