// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class Keypad extends Component{

  render(){
    return <button onFocus={this.focusEventFunction} onBlur={this.blurEventFunction}>ME</button>
  }

  focusEventFunction(){
    console.log("Good!")
  }

  blurEventFunction(){
    console.log("Hey! Eyes on me!")
  }

}
