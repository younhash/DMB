import React, { Component } from 'react'
import axios from 'axios'

class Jokes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: []
        }
    }
    async componentDidMount() {
        let joke = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
        console.log(this.state.joke)
        this.setState({
          joke: joke.data[0]
        })
        console.log(joke);        
        console.log(this.state.joke)
    }

    nextCall = async () => {
        let joke = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
        this.setState({
            joke: joke.data[0]
        })            
    }

    render () {
        return (
            <div>
                <button onClick={this.nextCall}>Next</button>
                {this.state.joke.setup}
                <br/>
                {this.state.joke.punchline}
            </div>
        )
    }
}


export default Jokes