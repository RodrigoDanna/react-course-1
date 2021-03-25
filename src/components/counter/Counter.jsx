import React, {Component} from 'react'

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

    render(){
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <label for="paceInput">Pace: </label>
                    <input
                        id="paceInput"
                        type="number"
                        style={{fontSize: '1rem', width: '60px', padding: '5px 0 5px 10px'}}
                        value={this.state.pace}
                        onChange={e => this.setState({pace: +e.target.value})}
                    />
                </div>

                <h4>Value: {this.state.value}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}