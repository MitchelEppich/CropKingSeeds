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
        onClick={() => {
          props.setCurrentProduct({ product: props.product });
          Router.push(
            "/product",
            "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
          );
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

export default ProductNoAnimation;
