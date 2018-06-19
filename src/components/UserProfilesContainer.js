import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './UserProfilesContainer.css'

export default class Profile extends PureComponent {
  constructor() {
    super();

    this.state = {
      level: '',
      gender: '',
      age: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  this.setState({
    level: event.target.value,
    gender: event.target.value,
    age: event.target.value
    });
  }

  handleSubmit(event) {
  event.preventDefault();

  alert(`You are at the ${this.state.level} level.`);
  alert(`You are  ${this.state.gender}`);
  alert(`You are  ${this.state.age} years old`);
}



  render (){
    return (
      <div>
        <h1> What about you? </h1>
        <div className="Level">
          <form onSubmit={this.handleSubmit}>
            <h2>What is your level of fitness?</h2>

              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Beginner"
                      checked={this.state.level === "Beginner"}
                      onChange={this.handleChange}
                    />
                    Beginner
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="Intermediate"
                      checked={this.state.level === "Intermediate"}
                      onChange={this.handleChange}
                    />
                    Intermediate
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="Advanced"
                      checked={this.state.level === "Advanced"}
                      onChange={this.handleChange}
                    />
                    Advanced
                  </label>
                </li>
              </ul>

            <button className="submit" type="submit">Submit</button>
          </form>
        </div>
        <div className="Gender">
          <form onSubmit={this.handleSubmit}>
            <h2>What is your gender?</h2>

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
        <div className="Age">
          <form onSubmit={this.handleSubmit}>
            <h2>What is your age categorie?</h2>

              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="20"
                      checked={this.state.age === "20"}
                      onChange={this.handleChange}
                    />
                    20 - 30
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="30"
                      checked={this.state.age === "30"}
                      onChange={this.handleChange}
                    />
                    30 - 40
                  </label>
                </li>
              </ul>

            <button className="submit" type="submit">Submit</button>
          </form>
        </div>

      </div>


    )
}
}
