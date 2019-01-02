import React from "react"
import ShippingAddress from "./shippingAddress";

const Shipping = props => {
    return (
        <div>                       
            <ShippingAddress {...props} />          
        </div>
    )
}

export default Shipping