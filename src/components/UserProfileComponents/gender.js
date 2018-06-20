import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Button from '@material-ui/core/Button';

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

      <div >

          <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label>
                    <Radio
                      checked={this.state.gender === "Male"}
                      onChange={this.handleChange}
                      value="Male"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    Male
                  </label>
                </li>

                <li>
                  <label>
                    <Radio
                      checked={this.state.gender === "Female"}
                      onChange={this.handleChange}
                      value="Female"
                      name="radio-button-demo"
                      aria-label="B"

                    />
                    Female
                  </label>
                </li>
              </ul>

              <Button variant="contained" type="submit">
                Submit
              </Button>
          </form>

      </div>
    )
  }
}
