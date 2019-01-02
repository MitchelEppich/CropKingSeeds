import React from "react"
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentReview = props => {    
    return (
        <div className="w-full flex justify-end mb-6">
            <div style={{
                border: "2px solid rgb(239, 239, 239)",
                background: "#ffffff",
                color: "#191919"
                }}
                className="w-1/3 h-200 mx-0">
                <h3  
                style={{
                    borderBottom: "2px solid #505050",
                    color: "#1d1d1d",
                    background: "whitesmoke",
                    padding:"5px",
                }}>
                Shipping Address</h3>
                <div className="p-2">                 
                    <p className="text-xs mt-2">                    
                    {props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.address}{", "}</span> : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.city}{", "}{props.checkout.orderDetails.shipping.state}</span> : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.postalZip : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.country : "Not Defined" }</p>

                    <p className="text-xs mt-6"><span className="p-2 text-grey-light"><FontAwesomeIcon icon={faPhone} className="fa-lg" /></span>
                    {props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.phone : "Not Defined" }</p>

                    <p className="text-xs mt-4"><span className="p-2 text-grey-light"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></span>
                     {props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.email}</span>: "Not Defined" }</p>
                </div>   
            </div>    
            <div style={{
                border: "2px solid rgb(239, 239, 239)",
                background: "#ffffff",
                color: "#191919"
                }}
                className="w-1/3 h-200 mx-4">
                <h3 
                style={{
                    borderBottom: "2px solid #505050",
                    color: "#1d1d1d",
                    background: "whitesmoke",
                    padding:"5px",
                }}>
                Billing Address</h3>
                <div className="p-2">                 
                    <p className="text-xs mt-2">                    
                    {props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.address}{", "}</span> : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.city}{", "}{props.checkout.orderDetails.shipping.state}</span> : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.postalZip : "Not Defined" }</p>

                    <p className="text-xs mt-2">{props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.country : "Not Defined" }</p>

                    <p className="text-xs mt-6"><span className="p-2 text-grey-light"><FontAwesomeIcon icon={faPhone} className="fa-lg" /></span>
                    {props.checkout.orderDetails.shipping != null ? props.checkout.orderDetails.shipping.phone : "Not Defined" }</p>

                    <p className="text-xs mt-4"><span className="p-2 text-grey-light"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></span>
                     {props.checkout.orderDetails.shipping != null ? <span>{props.checkout.orderDetails.shipping.email}</span>: "Not Defined" }</p>
                </div>
            </div>    
            <div style={{
                border: "2px solid rgb(239, 239, 239)",
                background: "#ffffff",
                color: "#191919",                
                }}
                className="w-1/3 h-200 mx-0">
                <h3
                style={{
                    borderBottom: "2px solid #505050",
                    color: "#1d1d1d",
                    background: "whitesmoke",
                    padding:"5px",
                }}>
                Payment Information</h3>
                <div className="p-2">
                    <p className="text-xs mt-2">Product Total: <span className="">$250</span></p>
                    <p className="text-xs mt-2">Shipping: <span className="">$10</span></p>
                    <p className="text-xs mt-2">Tax: <span className="">$15</span></p>
                    <p className="text-xs mt-2">Credit Card Tax: <span className="">$12</span></p>
                    <hr
                    style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
                    className="mt-10"/>
                    <p className="text-lg mt-2 font-extrabold text-center">Total: <span className="">$287</span></p>
                </div>
            </div>    
        </div>
    )
}

export default PaymentReview