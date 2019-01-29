import React from 'react'

export default class EyesOnMe extends React.Component{
  onFocusResponse=(e)=>{
    console.log('Good!')
  }

  onBlurResponse=(e)=>{
    console.log('Hey! Eyes on me!')
  }
  render(){
    return(
      <div>
      <button onFocus={this.onFocusResponse} onBlur={this.onBlurResponse}>I am a button</button>
      </div>
    )
  }
}
