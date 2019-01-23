import Review from "./review";
import ReviewForm from "./reviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import ReviewStats from "./reviewStats";

const reviews = props => {
  let reviews = props.viewProduct.reviews.map((review, index) => {
    return <Review {...props} {...review} index={index} key={index} />;
  });
  return (
    <div className="w-full mx-auto pb-8 pt-6">
      <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
        Customer Reviews
      </h3>

      <div>
        <ReviewForm {...props} />
      </div>
      {/* map total reviews here */}
      <div className="mt-4">
        <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
          Last Reviews
        </h3>
        <div className="w-full px-20 mx-auto flex">
          <div className="w-1/4">
            {" "}
            <ReviewStats />
          </div>
          <div className="w-3/4">{reviews}</div>
        </div>

        <div className="w-full px-8 mx-auto text-right mt-2">
          <button className="w-200 sm:w-full sm:mt-6 p-2 mt-2 text-lg hover:bg-red-light bg-red-dark text-white cursor-pointer">
            Load More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default reviews;
