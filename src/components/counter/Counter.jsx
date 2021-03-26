import React, {Component} from 'react'
import Display from './Display'
import Buttons from './Buttons'
import Input from './Input'

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            pace: props.pace,
            value: 0
        }
    }

    inc = () => {
        this.setState({
            value: this.state.value + this.state.pace
        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.pace
        })
    }

    changeInput = (value) => {
        this.setState({
            pace: value
        })
    }

    render(){
        return (
            <div>
                <h2>Counter</h2>
                <Input pace={this.state.pace} function={this.changeInput} />
                <Display value={this.state.value}/>
                <Buttons onInc={this.inc} onDec={this.dec}></Buttons>
            </div>
        )
    }
}