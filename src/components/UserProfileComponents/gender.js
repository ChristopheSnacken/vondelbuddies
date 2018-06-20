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

  alert(`You are  ${this.state.gender} `);

}



render (){
  return (



      <div className="Gender">
        <ExpansionPanel>
                <ExpansionPanelSummary >
                  <Typography >What is your gender??</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
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
      </Typography>
    </ExpansionPanelDetails>
</ExpansionPanel>
      </div>
    )
  }
}
