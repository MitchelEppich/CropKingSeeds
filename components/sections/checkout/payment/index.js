import React from "react"
import CreditCard from "./creditCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";

const Payment = props => {
    return (
        <div className="w-full">
            <CreditCard />
            <Bitcoin />
            <Paypal />
        </div>
    )
}

export default Payment