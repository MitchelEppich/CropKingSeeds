import React from "react"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bitcoin = props => {
    return (
        <div className="w-full mb-6">
            <div className="bg-grey text-white h-10 inline-flex w-full">
                <div className="w-4/5 p-2 flex items-center">
                    <p>Pay with Bitcoin</p>
                </div>
                <div className="w-1/5 justify-end flex">
                    <div className="h-10 w-10 text-center py-2 bg-semi-transparent cursor-pointer">
                        <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
                    </div>
                </div>
            </div>
            <div className="w-600 mx-auto p-2 hidden"> {/* HIDDEN */}
                <div className="w-full mt-2 text-center">
                    <p className="text-sm p-2">Proceeding will take you to Bitcoin to log in to your account.</p>
                    <img src="../static/img/bitcoin_logo.png" width="200px" className="mt-4" />
                </div>
                <div className="w-200 p-2 mx-auto mt-6 text-center">                   
                    <p className="text-center p-2 bg-grey text-white hover:bg-grey-light cursor-pointer">Pay with Bitcoin</p>
                </div>    
            </div>
        </div>
    )
}

export default Bitcoin