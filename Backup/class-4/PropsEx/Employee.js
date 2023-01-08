import React from 'react'
class Employee extends React.Component {
    render() {
        return <div>

            <h3>Employee Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Id:{this.props.details.uId}</h4>
            <h3>Emoployee Eid:{this.props.details.uEmail}</h3>
        </div>
    }
}
export default Employee