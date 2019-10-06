import React from 'react'
import './App.css'
import Home from './components/Home'
import Quotes from './components/Quotes'
import Jokes from './components/Jokes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Numbers from './components/Numbers'
import Style from './components/Style'

function App() {

    return (
      <div className="App">
        <Style />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/randomQuotes" component={Quotes}/>
          <Route exact path="/randomJokes" component={Jokes}/>
          <Route exact path="/numberfacts" component={Numbers}/>
        </Switch>
      </div>
    )
}

    



export default () => (<Router><App /></Router>)