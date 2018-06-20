import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


export default class Level extends PureComponent {
  constructor() {
    super();

    this.state = {
      age: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  this.setState({
    age: event.target.value,

    });
  }

  handleSubmit(event) {
  event.preventDefault();

  alert(`You are ${this.state.age} years old`);

}

render () {
  return (
    <div >

      <ExpansionPanel >
              <ExpansionPanelSummary >

                <Typography >What is your age categorie?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography >
                  <form onSubmit={this.handleSubmit}>


                      <ul className="inputForm">
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
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
    </div>
  )
}
}
