import Link from "next/link";
const plantImage = props => {
  let plantClass = props.hover
    ? "plantClass--hover"
    : props.misc.lowGPUMode
    ? "plantClassNoAnimation"
    : "plantClass";
  return (
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
      <a
        aria-label={props.product.name}
        href={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
      >
        <img
          src={props.misc.CFURL + "/plant/P_" + props.product.sotiId + ".jpg"}
          // src={props.misc.CFURL + props.product.strainImg}
          className={plantClass}
          onClick={e => e.stopPropagation()}
          onClick={() => {
            if (props.isSmallMediumOrLargeDevice) {
              disableScroll();
              props.setHoverId(props.product._id, true);
              let _index = 0;
              while (props.product.price[_index] == -1) {
                _index++;
              }
              props.quickAddToCartQty(
                _index,
                props.shop.quickAddToCartQty,
                props.product._id
              );
              props.modifyPotentialQuantity({
                potentialQuantity: props.cart.potentialQuantity,
                action: "SET",
                tag: props.product._id,
                max: props.cart.maxPerPackage,
                quantity: 1
              });
            }
            window.scrollTo(0, 0);
          }}
          alt={props.product.name + " Plant"}
        />
      </a>
    </Link>
  );
};
export default plantImage;
