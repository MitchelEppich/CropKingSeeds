import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {

} from "@fortawesome/free-brands-svg-icons";



const reviewForm = props => {
  return (
    <form className="min-h-300 flex flex-wrap content-around">
      <div className="w-1/4">
        <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Name (optional)" />
        <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Email" />
        <div className="w-full pt-8 content-center flex justify-around px-12">
          <FontAwesomeIcon icon={faCannabis} className="text-grey-dark fa-2x mx-1" />
          <FontAwesomeIcon icon={faCannabis} className="text-grey-dark fa-2x mx-1" />
          <FontAwesomeIcon icon={faCannabis} className="text-grey-dark fa-2x mx-1" />
          <FontAwesomeIcon icon={faCannabis} className="text-grey-dark fa-2x mx-1" />
          <FontAwesomeIcon icon={faCannabis} className="text-grey-dark fa-2x mx-1" />
        </div>
      </div>
      <textarea placeholder={"What did you think about " + props.viewProduct.currentProduct.name + "?"} className="w-2/3 p-4 h-200 my-2 mx-4"></textarea>


    </form>
  );
}
export default reviewForm;