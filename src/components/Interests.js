import React, { PureComponent } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './Interests.css';

export default class Interest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {sports: []};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ sports: [...this.state.sports, event.target.value] }
    ,()=>{
    this.props.updateInterest(this.state.sports);
  });
}

  render () {



    return (

      <div  >

          <List component="nav">
            <Button className= "sport" disabled = {this.state.sports.includes("Running")} variant="contained" type="submit" value= "Running" onClick={this.handleChange}>
              Running
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports.includes("Bootcamp")} variant="contained" type="submit" value= "Bootcamp" onClick={this.handleChange}>
              Bootcamp
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports.includes("Tourist Egging")} variant="contained" type="submit" value= "Tourist Egging" onClick={this.handleChange}>
              Tourist Egging
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports.includes("Rollerblading")} variant="contained" type="submit" value= "Rollerblading" onClick={this.handleChange}>
              Rollerblading
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports.includes("Cycling")} variant="contained" type="submit" value= "Cycling" onClick={this.handleChange}>
              Cycling
            </Button>
            <Divider />
          </List>


      </div>
    )
  }
  }
