import React from 'react'
//import '../App.css'
import './stylesheet.css'
import './Codes-coding-connection-693859.jpg'

const Header = (props) => {
    return (
        <div className="App">
            <img src='/sunset.jpg' alt='computer software' width="600px"/>
            <h1 className="header">{props.brand}</h1>
        </div>
    )    
}



export default Header