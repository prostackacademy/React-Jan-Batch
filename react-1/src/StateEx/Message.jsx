import React from 'react'

class Message extends React.Component {
    state = { msg: "Hello,GM....." }
    gmHandler = () => {
        this.setState({
            msg: "Good Morning"
        })
    }

    gnHandler = () => {
        this.setState({ msg: "Good Night" })
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>{this.state.msg}</h3>
            <button onClick={this.gmHandler} >GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message