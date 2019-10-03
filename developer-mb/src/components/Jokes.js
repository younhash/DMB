import React, { Component } from 'react'
import axios from 'axios'

class Jokes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: [],
            counts: 0,
            item: 0,
            item0: [],
            parseItem: [],
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

    // countBoard = (props) => {
    //     return(
    //         <p>This joke has {this.state.counts} votes</p>
    //     )
    // }

    votesRecord = async (props) => {       
        this.setState({
            counts: this.state.counts +1,
            item: 0,
            r: 0,
            parseItem: []
        })
        // localStorage.removeItem('counts')

            localStorage.setItem('counts', JSON.stringify(this.state.counts))
        
            let item = await localStorage.getItem('counts')
            console.log(item);
            // localStorage.removeItem('counts')
            // return <countBoard />
            return <div>This joke has {this.state.counts} votes</div>
    }

    render () {
        return (
            <div>
                <button onClick={this.nextCall}>Next</button>
                {this.state.joke.setup}
                <br/>
                {this.state.joke.punchline}
                <button onClick={this.votesRecord}>Vote</button>

                {/* <p>This joke has {this.state.counts} votes</p> */}
            </div>
        )
    }
}


export default Jokes