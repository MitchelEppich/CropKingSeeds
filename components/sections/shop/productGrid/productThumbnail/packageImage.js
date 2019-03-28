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
  let packageClass = props.hover ? "packageClass--hover" : "packageClass";
  let packagePins = props.hover ? "package-pins--hover" : "package-pins";
  let rand = gen.create(name);
  return (
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
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
            window.scrollTo(0, 0);
          }}
        >
          {props.product.releaseDate != null &&
          Math.abs(moment().diff(props.product.releaseDate, "weeks")) < 2 ? (
            <div className="absolute pin-t pin-r sm:mr-20 mr-10 -mt-2">
              <div className="absolute text-grey z-20 w-16 items-center justify-center flex -mt-5" />
              <p className="text-white uppercase coming-soon-icon text-sm h-10 flex items-center font-bold">
                Coming Soon
              </p>
            </div>
          ) : null}
          {props.product.releaseDate != null &&
          Math.abs(moment().diff(props.product.releaseDate, "weeks")) > 2 &&
          Math.max(0, moment().diff(props.product.releaseDate, "months")) <
            3 ? (
            <div className="absolute pin-t pin-r sm:mr-20 mr-10 -mt-2">
              <p className="text-white new-product-icon text-sm h-10 flex items-center font-bold">
                NEW
              </p>
            </div>
          ) : null}
          {!props.product.inStock ? (
            <div className="absolute pin-t pin-r sm:mr-20 mr-10 -mt-2">
              <p className="text-white out-of-stock-icon text-sm h-10 flex items-center font-bold">
                SOLD OUT
              </p>
            </div>
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
        </div>
      </div>
    </Link>
  );
};
export default packageImage;
