import React, { Component } from 'react'
import axios from 'axios'
import { FacebookShareButton } from 'react-share'
import { FacebookIcon } from 'react-share'
import jokes from '../sample.json'
import Header from './Header.js'
import Footer from './Footer.js'
// import App from '../App.css'

class Jokes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: [],
            counts: 0,
            item: 0,
        }
    }
    async componentDidMount() {
        let joke = await axios.get('https://official-joke-api.appspot.com/jokes/programming/ten') 
        console.log(joke);
        
        this.setState({
        joke: joke.data
        })
        console.log(joke);        
        console.log(this.state.joke)
    }

    // nextCall = async () => {
    //     this.setState({
    //         keys: {}
    //     })
    //     this.state.joke = false
    //     this.state.counts = 0

    //     console.log(this.state.joke)
    //     //let joke = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
    //     let numbers = Math.floor(Math.random() * 9)
    //     console.log(numbers)
    //     this.setState({
    //         jokezz: jokes[numbers]
    //     })
    // }

    votesRecord = async (props) => {
        this.setState({
            getId: 0,
            counts: this.state.counts +1,
            item: 0,
            id: '',
            count: '',
        })
            
            //let item = this.state.joke.id
            //let id = localStorage.setItem('record.id', item)
            //let count = localStorage.setItem('record.counts', JSON.stringify(this.state.counts))
            //let record = localStorage.setItem('record', id, count)
            //let item = await localStorage.getItem('counts')
    }

    render () {
        return (
            <div className="App">
                <Header />
                <button onClick={this.nextCall}>Next</button>
                { this.state.joke.map( (oneJoke, index) =>
                <div className="boxes" key={index}>
                    <h3> {oneJoke.type} </h3>
                    <p> {oneJoke.setup}</p>
                    <p>{oneJoke.punchline}</p>
                    <div>
                        <FacebookShareButton className="button" url={'/Users/alhussinjaiteh/homework/week6Project/DMB/developer-mb/src'} />
                        <FacebookIcon size={32} round={true} />
                        <button className="button" onClick={this.votesRecord}>Vote </button>              
                        <span className="button"> {this.state.counts} Votes</span>
                    </div>
                </div> )}
                {/* <p>{this.state.joke.setup}</p>
                <p>{this.state.joke.punchline}</p>
                <p>{this.state.jokezz.punchline}</p>*/}
                <Footer />
            </div>
        )
    }
}


export default Jokes