import React from 'react'
class Counter extends React.Component {
    state = {
        counter: 0
    }
    incrHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return <div>
            <h2>Counter Value:{this.state.counter}</h2>
            <button onClick={this.decrHandler}> - </button>
            <button onClick={this.incrHandler}> + </button>
        </div>

    }
}
export default Counter