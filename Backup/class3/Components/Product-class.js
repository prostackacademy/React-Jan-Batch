import React from 'react'
class Product extends React.Component {
    p_Id = 102;
    p_Name = "Iphone 5s -Old"
    render() {
        return <div>
            <h2>Product Id: {this.p_Id}</h2>
            <h2>Product Name:{this.p_Name}</h2>
        </div>
    }

}
export default Product