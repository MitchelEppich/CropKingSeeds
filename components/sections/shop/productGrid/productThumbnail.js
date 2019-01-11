import Link from "next/link";
import {
  faSeedling,
  faClock,
  faEnvelope,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeedSelectModule from "../../productPage/seedSelectModule";

const productThumbnail = props => {
  let packageStyle =
    props.hoverId == props.product._id
      ? {
          height: "40%",
          width: "70%",
          position: "relative",
          marginLeft: "10px",
          zIndex: 10,
          transition: "0.6s all ease-in-out",
          backgroundImage: "url(" + props.product.packageImg + ")",
          backgroundPosition: "center",
          backgroundSize: "contain",
          marginTop: "10px",
          backgroundRepeat: "no-repeat"
        }
      : {
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 10,
          transition: "0.6s all ease-in-out",
          backgroundImage: "url(" + props.product.packageImg + ")",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        };

  let plantStyle =
    props.hoverId == props.product._id
      ? {
          height: "38%",
          position: "absolute",
          top: "8px",
          zIndex: 0,
          marginTop: "10px",
          transition: "0.6s all ease-in-out",
          transform: "translateX(125px)",
          cursor: "pointer"
        }
      : {
          height: "85%",
          position: "absolute",
          top: "15px",
          zIndex: 0,
          transition: "0.6s all ease-in-out",
          cursor: "pointer"
        };

  let overlayStyle =
    props.hoverId == props.product._id
      ? {
          transform: "translateX(-60px)",
          // height: "250%",
          height: "650px",
          width: "150%",
          backgroundColor: "#fff",
          transition: "0.5s all ease-in-out",
          color: "rgba(255,255,255,1)",
          position: "absolute",
          boxShadow:
            "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"
        }
      : {
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          transition: "0.5s all ease-in-out",
          color: "rgba(255,255,255,0)",
          position: "relative",
          zIndex: "0",
          overflow: "visible"
        };

  let strainTitle = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-43px",
    width: "93%",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    color: "white",
    textShadow: "rgb(0, 0, 0) 1px 1px 2px",
    boxShadow: "rgba(60, 58, 58, 0.45) 0px 2px 6px"
  };

  let productIdentifier =
    props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];

  return (
    <div
      style={overlayStyle}
      onClick={() => {
        props.setCurrentProduct({ product: props.product });
      }}>
      <Link
        href="/viewProduct"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}>
        <div style={packageStyle} className="px-12 py-2 cursor-pointer" />
      </Link>
      <Link
        href="/viewProduct"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}>
        <img src={props.product.strainImg} style={plantStyle} />
      </Link>
      <div
        className={
          props.hoverId == props.product._id ? "w-full bg-white" : "relative"
        }>
        <Link
          href="/viewProduct"
          as={
            "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
          }>
          <div style={{ zIndex: "9999999" }} className="absolute w-full">
            <h3
              style={props.hoverId != props.product._id ? strainTitle : null}
              className={
                props.hoverId == props.product._id
                  ? "w-full mt-4 mb-4 text-black font-black text-2xl text-center cursor-pointer"
                  : `slow text-center text-lg text-grey p-2 font-extrabold z-50 bg-${
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
            props.hoverId == props.product._id
              ? "border-b-2 border-grey-lightest w-main mx-auto pt-2"
              : "hidden slow"
          }>
          {" "}
        </div>
        <div className="text-center w-full pt-8">
          <p
            className={
              props.hoverId == props.product._id
                ? "text-grey my-3 slow font-extrabold text-sm"
                : "hidden slow"
            }>
            <span className="ml-1 text-grey font-medium">
              {props.product.genetic} {props.product.type}
            </span>
          </p>
        </div>
        <div
          className={
            props.hoverId == props.product._id
              ? "text-grey px-6 p-2 text-sm"
              : "hidden slow"
          }>
          <Link
            href="/viewProduct"
            as={
              "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
            }>
            <p className="cursor-pointer hover:text-grey">
              {props.product.description.substring(0, 50) + "..."}
            </p>
          </Link>
        </div>
        <div
          className={
            props.hoverId == props.product._id
              ? "w-full p-2 px-4 inline-flex text-grey text-center"
              : "hidden slow"
          }>
          <div className="w-1/2 text-sm mx-2 inline-flex bg-grey-lightest text-center">
            <div className="text-center w-full pt-1 inline-flex flex items-center justify-between">
              <FontAwesomeIcon icon={faClock} className="fa-lg ml-2 mb-1" />
              <p className="w-full font-extrabold p-1 text-center justify-center">
                {props.product.flowerTime}{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 text-sm mx-2 inline-flex bg-grey-lightest text-center">
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
            props.hoverId == props.product._id
              ? "flex justify-center px-4 items-center flex"
              : "flex flex-wrap justify-center px-4 hidden"
          }>
          {props.hoverId == props.product._id ? (
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
            props.hoverId == props.product._id
              ? "w-full p-2 px-6 mt-3 text-red-dark font-extrabold text-center inline-flex"
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
          className={
            props.hoverId == props.product._id
              ? "w-full mx-auto text-center p-1"
              : "hidden slow"
          }>
          <p className="text-sm italic font-extrabold text-red-dark text-right mr-6">
            In stock
          </p>
        </div>
      </div>
    </div>
  );
};

export default productThumbnail;
