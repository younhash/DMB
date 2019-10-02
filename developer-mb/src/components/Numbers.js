import React, { Component } from 'react'
import axios from 'axios'

class Numbers extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            number: [],
            value: '',
            numberPick: 0
        })
    }
    // async componentDidMount() {
    //     const numb = ''
    //     let number = await axios.get(`http://numbersapi.com/${numb}?json`)
    //     console.log(number)
    //     this.setState({
    //       number: number.data
    //     })
    //     console.log(number) 
    //     console.log(this.state.number)
    // }

    handleNumInput = (event) => {
        this.setState({
            value: parseInt(event.target.value)
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const numb = this.state.value
        let number = await axios.get(`http://numbersapi.com/${numb}?json`)
        console.log(number)
        this.setState({
            number: number.data
        })
        console.log(this.state.number)
        console.log(this.state.value)  

    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Type any number:
                        <input type="number" name="number" value={this.state.value} onChange={this.handleNumInput}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
                {this.state.number.text}

            </div>
        )
    }
}



export default Numbers