import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {

} from "@fortawesome/free-brands-svg-icons";



const details = props => {

  return (
    <div className="w-full h-300">
      <h1 className="mb-2 font-black">{props.viewProduct.currentProduct.name}</h1>
      <p>Excepteur irure excepteur eiusmod quis pariatur esse esse deserunt ex ad nostrud proident eu incididunt. In occaecat officia cillum reprehenderit veniam aute deserunt veniam adipisicing proident. Tempor esse est quis non anim veniam aute ipsum aliquip consequat amet elit cillum magna. Voluptate labore incididunt irure nulla elit. Duis Lorem adipisicing mollit culpa laborum anim nisi dolor. Laboris adipisicing eiusmod non occaecat est deserunt sit ex.</p>
      <div className="leading-none mt-8 mb-4 ">
        <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
        <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
        <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
        <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
        <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
        5 Leaves (81 reviews)
      </div>
      <ul className="list-reset leading-normal">
        <li>Type:<span className="font-bold">{props.viewProduct.currentProduct.type}</span></li>
        <li>THC:<span className="font-bold">{props.viewProduct.currentProduct.pthc}</span></li>
        <li>Yield:<span className="font-bold">{props.viewProduct.currentProduct.yield[0] + "/" + props.viewProduct.currentProduct.yield[0]}</span></li>
        <li>Grow Time:<span className="font-bold">{props.viewProduct.currentProduct.flowerTime}</span></li>
      </ul>


    </div>
  )
}

export default details;