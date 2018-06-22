import React, { PureComponent } from 'react'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import './Interests.css';

const sports = [
  "Running",
  "Bootcamp",
  "Tourist Egging",
  "Rollerblading",
  "Cycling"
]


export default class Interest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {sports: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

}


handleChange(sport) {
  
  this.setState({ sports: [...this.state.sports, sport] }
  ,()=>{
    
  this.props.updateInterest(this.state.sports);
});
}

  handleReset () {
    this.setState({ sports: [] }
    ,()=>{
    this.props.updateInterest(this.state.sports);
  });
}


  render () {



    return (

      <div  >
          <div className= "headerContainer">
            <h1 className= "headerInterest"> What activities are you looking for?</h1>
          </div>

          <List component="nav">
            { sports.map(sport=>{
                return( 
                <Button key={sport} className= "sport"  disabled = {this.state.sports.includes(sport)} variant="contained" type="submit" value={sport} onClick={()=>this.handleChange(sport)}>
                 {sport}
               </Button>
                )
            })}
          </List>

          <Button className= "reset" type="submit" onClick={this.handleReset} >
            Reset
          </Button>


      </div>
    )
  }
  }
