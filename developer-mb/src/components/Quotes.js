import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import '../App.css'
import Style from './Style'
//import Style from './Style.css'
import './stylesheet.css'

class Quotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: [],
            //nextCall: []
        }
    }
    async componentDidMount() {
        let quote = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
        console.log(this.state.quote)
        this.setState({
          quote: quote.data
        })
        console.log(this.state.quote)
    }

    // nextCall = async () => {
    //     let quote = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    //     this.setState({
    //         quote: quote.data
    //     })            
    // }
    

    render () {      
        return (
            <div className="App">
                <Style />
                <Header />
                {/* <button onClick={this.nextCall}>Next</button>               */}
                { this.state.quote.map( (oneQuote, index) =>

                <div className="boxes" key={index}>
                    <h3>rating:  {oneQuote.rating} </h3>
                    <p> {oneQuote.en}</p>
                    <h4> - {oneQuote.author}</h4>
                </div> )}

                <Footer />
            </div>
        )
    }
}



export default Quotes