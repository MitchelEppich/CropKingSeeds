import React from "react"

const Checkout = props => {
    return (
        <div 
            style={{borderTop: "2px solid #efefef"}} 
            className="w-full pt-2 inline-flex">
                <div className={`w-1/4 mx-2 text-center text-black relative ${props.misc.checkoutScreen == "productsScreen" ? 'steps-active' : null }`}>
                    <div onClick={(e)=>{ 
                        e.preventDefault()                       
                        props.setCheckoutScreen("productsScreen")       
                    }} 
                        className="p-2 cursor-pointer">
                        1. Products Review
                    </div>
                </div>
                <div className={`w-1/4 mx-2 text-center text-black relative ${props.misc.checkoutScreen == "shippingScreen" ? 'steps-active' : null }`}>
                    <div onClick={(e)=>{ 
                        e.preventDefault()                       
                        props.setCheckoutScreen("shippingScreen") 
                    }} 
                        className="p-2 cursor-pointer">
                        2. Shipping Details
                    </div>
                </div>
                <div className={`w-1/4 mx-2 text-center text-black relative ${props.misc.checkoutScreen == "paymentScreen" ? 'steps-active' : null }`}>
                    <div onClick={(e)=>{ 
                        e.preventDefault()                       
                        props.setCheckoutScreen("paymentScreen")       
                    }} 
                        className="p-2 cursor-pointer">
                        3. Payment
                    </div>
                </div>
                <div className={`w-1/4 mx-2 text-center text-black relative ${props.misc.checkoutScreen == "confirmationScreen" ? "steps-active" : null }`}> 
                    <div onClick={(e)=>{ 
                        e.preventDefault()                       
                        props.setCheckoutScreen("confirmationScreen")  
                    }} 
                        className="p-2 cursor-pointer">
                        4. Confirmation
                    </div>
                </div>                              
        </div>
    )
}

export default Checkout