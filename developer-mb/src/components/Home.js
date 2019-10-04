import React from 'react'
import Header from './Header'
// import Quotes from './Quotes'
// import Jokes from './Jokes'
// import Numbers from './Numbers'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import jokes from '../sample.json'
//import App from '../App.css'
//import index from '../index'

//class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }



    
const Home = () => {
        return (
            <div className="App">
                <Header />
                <ul>
                    <li><Link to="/randomQuotes">Quotes</Link> </li>
                    <li><Link to="/randomJokes">Jokes</Link> </li>
                    <li><Link to="/numberfacts">Numbers</Link> </li>
                </ul>
                <Footer />
            </div>
        )
}



export default Home