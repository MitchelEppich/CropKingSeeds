import moment from "moment";
import gen from "random-seed";

const packageImage = props => {
  let packageClass = props.hover ? "packageClass--hover" : "packageClass";
  let packagePins = props.hover ? "package-pins--hover" : "package-pins";
  let rand = gen.create(name);
  return (
    <div className="cursor-pointer xxl:pt-4">
      <div
        style={{
          backgroundImage:
            "url(" +
            props.misc.CFURL +
            "/packages/P_" +
            props.product.sotiId +
            ".png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className={` relative ${packageClass}`}
        onClick={e => {
          if (
            props.isSmallMediumOrLargeDevice ||
            props.supportedBrowser.browser == "firefox"
          ) {
            e.preventDefault();
            if (props.misc.mediaSize == "sm") disableScroll();
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
      >
        {props.product.releaseDate != null &&
        Math.max(0, moment().diff(props.product.releaseDate, "months")) < 3 ? (
          <div className="absolute pin-t pin-r mr-10 -mt-2">
            <p className="text-white new-product-icon text-sm h-10 flex items-center font-bold">
              NEW
            </p>
          </div>
        ) : null}
        <img
          className={packagePins}
          src={
            props.misc.CFURL +
            `/pins/${rand
              .intBetween(1, 7)
              .toString()
              .padStart(2, "0")}.png`
          }
          alt={props.product.name + "pin"}
        />
      </div>
    </div>
  );
};
export default packageImage;
