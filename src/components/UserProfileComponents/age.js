import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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
      <div  >
        <form onSubmit={this.handleSubmit}>
          <TextField
                    id="age"
                    label="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    margin="normal"
                  />

          <br/>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>

      </div>
    )
  }
}
