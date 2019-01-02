import React from "react"

const BillingAddress = props => {
    console.log("here", props)
    return (
        <div className="w-full mt-6 pb-8">
            <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Billing Address</h2>   
            <form 
            // onChange={props.misc.showDifferentAddress ? 'readonly' : null }
            >
                <div className="pl-2 mt-6 flex items-center inline-flex">
                    <label className="font-bold flex items-center cursor-pointer">
                    
                        <input 
                        type="checkbox" 
                        className="checkbox" 
                        id="sameAddress"
                        value={props.misc.showDifferentAddress} 
                        onChange={() => {
                        props.toggleShowDifferentAddress()
                        console.log(props.misc.showDifferentAddress)
                        // props.misc.sameAddress ? !props.misc.sameAddress : props.misc.sameAddress
                        // props.toggleStepsCheckout(props.misc.sameAddress)
                    }} />
                    Different from Shipping Address</label>
                </div>
                
                <div className="w-full mt-4">
                    <div className="w-full p-2 inline-flex">
                        <div className="w-1/2">
                            <input 
                            type="text" 
                            name="fullName" 
                            id="fullName" 
                            placeholder="Full Name" 
                            className="p-2 w-full"/>
                        </div>
                        <div className="w-1/2 px-2">
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email Address" 
                            className="p-2 w-full"/>
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <input 
                        type="text" 
                        name="" 
                        id="streetAddress" 
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
                </div>
            </form>
        </div>
)}

export default BillingAddress