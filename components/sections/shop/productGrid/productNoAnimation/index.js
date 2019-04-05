import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../productThumbnail/images";
import Details from "../productThumbnail/details";
import AddToCartModule from "../productThumbnail/addToCartModule";
import Prices from "../productThumbnail/prices";
import Router from "next/router";

const ProductNoAnimation = props => {
  let hover = props.hoverId == props.product._id;
  let overlayClass = "overlayClassNoAnimation";
  return (
    <div className={overlayClass}>
      <div className="xl:hidden xxl:hidden">
        <FontAwesomeIcon
          onClick={() => {
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
        className="cursor-pointer"
        onClick={() => {
          props.setCurrentProduct({ product: props.product });
          Router.push(
            "/product",
            "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
          );
          // window.scrollTo(0, 0);
        }}
      >
        <Images hover={hover} {...props} />
        <Details hover={hover} {...props} />
      </div>
      <div
        onClick={() => {
          props.setCurrentProduct({ product: props.product });
        }}
      >
        <AddToCartModule {...props} hover={!hover} />
        <Prices {...props} hover={!hover} />
      </div>
    </div>
  );
};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) e.preventDefault();
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// function disableScroll() {
//   if (window.addEventListener)
//     // older FF
//     window.addEventListener("DOMMouseScroll", preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove = preventDefault; // mobile
//   document.onkeydown = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//   if (window.removeEventListener)
//     window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.onmousewheel = document.onmousewheel = null;
//   window.onwheel = null;
//   window.ontouchmove = null;
//   document.onkeydown = null;
// }

export default ProductNoAnimation;
