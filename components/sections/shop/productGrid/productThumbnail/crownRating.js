import Link from "next/link";

const crownRating = props => {
  let rating = props.product.rating || 0;
  let totalReviews =
    props.product.review == null ? 0 : props.product.review.length;
  rating = props.product.rating || 0;
  let ratingInCrowns = [];
  for (let i = 0; i < 5; i++) {
    ratingInCrowns.push(
      <div key={i}>
        <img
          alt="crown icon"
          src={props.misc.CFURL + "/icon/crownicon_inv.png"}
          className="w-8"
        />
      </div>
    );
  }

  return (
    <div
      className={
        props.hover ? "text-grey px-6 p-2 sm:pt-0 text-sm" : "hidden slow"
      }
    >
      <Link
        prefetch
        href="/product"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
      >
        <div className="w-150 relative text-left justify-center flex mx-auto">
          <div
            className="inline-flex bg-red-light"
            style={{
              width: `${150 * (rating / 5)}px`,
              height: "17px",
              marginTop: "2px"
            }}
          />
          <div
            className="inline-flex bg-grey-lightest"
            style={{
              width: `${150 * ((5 - rating) / 5)}px`,
              height: "17px",
              marginTop: "2px"
            }}
          />
          <div className="absolute pin-l inline-flex ">{ratingInCrowns}</div>
          <div className="absolute" />
        </div>

        {/* <div
                        style={{ opacity: "50%" }}
                        className="absolute pl-10 pin-l inline-flex"
                        >
                        <p className="inline-flex">{showRating()}</p>
                        {/* <span className="ml-2 font-bold text-sm hover:text-grey-light items-center flex">
                            {rating.toFixed(1)} Crowns ({totalReviews} reviews)
                        </span> 
                        </div> */}
      </Link>
    </div>
  );
};

export default crownRating;
