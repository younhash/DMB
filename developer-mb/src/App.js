import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Home from './components/Home'
import Quotes from './components/Quotes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        quote: []
      }
  }
  async componentDidMount() {
    let quote = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    console.log(this.state.quote)
    this.setState({
      quote: quote.data
    })
  }

  render(){
    console.log(this.state.quote)
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/randomQuotes" render={() => <Quotes oneQuote={this.state.quote}/>}/>
        </Switch>
        <Home />
      </div>
    )
  }

}

    



export default () => (<Router><App /></Router>)