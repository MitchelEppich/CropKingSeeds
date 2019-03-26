import Link from "next/link";
const plantImage = props => {
  let plantClass = props.hover ? "plantClass--hover" : "plantClass";
  return (
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
      <img
        src={props.misc.CFURL + "/plant/P_" + props.product.sotiId + ".jpg"}
        // src={props.misc.CFURL + props.product.strainImg}
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
              max: props.cart.maxPerPackage,
              quantity: 1
            });
          }
        }}
        alt={props.product.name + "plant"}
      />
    </Link>
  );
};
export default plantImage;
