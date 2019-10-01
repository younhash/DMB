import React, { Component } from 'react'
import Header from './Header'
import Quotes from './Quotes'
import Jokes from './Jokes'
import Numbers from './Numbers'
import Footer from './Footer'
import { link } from 'react-router-dom'

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
        return (
            <div>
                <Header />
                <ul>
                    <li><link to="/randomQuotes">Quotes</link> </li>
                    <li><link to="/randomJokes">Jokes</link> </li>
                </ul>
                <Footer />
            </div>
        )
    }
}



export default Home