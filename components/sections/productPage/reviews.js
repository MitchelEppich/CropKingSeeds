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
        className={`w-32 sm:w-full sm:mt-6 p-2 mt-2 text-lg hover:bg-red-light bg-red-dark text-white cursor-pointer ${
          cursor <= 0 ? "unselectable opacity-50 pointer-events-none" : ""
        }`}
        onClick={() => {
          props.setReviewCursor({ cursor: props.viewProduct.reviewCursor - 1 });
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
          className={`w-12 sm:w-full sm:mt-6 p-2 mt-2 text-lg hover:bg-red-light bg-red-dark text-white cursor-pointer ${
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
        className={`w-32 sm:w-full sm:mt-6 p-2 mt-2 text-lg hover:bg-red-light bg-red-dark text-white cursor-pointer ${
          (cursor + 1) * 5 >= _reviews.length
            ? "unselectable opacity-50 pointer-events-none"
            : ""
        }`}
        onClick={() => {
          props.setReviewCursor({ cursor: props.viewProduct.reviewCursor + 1 });
        }}
      >
        Next
      </button>
    );

    return arr;
  };

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
            <ReviewStats {...props} />
          </div>
          <div className="w-3/4 bg-smoke-grey mt-5 mb-3 ml-2 rounded">
            {_reviews.length != 0 ? (
              reviews
            ) : (
              <div className="h-full w-full flex items-center">
                <div className="flex-col w-full">
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
                        : "Be the first the leave a review."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full ml-12 px-8 text-center mt-2">
              {_reviews.length != 0 ? showPages() : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviews;
