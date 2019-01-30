// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
  constructor(){
    super()

  }

  handleFocus = () => {
      console.log('Good!')
  }

  handleBlur = () => {
      console.log('Hey! Eyes on me!')
  }


render(){
  return  <div>
           <button onBlur={this.handleBlur} onFocus={this.handleFocus}>EyesOnMe</button>
          </div>

}




}



export default EyesOnMe
