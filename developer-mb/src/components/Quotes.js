import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'

class Quotes extends Component {
    constructor(props) {
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
        console.log(this.state.quote)
      }

    render () {
        return (
            <div>
                {this.state.quote.en}
                <br/>
                {this.state.quote.author}
            </div>
        )
    }
}



export default Quotes