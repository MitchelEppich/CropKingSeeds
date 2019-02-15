import Review from "./review";
import ReviewForm from "./reviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import ReviewStats from "./reviewStats";

const reviews = props => {
  let _viewProduct = props.viewProduct;
  let cursor = _viewProduct.reviewCursor;
  let _reviews = _viewProduct.currentProduct.reviews;
  let reviewsPerPage = 5;

  let _ratingFilter = _viewProduct.ratingFilter;
  if (_ratingFilter != null)
    _reviews = _reviews.filter(a => {
      let rating = a.split("/&=>")[3];
      if (rating != _ratingFilter) return false;
      return true;
    });

  let reviews = _reviews
    .slice(reviewsPerPage * cursor, reviewsPerPage * (cursor + 1))
    .map((review, index) => {
      let [name, , body, rating, date] = review.split("/&=>");
      review = {
        name,
        body,
        rating,
        date
      };
      return <Review {...props} {...review} index={index} key={index} />;
    });

  let showPages = () => {
    let arr = [];
    // Add Back Button
    arr.push(
      <button
        name="reviewPagesBack"
        key={arr}
        className={`w-32 sm:w-12 sm:w-full sm:mx-0 sm:ml-1 sm:mt-6 p-2 mt-2 mx-2 text-lg hover:bg-red-dark bg-red-light rounded text-white font-extrabold cursor-pointer ${
          cursor <= 0 ? "unselectable opacity-50 pointer-events-none" : ""
        }`}
        onClick={() => {
          props.setReviewCursor({
            cursor: props.viewProduct.reviewCursor - 1
          });
        }}
      >
        Back
      </button>
    );

    let totalPages = Math.ceil(_reviews.length / reviewsPerPage);
    let numPages = Math.min(5, totalPages);
    let pageCursor = Math.max(
      cursor < totalPages - 2 ? cursor - 2 : totalPages - 5,
      0
    );

    for (let i = pageCursor; i < numPages + pageCursor; i++) {
      let value = i;
      arr.push(
        <button
          name="reviewPageNum"
          key={i}
          className={`w-10 sm:w-full sm:mx-1 sm:mt-6 p-2 mt-2 text-lg hover:bg-red-dark bg-red-light font-bold rounded mx-1 text-white cursor-pointer  ${
            cursor == i ? "opacity-75" : ""
          }`}
          onClick={() => {
            props.setReviewCursor({ cursor: value });
          }}
        >
          {value + 1}
        </button>
      );
    }

    // Add Next Button
    arr.push(
      <button
        name="reviewPagesNext"
        key={arr}
        className={`w-32 sm:w-12 sm:w-full sm:mx-0 sm:ml-1 sm:mt-6 p-2 mt-2 mx-2 text-lg hover:bg-red-dark bg-red-light rounded text-white font-extrabold cursor-pointer ${
          (cursor + 1) * 5 >= _reviews.length
            ? "unselectable opacity-50 pointer-events-none"
            : ""
        }`}
        onClick={() => {
          props.setReviewCursor({
            cursor: props.viewProduct.reviewCursor + 1
          });
        }}
      >
        Next
      </button>
    );

    return arr;
  };

  return (
    <div className="w-full mx-auto pb-8 pt-6">
      <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 sm:text-xl text-grey bg-smoke-grey">
        Customer Reviews
      </h3>

      <div>
        <ReviewForm {...props} />
      </div>
      {/* map total reviews here */}
      <div className="mt-4">
        <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 sm:text-xl text-grey bg-smoke-grey">
          Last Reviews
        </h3>
        <div
          id="reviews"
          className="w-full xxl:px-20 sm:px-2 lg:px-8 xl:px-8 md:px-8 mx-auto flex sm:flex-col lg:flex-col md:flex-col"
        >
          <div className="w-1/4 sm:w-full md:w-full lg:w-full">
            {" "}
            <ReviewStats {...props} />
          </div>
          <div className="w-3/4 sm:w-full md:w-full lg:w-full mt-5 mb-3 ml-2 sm:ml-0 rounded ">
          {props.viewProduct.ratingFilter ? 
            <p className="p-1 font-bold bg-grey-lighter opacity-25 text-grey text-center">
              Showing {props.viewProduct.ratingFilter} {props.viewProduct.ratingFilter == "1" ? "crown" : "crowns"} reviews:
            </p> : null }
            <div className="bg-white w-full">
              {_reviews.length != 0 ? (
                reviews
              ) : (
                <div className="h-150 w-full flex items-center">
                  <div className="w-full">
                    <div className="w-full font-bold text-lg my-2">
                      <p className="text-center">
                        Looks like there are no reviews!
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-center">
                        {props.viewProduct.ratingFilter != null &&
                        props.viewProduct.ratingFilter < 4
                          ? "Customers are very happy."
                          : "Be the first to leave a review."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full px-8 text-center mt-2 sm:px-2 sm:inline-flex md:px-2 md:inline-flex">
              {_reviews.length != 0 ? showPages() : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviews;
