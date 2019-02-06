import Link from "next/link";
import {
  faExternalLinkAlt,
  faSeedling,
  faClock,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeedSelectModule from "../../productPage/seedSelectModule";

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
let showRating;
let rating;
let totalReviews;
const productThumbnail = props => {
  let currency = props.checkout.viewCurrency;
  let _coupon = props.checkout.orderDetails.coupon;
  let hover = props.hoverId == props.product._id;
  let packageClass = hover ? "packageClass--hover" : "packageClass";
  let plantClass = hover ? "plantClass--hover" : "plantClass";
  let overlayClass = hover ? "overlayClass--hover" : "overlayClass";
  let packagePins = hover ? "package-pins--hover" : "package-pins";
  let productIdentifier =
    props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];
  let name = props.product.name;
  let nameSizeHover = name.length < 14 ? "text-lg" : "text-base";
  let nameSize = name.length < 14 ? "text-2xl" : "text-xl";
  let titleColorBackground =
    " bg-" + props.detail.geneColor[props.product.genetic.toLowerCase()];

  let rating = props.product.rating || 0;

  let showRating = () => {
    rating = props.product.rating || 0;
    totalReviews =
      props.product.review == null ? 0 : props.product.review.length;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <div key={i}>
          <img src="../../static/img/CrownIcon_Inv.svg" className="w-8 h-8" />
        </div>
      );
    }
    return arr;
  };

  return (
    <div className={overlayClass}>
      <div className="xl:hidden xxl:hidden">
        <FontAwesomeIcon
          onClick={() => {
            enableScroll();
            props.setHoverId(props.product._id, false);
          }}
          icon={faTimes}
          className={`
          ${
            hover
              ? "cursor-pointer fa-2x text-grey-light absolute z-50 pin-t pin-r mt-3 mr-3"
              : "hidden"
          } `}
        />
      </div>

      <div
        style={{
          backgroundImage: "url(" + props.product.packageImg + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className={packageClass}
        onClick={() => {
          if (props.isSmallMediumOrLargeDevice) {
            disableScroll();
            props.setHoverId(props.product._id, true);
            let _index = 0;
            while (props.product.price[_index] == -1) {
              _index++;
            }
            props.quickAddToCartQty(_index);
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "SET",
              quantity: 1
            });
          }
        }}
      >
        <img
          className={packagePins}
          src="../static/img/strains/pins/OrangeCrown_150.png"
        />
      </div>

      <img
        src={props.product.strainImg}
        className={plantClass}
        onClick={() => {
          if (props.isSmallMediumOrLargeDevice) {
            disableScroll();
            props.setHoverId(props.product._id, true);
            let _index = 0;
            while (props.product.price[_index] == -1) {
              _index++;
            }
            props.quickAddToCartQty(_index);
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "SET",
              quantity: 1
            });
          }
        }}
      />

      <div
        onClick={() => {
          enableScroll();
          props.setCurrentProduct({ product: props.product });
        }}
        className={hover ? "overflow-hidden w-full bg-white pt-4" : "relative"}
      >
        <Link
          href="/product"
          as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
        >
          <div
            style={{ zIndex: "1000", width: "92%" }}
            className="absolute w-full"
          >
            <h3
              onClick={() => {
                props.setHoverId(null, false);
              }}
              className={
                hover
                  ? "w-full mt-2 mb-2 text-black font-black text-center cursor-pointer strainTitle--hover " +
                    nameSize
                  : "text-center sm:text-xs text-grey p-2 font-extrabold z-50 strainTitle " +
                    nameSizeHover +
                    titleColorBackground
              }
            >
              {name}
              {hover ? (
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="cursor-pointer fa-xs text-grey-light absolute z-50 mt-1 ml-5 mr-3"
                />
              ) : null}
            </h3>
          </div>
        </Link>
        <div
          className={
            hover
              ? "border-t-2 border-grey-lightest w-main mx-auto pt-1"
              : "hidden slow"
          }
        >
          {" "}
        </div>
        <div className="text-center w-full pt-8">
          <p
            className={
              hover
                ? "text-grey my-3 slow font-extrabold text-sm"
                : "hidden slow"
            }
          >
            <span className="p-2 ml-1 text-grey font-bolder uppercase text-grey">
              {props.product.genetic} {props.product.type}
            </span>
          </p>
        </div>
        <div
          className={
            hover ? "text-grey px-6 p-2 sm:pt-0 text-sm" : "hidden slow"
          }
        >
          <Link
            href="/product"
            as={
              "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
            }
          >
            <div className="w-150 relative text-left justify-center flex mx-auto">
              <div
                className="inline-flex bg-red-light"
                style={{
                  width: `${150 * (rating / 5)}px`,
                  height: "17px",
                  marginTop: "7px"
                }}
              />
              <div
                className="inline-flex bg-grey-lightest"
                style={{
                  width: `${150 * ((5 - rating) / 5)}px`,
                  height: "17px",
                  marginTop: "7px"
                }}
              />
              <div className="absolute pin-l inline-flex ">{showRating()} </div>
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
        <div
          className={
            hover
              ? "w-full p-2 px-4 inline-flex text-grey text-center sm:hidden"
              : "hidden slow"
          }
        >
          <div className="w-1/2 text-sm mr-2 inline-flex bg-grey-lightest text-center">
            <div className="text-center w-full pt-1 inline-flex flex items-center justify-between">
              <FontAwesomeIcon icon={faClock} className="fa-lg ml-2 mb-1" />
              <p className="w-full font-extrabold p-1 text-center justify-center">
                {props.product.flowerTime}{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 text-sm ml-2 inline-flex bg-grey-lightest text-center">
            <div className="text-center w-full pt-1 inline-flex flex items-center justify-between">
              <FontAwesomeIcon icon={faSeedling} className="fa-lg ml-2 mb-1" />
              <p className="w-full font-extrabold p-1 text-center justify-center">
                {props.product.yield[2]}
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            hover
              ? "flex justify-center px-4 items-center flex"
              : "flex flex-wrap justify-center px-4 hidden"
          }
        >
          {hover ? (
            <div className="w-full">
              <div className="w-full">
                <SeedSelectModule {...props} product={props.product} />
              </div>
              <div className="w-full inline-flex sm:mt-0 mt-2">
                <button
                  className="bg-red-dark mr-1 w-full text-center text-white h-10 px-2 py-2 hover:bg-grey"
                  onClick={() => {
                    props.modifyCart({
                      items: props.cart.items,
                      action: "APPEND",
                      productIdentifier: productIdentifier,
                      product: props.product,
                      quantity: props.cart.potentialQuantity,
                      coupon: _coupon
                    });
                    props.toggleCartAnimation();
                  }}
                >
                  Add to Cart
                </button>
                <Link href="/checkout">
                  <button
                    className="bg-grey-dark ml-1 w-full text-center text-white h-10 px-2 py-2 hover:bg-grey"
                    onClick={() => {
                      props.modifyCart({
                        items: props.cart.items,
                        action: "APPEND",
                        productIdentifier: productIdentifier,
                        product: props.product,
                        quantity: props.cart.potentialQuantity,
                        coupon: _coupon
                      });
                    }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className={
            hover
              ? "w-full px-4 mt-3 text-red-dark font-extrabold text-center inline-flex"
              : "hidden slow"
          }
        >
          <div className="w-1/2 mr-1 border-grey-lightest border pb-2">
            <p className="text-xs font-bold text-grey p-2 bg-grey-lightest">
              Price per Pack:
            </p>{" "}
            <p className="text-lg pt-2 font-bold text-grey px-2">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    (props.product.price[props.shop.quickAddToCartQty] < 1
                      ? props.product.price[1].toFixed(2)
                      : props.product.price[props.shop.quickAddToCartQty])
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
          <div className="w-1/2 ml-1 border-grey-lightest border pb-2">
            <p className="text-xs font-bold text-grey p-2 bg-grey-lightest">
              Total Price:
            </p>
            <p className="text-lg pt-2 font-bold text-grey px-2">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    props.product.price[props.shop.quickAddToCartQty] *
                    props.cart.potentialQuantity
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
        <div
          className={hover ? "w-full mx-auto text-center p-1" : "hidden slow"}
        >
          <p className="text-sm italic font-extrabold pt-2 text-red-dark text-right mr-6">
            In stock
          </p>
        </div>
      </div>
    </div>
  );
};

export default productThumbnail;
