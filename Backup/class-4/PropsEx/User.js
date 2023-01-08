import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    user_Details = {
        uId: 101,
        uName: "Rahul",
        uEmail: 'rahul@pm.com'
    }
    render() {
        return <div>
            <h2>User Component</h2>
            <hr />
            <Employee details={this.user_Details} />
        </div>
    }
}
export default User