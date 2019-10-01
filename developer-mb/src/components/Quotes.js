import React, { Component } from 'react'
import { link } from 'react-router-dom'
// import axios from 'axios'

class Quotes extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
        console.log(this.props.quote);
        
        return (
            <div>
                <link to={this.props.randomQuotes}><p>hello</p></link>
            </div>
        )
    }
}



export default Quotes