import React from "react"
import CreditCard from "./creditCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";
import Moneygram from "./moneygram";

const Payment = props => {
    return (
        <div className="w-full mt-6 mb-8">
            <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Payment</h2>
            <CreditCard {...props} />
            <Bitcoin {...props} />
            <Moneygram {...props} />
            <Paypal {...props} />
        </div>
    )
}

export default Payment