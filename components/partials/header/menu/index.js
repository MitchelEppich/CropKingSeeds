
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const menu = props => {
    return (
        <div style={{
            boxShadow: "0 0 18px rgba(8, 8, 8, 0.6)",
            background: "#ffffff"        
        }} 
        className="w-full h-24 inline-flex test">
            <div className="p-2 w-1/2 inline-flex">            
                <div className="p-2 ml-6 mt-1 p-3 text-red cursor-pointer hover:text-grey">
                    <FontAwesomeIcon icon={faSearch} className="fa-2x py-1" /> 
                </div>
                <div className="w-full mt-2">
                    <ul className="inline-flex w-full text-red font-bold text-lg pt-2 pl-32">
                        <li style={{ fontSize: "22px"}} className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark"><h3>Shop</h3></li>
                        <li style={{ fontSize: "22px"}} className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark"><h3>Germination</h3></li>
                        <li style={{ fontSize: "22px"}} className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark"><h3>Articles</h3></li>
                    </ul>  
                </div>
            </div>

            <div className="text-center">
                <img src="../static/img/cropkingseeds.png" width="200px" />
            </div> 

            <div className="w-1/2 inline-flex">
                <div className="w-1/5 mt-2">
                    <ul className="inline-flex text-red font-bold  justify-around text-lg pt-2">
                        <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark text-red">
                            <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
                        </li>
                        <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark text-red">
                            <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                        </li>
                        <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-dark text-red">
                            <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                        </li>
                    </ul>  
                </div>            
            
            <div className="w-3/5 mt-2 text-center mt-4">
            <p className="text-grey p-2 mt-2 text-lg">Call: 604-563-0291</p>
            </div>
            <div className="bg-red text-white w-1/5 text-center pt-6 cursor-pointer hover:bg-grey">
                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>            
            </div> 
            </div> 
               
        </div>
    )
}


export default menu