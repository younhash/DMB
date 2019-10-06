import React from 'react'
import Header from './Header'
// import Quotes from './Quotes'
// import Jokes from './Jokes'
// import Numbers from './Numbers'
import Footer from './Footer'
import { Link } from 'react-router-dom'
//import jokes from '../sample.json'
import '../App.css'
//import index from '../index'




    
const Home = () => {
    const office = "General Assembly"
    const other = "Post General Assembly"
    const year = 2019
        return (
            <div className="App">
                <Header brand="Developers Mental Break" developer="Mo" year={year}/>
                <ul>
                    <li><Link to="/randomQuotes">Quotes</Link> </li>
                    <li><Link to="/randomJokes">Jokes</Link> </li>
                    <li><Link to="/numberfacts">Numbers</Link> </li>
                </ul>
                <Footer brand="Developers Mental Break" developer="Mo" year={year} office={office} other={other}/>
            </div>
        )
}



export default Home