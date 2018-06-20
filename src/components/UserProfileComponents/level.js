import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import { updateUser } from '../../actions/activeuser';
// import { connect } from 'react-redux';


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
      <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography >What is your level of fitness?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
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
                </Typography>
              </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>


    )
}
}

// const mapStateToProps = state => {
//   return {
//     ...state,
//     level: state.level,
//
//
//   }
// }
//
//
// export default connect(mapStateToProps, { updateUser })(Level)
