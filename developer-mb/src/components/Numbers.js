import React, { Component } from 'react'
import axios from 'axios'

class Numbers extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            number: [] 
        })
    }
    async componentDidMount() {
        const numb = 9
        let number = await axios.get(`http://numbersapi.com/${numb}?json`)
        console.log(number)
        this.setState({
          number: number.data
        })
        console.log(number); 
        console.log(this.state.number)
      }

    render () {
        return (
            <div>
                {this.state.number.text}
            </div>
        )
    }
}



export default Numbers