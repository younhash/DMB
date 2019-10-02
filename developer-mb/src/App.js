import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Quotes from './components/Quotes'
import Jokes from './components/Jokes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  // constructor(props){
  //   super(props)
  //     this.state = {
  //     }
  // }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/randomQuotes" component={Quotes}/>
          <Route exact path="/randomJokes" component={Jokes}/>
        </Switch>
      </div>
    )
  }

}

    



export default () => (<Router><App /></Router>)