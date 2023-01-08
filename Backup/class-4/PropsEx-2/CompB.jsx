import React from 'react'
class CompB extends React.Component {

    render() {
        return <div>
            <h2>Component B</h2>
            `       <pre>{JSON.stringify(this.props)}</pre>`
    <h4>Hero Name:{this.props.hero}</h4>
            <h4>Actress Name:{this.props.actress}</h4>
        </div>
    }

}
export default CompB