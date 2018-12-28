import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTimes, 
} from "@fortawesome/free-solid-svg-icons";

const ProductPreview = props => {
    return (
        <div className="w-container mx-auto">            
            <div className="w-full inline-flex mt-6">
                <div className="w-1/5 text-center cursor-pointer">
                    <img src="../static/img/package.jpg" width="180px"/>
                </div>
                <div className="mt-4 p-2 w-3/5">
                    <h2 className="p-2">Product Name:</h2>
                    <p className="p-2 font-bold">Package Size:</p>
                    <p className="p-2 font-bold">Price per Pack:</p>
                </div>
                <div className="mt-4 w-1/5 p-2 inline-flex h-12">
                    <div style={{width:"70px"}} className="mx-2">
                        <input type="number" maxLength="100" size="3" placeholder="XXX" className="p-2" style={{width:"70px"}} />
                    </div>
                    <div style={{borderRadius: "5px"}} className="w-100 text-grey-light  text-center">
                       <p className="font-bold text-3xl mt-1">$125</p>
                    </div>
                    {/* <div style={{borderRadius: "5px"}} className="bg-grey-light h-10 pt-3 w-100 text-white cursor-pointer text-center hover:bg-grey-lightest hover:text-grey">
                        Update
                    </div> */}
                    <div className="h-10 w-12 items-center flex ml-4 cursor-pointer  hover:text-white hover:bg-red text-center p-2">
                        <FontAwesomeIcon icon={faTimes} className="fa-lg ml-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview