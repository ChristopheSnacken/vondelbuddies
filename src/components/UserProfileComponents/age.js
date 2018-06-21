import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default class Level extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {age: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({age: event.target.value}
      ,()=>{
        this.props.updateAge(this.state.age);
      });
  }






  render () {

    const N = 99;
    const ageArray = Array.apply(null, {length: N}).map(Number.call, Number)
    console.log (ageArray)



    return (

      <div  >

        <form onSubmit={this.handleSubmit}>

          <FormControl  onSubmit={this.handleSubmit}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ageArray.map( number => <MenuItem value={number}>{number}</MenuItem>)}

          </Select>
        </FormControl>


        </form>

      </div>
    )
  }
}
