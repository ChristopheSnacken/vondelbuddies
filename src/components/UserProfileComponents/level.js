import React, { PureComponent } from 'react'
import './level.css'
import Radio from '@material-ui/core/Radio';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
// import Button from '@material-ui/core/Button';




export default class Level extends PureComponent {
  constructor() {
    super();

    this.state = {
      level: '',

    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
  this.setState({
    level: event.target.value,

    },()=>{
      this.props.updateLevel(this.state.level);
    });
  }





  render (){

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="Profile">
            <ul >
              <li>
                <label>
                  <Radio
                    className="profileRadio"
                    checked={this.state.level === "0"}
                    onChange={this.handleChange}
                    value="0"
                    name="radio-button-demo"
                    aria-label="B"
                  />
                  Beginner
                </label>
              </li>

              <li>
                <label>
                  <Radio
                    className="profileRadio"
                    checked={this.state.level === "1"}
                    onChange={this.handleChange}
                    value="1"
                    name="radio-button-demo"
                    aria-label="A"
                  />
                  Intermediate
                </label>
              </li>

              <li>
                <label>
                  <Radio
                    className="profileRadio"
                    checked={this.state.level === "2"}
                    onChange={this.handleChange}
                    value="2"
                    name="radio-button-demo"
                    aria-label="C"
                  />
                  Advanced
                </label>
              </li>
            </ul>
          </div>
        </form>
    </div>
    )
  }
}
