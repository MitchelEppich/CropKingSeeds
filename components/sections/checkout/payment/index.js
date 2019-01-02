import React from "react"
import CreditCard from "./creditCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";
import Moneygram from "./moneygram";

const Payment = props => {
    return (
        <div className="w-full mt-6 mb-8">
            <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Payment</h2>
            <div className="w-full flex justify-end">
                <div className="w-200 ml-2 pin-r">
                    <div className="p-2 text-red font-bold text-center">
                        <h3>Total: <span className="text-black">$560</span></h3> 
                    </div>
                </div>
            </div>
            <CreditCard {...props} />
            <Bitcoin {...props} />
            <Moneygram {...props} />
            <Paypal {...props} />
        </div>
    )
}

export default Payment