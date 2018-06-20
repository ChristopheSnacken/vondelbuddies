import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'

export default class Level extends PureComponent {
  constructor() {
    super();

    this.state = {
      gender: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  this.setState({
    gender: event.target.value,

    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.updateGender(this.state.gender);



}



render (){
  return (

      <div className="Gender">

          <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      checked={this.state.gender === "Male"}
                      onChange={this.handleChange}
                    />
                    Male
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      checked={this.state.gender === "Female"}
                      onChange={this.handleChange}
                    />
                    Female
                  </label>
                </li>
              </ul>

            <button className="submit" type="submit">Submit</button>
          </form>

      </div>
    )
  }
}
