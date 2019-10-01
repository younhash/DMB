import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Home from './components/Home'
import { BrowserRouter, as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    }

  render(){
    return (
        <Home />
    )
  }

}

    



export default () => (<Router><App /></Router>)