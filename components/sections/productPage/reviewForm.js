import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const reviewForm = props => {
  let reviewIcons = [];
  for (let i = 0; i < 5; i++) {
    reviewIcons.push(
      <FontAwesomeIcon
        key={i}
        icon={faCannabis}
        onMouseEnter={() => props.setNewRating(i)}
        className={
          props.viewProduct.newRating >= i
            ? " cursor-pointer text-red-dark fa-2x mx-1"
            : " cursor-pointer text-grey-dark fa-2x mx-1"
        }
      />
    );
  }

  return (
    <form className="min-h-300 my-2 mb-12 w-container mx-auto">
      <div className="w-full inline-flex justify-between">
        <div className="w-1/2 mr-2">
          <input
            className="w-full h-12 my-2 pl-2"
            placeholder="Name (optional)"
          />
        </div>
        <div className="w-1/2 ml-2">
          <input className="w-full h-12 my-2 pl-2" placeholder="Email" />
        </div>
      </div>
      <div className="w-full">
        <textarea
          placeholder={
            "What did you think about " +
            props.viewProduct.currentProduct.name +
            "?"
          }
          className="w-full p-4 h-200 my-2 mx-auto"
        />
      </div>
      <div className="w-full inline-flex">
        <div className="w-1/2 content-center flex mx-2 mt-4">
          <p className="flex items-center mr-2 font-bold" /> {reviewIcons}
        </div>
        <div className="w-1/2 justify-end mr-auto flex">
          <button
            className="w-1/2 p-3 mt-2 text-xl hover:bg-red-light bg-red-dark text-white cursor-pointer"
            type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default reviewForm;
