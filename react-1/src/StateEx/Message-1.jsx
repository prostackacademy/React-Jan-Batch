import React from 'react'

class Message extends React.Component {
    msg = "Helllooo"
    gmHandler = () => { }
    gnHandler = () => { }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>{this.msg}</h3>
            <button onClick={this.gmHandler} >GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message