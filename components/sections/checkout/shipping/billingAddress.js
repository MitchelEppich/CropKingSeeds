import React from "react"

const BillingAddress = props => {
    return (
        <div className="w-full mt-6">
            <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Billing Address</h2>   
            <form>
                <div className="w-full mt-4">
                    <div className="w-full p-2">
                        <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Full Name" 
                        className="p-2 w-full"/>
                    </div>
                    <div className="w-full p-2">
                        <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Street Address" 
                        className="p-2 w-full"/>
                    </div>
                    <div className="w-full p-2">
                        <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Apart. / Suite / Other" 
                        className="p-2 w-full"/>
                    </div>
                    <div className="w-full p-2 inline-flex">
                        <div className="w-1/3">
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="ZIP Code" 
                            className="p-2 w-full"/>
                        </div>
                        <div className="w-1/3 px-2">
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="City" 
                            className="p-2 w-full"/>
                        </div>
                        <div className="w-1/3">
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Country" 
                            className="p-2 w-full"/>
                        </div>
                    </div>
                    <div className="w-full p-2 inline-flex">
                        <div className="w-1/2">
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Province" 
                            className="p-2 w-full"/>
                        </div>
                        <div className="w-1/2 pl-2">
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Phone" 
                            className="p-2 w-full"/>
                        </div>                    
                    </div>
                    <div className="pl-2 mt-6 flex items-center inline-flex">
                        <input type="checkbox" className="checkbox" id="sameAddress" 
                        onClick={(e) => {
                            props.misc.sameAddress ? !props.misc.sameAddress : null
                            // props.toggleStepsCheckout(props.misc.sameAddress)                           
                           
                        }} />
                        <p className="font-bold">Same for Shipping</p>
                    </div>
                </div>
            </form>
        </div>
)}

export default BillingAddress