import React from 'react'

class User extends React.Component {
    user_Name = "Rahul Judo"
    render() {
        return <div>
            <h1>User component</h1>
            <h2>User Name:{this.user_Name}</h2>
        </div>
    }

}
export default User