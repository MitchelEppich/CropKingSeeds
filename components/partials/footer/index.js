import React from "react"
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
    return (
        <div className="w-full h-300 mt-24 inline-flex bg-grey relative">
            <div className="w-container mx-auto inline-flex">
                <div 
                style={{
                    width: "20%"
                }} 
                className="mt-8">
                    <ul className="text-white font-bold pl-6 p-2">
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">About</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">Contact Us</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">Privacy Policy</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">Delivery/Payment</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">Partners</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">Affiliates</li>
                        <li className="text-lg p-2 hover:text-grey-light cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div 
                style={{
                    width: "40%"
                }} 
                className="">
                    <img style={{
                        width: "300px",
                        position: "absolute",
                        height: "auto",
                        bottom: "0px",
                    }} 
                    src="../static/img/cropkingseeds-footer.png" className="ml-12"/>
                </div>
                <div 
                style={{
                    width: "40%"
                }} 
                className="text-white text-center">
                    <h4 className="p-2 mt-4 mb-4 text-lg">Subscribe to the CKS Newsletter</h4>
                    
                    <div className="inline-flex relative w-container items-center">
                        <input type="email" className="p-2 w-full" id="" value="" placeholder="Email address" />
                        <FontAwesomeIcon icon={faSignInAlt} className="fa-lg text-grey-light  mr-2 absolute pin-r cursor-pointer hover:text-red" />
                    </div>
                    <p className="p-2 mt-8 w-container mx-auto text-center">All the king's horses and all the king's me... they wrote a newsletter.</p>
                    <p className="p-2 mt-8 w-container mx-auto text-center">Copyright © 2019 Crop King Seeds</p>
                    
                </div>
            </div>
        </div>
    )
}


export default Footer