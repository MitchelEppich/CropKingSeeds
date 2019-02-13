import {
  faExternalLinkAlt,
  faSeedling,
  faClock,
  faTimes,
  faPlus,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeedSelectModule from "../../productPage/seedSelectModule";

import Router from "next/router";

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

let showRating;
let rating;
const FeaturedStrainThumbnail = props => {
  let currency = props.checkout.viewCurrency;
  let _coupon = props.checkout.orderDetails.coupon;
  let hover = props.hoverId == props.product._id;
  let featuredStrainsPackage = hover
    ? "featuredStrainsPackage--hover"
    : "featuredStrainsPackage";
  let featuredStrainsPlant = hover
    ? "featuredStrainsPlant--hover"
    : "featuredStrainsPlant";
  let overlayClass = hover ? "overlayClass--hover" : "overlayClass";
  let packagePins = hover
    ? "featuredStrainsPackage-pins--hover"
    : "featuredStrainsPackage-pins";
  let productIdentifier =
    props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];
  let name = props.product.name;

  let titleColorBackground =
    " bg-" + props.detail.geneColor[props.product.genetic.toLowerCase()];

  let rating = props.product.rating || 0;

  let showRating = () => {
    rating = props.product.rating || 0;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <div key={i}>
          <img
            src="../../static/img/CrownIcon_Inv.png"
            className="w-8"
            alt={props.product.name + "rating"}
          />
        </div>
      );
    }
    return arr;
  };

  let showMoreText = {
    transform: hover
      ? "translateX(0px) translateY(32px)"
      : "translateX(-450px) translateY(32px)",
    transition: "all 0.4s ease",
    width: "100%",
    height: "42px",
    zIndex: "50"
  };

  return (
    <div className="w-full h-full cursor-pointer">
      <div style={{ zIndex: "1000" }} className="w-full">
        <h3
          onClick={() => {
            props.setHoverId(null, false);
          }}
          className={`"w-full p-2 md:text-base shadow-md text-shadow text-lg text-white text-center cursor-pointer
              ${titleColorBackground} " `}
        >
          {name}
        </h3>
      </div>

      <div
        style={{
          backgroundImage:
            "url(" + props.misc.CFURL + props.product.packageImg + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className={`cursor-pointer mt-8 ${featuredStrainsPackage}`}
      />

      <div
        style={showMoreText}
        className={`absolute text-base cursor-pointer items-center flex mx-auto mt-1 justify-center text-shadow text-white p-2 rounded shadow-md font-bold ${titleColorBackground} `}
      >
        See More Information{" "}
        <span className="ml-3 text-xl items-center flex pt-1">></span>
      </div>
      <div className="text-center w-full pt-1">
        <p className={"text-grey mt-2 slow font-extrabold text-sm"}>
          <span className="px-2 font-bolder uppercase text-grey">
            {props.product.genetic} {props.product.type}
          </span>
        </p>
      </div>

      <div className={"text-grey px-6 p-2 sm:pt-0 text-sm mb-4"}>
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
          <div className="absolute pin-l inline-flex ">{showRating()} </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStrainThumbnail;
