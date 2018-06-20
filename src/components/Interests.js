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
    this.state = {sports: ''};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({sports: event.target.value}
      ,()=>{
        this.props.updateInterest(this.state.sports);
      });

  }

  render () {



    return (

      <div  >

          <List component="nav">
            <Button className= "sport" disabled = {this.state.sports === "sport"} variant="contained" type="submit" value= "sport" onClick={this.handleChange}>
              Sport
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports === "sport1"} variant="contained" type="submit" value= "sport1" onClick={this.handleChange}>
              Sport1
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports === "sport2"} variant="contained" type="submit" value= "sport2" onClick={this.handleChange}>
              Sport2
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports === "sport3"} variant="contained" type="submit" value= "sport3" onClick={this.handleChange}>
              Sport3
            </Button>
            <Divider />
            <Button className= "sport" disabled = {this.state.sports === "sport4"} variant="contained" type="submit" value= "sport4" onClick={this.handleChange}>
              Sport4
            </Button>
            <Divider />
          </List>


      </div>
    )
  }
  }
