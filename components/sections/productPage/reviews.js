import Review from "./review";
import ReviewForm from "./reviewForm";

const reviews = props => {
  let reviews = props.viewProduct.currentProduct.reviews.map(
    (review, index) => {
      let [name, , body, rating, date] = review.split("/&=>");
      review = {
        name,
        body,
        rating,
        date
      };
      return <Review {...props} {...review} index={index} key={index} />;
    }
  );
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
        {reviews}
        <div className="w-container mx-auto text-right mt-2 font-bold text-xl text-red-dark hover:text-grey cursor-pointer">
          <p>Read More...</p>
        </div>
      </div>
    </div>
  );
};

export default reviews;
