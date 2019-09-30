import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: '',
      check1: '',
      check2: ''
    }
    let check = axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    console.log(check);
    let check1 = axios.get('http://numbersapi.com/4')
    console.log(check1);
    let check2 = axios.get('https://official-joke-api.appspot.com/jokes/random')
    console.log(check2);
  }
  render(){
    return (
      <div></div>
    )
  }

}

    



export default App;
