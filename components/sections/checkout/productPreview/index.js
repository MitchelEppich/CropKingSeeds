import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTimes, 
} from "@fortawesome/free-solid-svg-icons";

const ProductPreview = props => {
    return (
        <div className="w-full mt-6 mb-8">
        <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Shopping Cart</h2>  
        <div className="w-full inline-flex mb-4 mt-2">
            <div className="w-1/2 inline-flex relative mx-2 item-preview">
                <div className="h-10 w-10 items-center flex ml-4 cursor-pointer  hover:text-white hover:bg-red text-center p-2 absolute pin-r">
                    <FontAwesomeIcon icon={faTimes} className="fa-lg ml-1" />
                </div>
                <div className="w-2/5 text-center cursor-pointer p-1">
                    <img src="../static/img/CKS-Auto-Flower-Fem-Sour-Girl-8018.png" width="280px"/>
                </div>
                <div className="mt-12 p-2 w-3/5">
                    <h3 className="p-2">Sour Girl Auto Flower</h3>
                    <p className="p-2 font-bold text-lg">5 Packs</p>
                    <p className="p-2 font-bold text-lg">$35</p>
                    <div className="mt-12 w-full p-2 flex items-center inline-flex h-12">
                        <div style={{width:"70px"}} className="mr-2">
                            <input type="number" maxLength="100" size="3" placeholder="XXX" className="p-2" style={{width:"70px"}} />
                        </div>
                        <div style={{borderRadius: "5px"}} className="w-100 text-grey-light  text-center">
                        <p className="font-bold text-2xl mt-1">$125</p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="w-1/2 inline-flex relative mx-2 item-preview">
                <div className="h-10 w-10 items-center flex ml-4 cursor-pointer  hover:text-white hover:bg-red text-center p-2 absolute pin-r">
                    <FontAwesomeIcon icon={faTimes} className="fa-lg ml-1" />
                </div>
                <div className="w-2/5 text-center cursor-pointer p-1">
                    <img src="../static/img/CKS-Feminized-Cali-OG-KushxHaze-Sativa-7997.png" width="280px"/>
                </div>
                <div className="mt-12 p-2 w-3/5">
                    <h3 className="p-2">Cali OG Kush x Haze</h3>
                    <p className="p-2 font-bold text-lg">5 Packs</p>
                    <p className="p-2 font-bold text-lg">$35</p>
                    <div className="mt-12 w-full p-2 flex items-center inline-flex h-12">
                        <div style={{width:"70px"}} className="mr-2">
                            <input type="number" maxLength="100" size="3" placeholder="XXX" className="p-2" style={{width:"70px"}} />
                        </div>
                        <div style={{borderRadius: "5px"}} className="w-100 text-grey-light  text-center">
                        <p className="font-bold text-2xl mt-1">$125</p>
                        </div>
                    </div>
                </div>                
            </div>            
            </div>
        </div>
    )
}

export default ProductPreview