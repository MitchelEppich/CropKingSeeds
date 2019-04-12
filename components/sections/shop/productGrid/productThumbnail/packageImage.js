import Link from "next/link";
import moment from "moment";
import gen from "random-seed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faCalendarAlt,
  faFire
} from "@fortawesome/free-solid-svg-icons";

const packageImage = props => {
  let packageClass = props.hover
    ? "packageClass--hover"
    : props.misc.lowGPUMode
    ? "packageClassNoAnimation"
    : "packageClass";
  let packagePins = props.hover ? "package-pins--hover" : "package-pins";
  let rand = gen.create(name);
  return (
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
      <a>
        <span className="block cursor-pointer xxl:pt-4">
          <span
            style={{
              backgroundImage:
                "url(" +
                props.misc.CFURL +
                "/packages/" +
                props.product.sotiId +
                ".png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            className={`block relative ${packageClass}`}
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

                props.quickAddToCartQty(
                  _index,
                  props.shop.quickAddToCartQty,
                  props.product._id
                );

                props.modifyPotentialQuantity({
                  potentialQuantity: props.cart.potentialQuantity,
                  action: "SET",
                  tag: props.product._id,
                  quantity: 1,
                  max: props.cart.maxPerPackage
                });
              }
              window.scrollTo(0, 0);
            }}
          >
            {props.product.releaseDate != null &&
            Math.abs(moment().diff(props.product.releaseDate, "weeks")) < 2 ? (
              <span className="absolute pin-t pin-r sm:mr-20 mr-10 -mt-2">
                <span className="absolute text-grey z-20 w-16 items-center justify-center flex -mt-5" />
                <p className="text-white uppercase coming-soon-icon text-sm h-10 flex items-center font-bold">
                  Coming Soon
                </p>
              </span>
            ) : null}
            {props.product.releaseDate != null &&
            Math.abs(moment().diff(props.product.releaseDate, "weeks")) > 2 &&
            Math.max(0, moment().diff(props.product.releaseDate, "months")) <
              3 ? (
              <span className="absolute pin-t pin-l sm:ml-20 ml-10 -mt-2">
                <p className="text-white new-product-icon text-sm h-10 flex items-center font-bold">
                  NEW
                </p>
              </span>
            ) : null}
            {!props.product.inStock ? (
              <span className="absolute pin-t pin-l sm:ml-20 ml-10 -mt-2">
                <p className="text-white out-of-stock-icon text-sm h-10 flex items-center font-bold">
                  SOLD OUT
                </p>
              </span>
            ) : null}{" "}
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
          </span>
        </span>
      </a>
    </Link>
  );
};
export default packageImage;
