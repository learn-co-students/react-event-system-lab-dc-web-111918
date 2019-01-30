// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
  constructor(){
    super()

  }

  submitForm = () => {
    console.log("Entering password...");
    //debugger;

  }

  render(){
    return (<div>
              <input type="password" onKeyUp={this.submitForm}/>
            </div>)
  }


}

export default Keypad
