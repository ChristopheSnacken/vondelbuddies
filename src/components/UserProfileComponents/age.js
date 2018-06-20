import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


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

      <ExpansionPanel >
              <ExpansionPanelSummary >

                <Typography >What is your age?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography >
                  <form onSubmit={this.handleSubmit}>
                      <label>
                        Name:
                        <input type="text" value={this.state.age} onChange={this.handleChange} />
                      </label>
                      <input type="submit" value="Submit" />
                  </form>

                </Typography>
              </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
}
