import Link from "next/link";
import {
  faSeedling,
  faClock,
  faEnvelope,
  faPrint,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeedSelectModule from "../../productPage/seedSelectModule";

const productThumbnail = props => {
  let hover = props.hoverId == props.product._id;
  let packageClass = hover ? "packageClass--hover" : "packageClass";
  let plantClass = hover ? "plantClass--hover" : "plantClass";
  let overlayClass = hover ? "overlayClass--hover" : "overlayClass";
  let productIdentifier =
    props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];

  return (
    <div className={`${overlayClass} overflow-x-hidden overflow-y-hidden`}>
      <FontAwesomeIcon
        onClick={() => {
          props.setHoverId(product._id);
        }}
        icon={faTimes}
        className={
          hover
            ? "lg:hidden xl:hidden fa-2x text-grey-light absolute z-50 pin-t pin-r mt-3 mr-3"
            : "hidden"
        }
      />

      <img src={props.product.packageImg} className={packageClass} />
      <img src={props.product.strainImg} className={plantClass} />

      <div
        onClick={() => {
          props.setCurrentProduct({ product: props.product });
        }}
        className={hover ? "overflow-hidden w-full bg-white ml-1" : "relative"}>
        <Link
          href="/viewProduct"
          as={
            "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
          }>
          <div style={{ zIndex: "1000" }} className="absolute w-full">
            <h3
              className={
                hover
                  ? "w-full mt-2 mb-2 text-black font-black text-2xl text-center cursor-pointer strainTitle--hover"
                  : `text-center sm:text-xs text-lg text-grey p-2 font-extrabold z-50 strainTitle bg-${
                      props.detail.geneColor[
                        props.product.genetic.toLowerCase()
                      ]
                    }`
              }>
              {props.product.name}
            </h3>
          </div>
        </Link>
        <div
          className={
            hover
              ? "border-t-2 border-grey-lightest w-main mx-auto pt-1"
              : "hidden slow"
          }>
          {" "}
        </div>
        <div className="text-center w-full pt-8">
          <p
            className={
              hover
                ? "text-grey my-3 slow font-extrabold text-sm"
                : "hidden slow"
            }>
            <span className="ml-1 text-grey font-bolder uppercase">
              {props.product.genetic} {props.product.type}
            </span>
          </p>
        </div>
        <div className={hover ? "text-grey px-6 p-2 text-sm" : "hidden slow"}>
          <Link
            href="/viewProduct"
            as={
              "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
            }>
            <p className="cursor-pointer hover:text-grey">
              {props.product.description.substring(0, 45) + "..."}
            </p>
          </Link>
        </div>
        <div
          className={
            hover
              ? "w-full p-2 px-4 inline-flex text-grey text-center"
              : "hidden slow"
          }>
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
          }>
          {hover ? (
            <div className="w-full">
              <div className="w-full">
                <SeedSelectModule {...props} product={props.product} />
              </div>
              <div className="w-full inline-flex mt-2">
                <button
                  className="bg-red-dark mr-1 w-full text-center text-white h-10 px-2 py-2 hover:bg-grey"
                  onClick={() => {
                    props.modifyCart({
                      items: props.cart.items,
                      action: "APPEND",
                      productIdentifier: productIdentifier,
                      product: props.product,
                      quantity: props.cart.potentialQuantity
                    });
                  }}>
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
                        quantity: props.cart.potentialQuantity
                      });
                    }}>
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
              ? "w-full p-2 px-4 mt-1 text-red-dark font-extrabold text-center inline-flex"
              : "hidden slow"
          }>
          <div className="w-1/2 mr-1 bg-grey-lightest pb-2">
            <p className="text-xs mt-2 text-grey pt-2 px-2">Price per Pack:</p>{" "}
            <p className="text-2xl text-grey px-2 ">
              $
              {props.product.price[props.shop.quickAddToCartQty] < 1
                ? props.product.price[1].toFixed(2)
                : props.product.price[props.shop.quickAddToCartQty].toFixed(2)}
            </p>
          </div>
          <div className="w-1/2 ml-1 bg-grey-lightest pb-2">
            <p className="text-xs mt-2 text-grey pt-2 px-2">Total Price:</p>
            <p className="text-2xl text-grey px-2">
              $
              {(
                props.product.price[props.shop.quickAddToCartQty] *
                props.cart.potentialQuantity
              ).toFixed(2)}
            </p>
          </div>
        </div>
        <div
          className={hover ? "w-full mx-auto text-center p-1" : "hidden slow"}>
          <p className="text-sm italic font-extrabold text-red-dark text-right mr-6">
            In stock
          </p>
        </div>
      </div>
    </div>
  );
};

export default productThumbnail;
