import React from "react"

const Footer = props => {
    return (
        <div className="w-full h-300 mt-24 inline-flex bg-grey relative">
            <div className="w-1/4 ml-32 mt-8">
                <ul className="text-white font-bold">
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">About</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">Contact Us</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">Privacy Policy</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">Delivery/Payment</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">Partners</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">Affiliates</li>
                    <li className="text-2xl pt-1 hover:text-grey-light cursor-pointer">FAQ</li>
                </ul>
            </div>
            <div className="">
                <img style={{
                       width: "300px",
                       position: "absolute",
                       height: "auto",
                       bottom: "0px",

                }} src="../static/img/cropkingseeds-footer.png" />
            </div>
            <div className="w-3/4">

            </div>
        </div>
    )
}


export default Footer