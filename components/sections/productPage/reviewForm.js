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
        className={`fa-2x
          ${
            props.viewProduct.newRating >= i
              ? "cursor-pointer text-red-dark mx-1"
              : "cursor-pointer text-grey-dark mx-1"
          } `}
      />
    );
  }

  return (
    <form className="min-h-300 my-2 mb-12 w-container mx-auto">
      <div className="w-full inline-flex sm:block justify-between">
        <div className="w-1/2 sm:w-full mr-2">
          <input
            className="w-full h-12 my-2 pl-2"
            placeholder="Name (optional)"
          />
        </div>
        <div className="w-1/2 sm:w-full ml-2 sm:ml-0">
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
          className="w-full p-2 sm:p-2 h-200 my-2 mx-auto"
        />
      </div>
      <div className="w-full inline-flex sm:block">
        <div className="w-1/2 sm:w-full content-center flex mx-2 mt-4">
          <p className="flex items-center mr-2 font-bold sm:text-sm sm:mx-auto">
            {" "}
            {reviewIcons}
          </p>
        </div>
        <div className="w-1/2 sm:w-full justify-end mr-auto flex">
          <button
            className="w-1/2 sm:w-full sm:mt-6 p-2 mt-2 text-xl hover:bg-red-light bg-red-dark text-white cursor-pointer"
            type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default reviewForm;
