import React from 'react'

export default class Keypad extends React.Component{
  typeOutStuff=(e)=>{
    console.log('Entering password...')
  }
  render(){
    return(
      <div>
      <input type="password" onKeyUp={this.typeOutStuff}></input>
      </div>
    )
  }
}
