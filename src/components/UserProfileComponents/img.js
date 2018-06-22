import React, { PureComponent } from 'react'
import '../UserProfilesContainer.css'
import './img.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default class Img extends PureComponent {
  state = {img: '0'};

  handleChange = (event) => { // lamba's lexically scoped, functions zijn dynamically scoped
    this.setState({img: event.target.value})
  }

  submitForm = () => {
    this.props.updateImg(this.state.img);
  }

  render () {

// method="post"
// {this.state.img}
    return (
      <div  >
        <form onSubmit={this.submitForm}  enctype="multipart/form-data">
          <div className= "UploadImg">
              <div><input style={{
              height: 30, borderColor: 'gray', borderWidth: 1, color : "gray"
            }} onChange={this.handleChangetype} type="file" name="image" accept="image/*" capture="user"/></div>
              <div><input  style={{
              height: 30, width: 85, borderColor: 'gray', borderWidth: 1, color : "black", marginTop: 10
            }} type="submit" title="Change Text!" value="Upload"/></div>
          </div>
        </form>
      </div>
    )
  }
}
