import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faDollarSign,
  faPhone,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import CartIcon from "./cartIcon";
import SearchBar from "../searchBar";
import SearchSuggest from "../searchSuggest";
import HeaderMessage from "../headerMessage";

const menu = props => {
  let availableCurrency = props.checkout.availableCurrency;
  let currency = props.checkout.viewCurrency;
  let isMobileNavVisible = props.misc.visibleScreen.includes("showMobileNav");
  let viewCurrency, showMobileNav;
  let availableCurrencyLength = Object.keys(availableCurrency).length;
  let showCurrency = () => {
    let arr = [];
    for (let country of Object.keys(availableCurrency)) {
      if (currency != null && country == currency.label) continue;
      arr.push(
        <div
          key={country}
          className="bg-white inline-flex cursor-pointer hover:bg-grey-lightest"
          style={{ marginTop: "5px", height: "34px" }}
          onClick={() => {
            props.setCurrency({
              currency: {
                label: country,
                ...props.checkout.availableCurrency[country]
              }
            });
            props.setVisibleScreen({ input: "viewCurrency" });
          }}
        >
          <div className="w-12 p-2 sm:w-8 sm:p-1 items-center flex justify-center">
            <p>
              <img
                alt="currency country"
                src={`../../static/img/currency/currency_${country}.png`}
                className="w-10"
              />
            </p>
          </div>
          <p className="px-6 pt-2 p-1 uppercase text-center font-extrabold text-lg sm:px-4 sm:text-sm">
            {country.toUpperCase()}
          </p>
        </div>
      );
    }
    return arr;
  };

  viewCurrency = props.misc.visibleScreen.includes("viewCurrency")
    ? {
        transform: "translateX(0px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out"
      }
    : {
        transform: "translateX(-130px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        height: `${8 + (availableCurrencyLength - 1) * 39}px`
      };

  showMobileNav = isMobileNavVisible
    ? {
        height: "230px",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        zIndex: "60",
        color: "transparent",
        padding: "26px 0 0 0"
      }
    : {
        height: "0px",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        zIndex: "60"
      };
  let phoneNumberPosition = ["sm"].includes(props.misc.mediaSize)
    ? { backgroundColor: "#F9F9F9" }
    : { transform: "translateX(0px)", backgroundColor: "#F9F9F9" };

  return (
    <div
      style={{
        background: "white",
        background: `url(${props.misc.CFURL}/banners/header.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "left",

        zIndex: "-18",
        position: "absolute",
        boxShadow: "0 2px 6px rgba(64, 64, 64, 0.29)"
      }}
      className="w-full "
    >
      <div className="h-20 overflow-hidden relative sm:h-16">
        <div className="ray_box">
          {(() => {
            let arr = [];

            let _width = 30;
            let _height = 2000;
            let _amount = 34;
            for (let i = 0; i < _amount; i++) {
              let _deg = i * (360 / _amount);

              arr.push(
                <div
                  key={i}
                  className="ray"
                  style={{
                    height: `${_height}px`,
                    width: `${_width}px`,
                    transform: `rotate(${_deg}deg)`,
                    WebkitTransform: `rotate(${_deg}deg)`,
                    boxShadow: "0 5px 25px rgb(255, 72, 0)"
                  }}
                />
              );
            }
            return arr;
          })()}
        </div>

        <div className="w-full h-12 inline-flex mt-6 sm:mt-2 sm:h-10 sm:mb-0 overflow-hidden">
          {/* <div className="w-1/2 relative">
            <div
                        style={viewCurrency}
                        className="fixed h-12 z-50 overflow-hidden sm:h-10 pin-l bg-white shadow-md rounded cursor-pointer mt-10 -ml-1">
                        {" "}
                        <div className="w-full wrap flex-wrap">{showCurrency()}</div>
                    </div>
                    <div
                        onClick={() =>
                            props.setVisibleScreen({
                                input: "viewCurrency"
                            })
                        }
                        style={{ background: "#f9f9f9" }}
                        className="absolute pin-l shadow-md my-auto rounded -ml-2 inline-flex cursor-pointer scale-item">
                        <p className="px-6 pt-2 p-1 uppercase text-center font-extrabold sm:px-4 text-lg sm:text-sm">
                            {currency != null ? currency.label.toUpperCase() : ""}
                        </p>
                        <div className="w-12 sm:w-8 rounded bg-yellow-dark p-2 items-center flex justify-center font-extrabold">
                            {currency != null ? currency.symbol : ""}
                        </div>
                    </div> 
          </div>*/}
          <div className="w-1/2">
            <a
              aria-label="cks-phone-toll-free"
              name="phone"
              href={
                // props.misc.ageVerification != null &&
                // "United States" == props.misc.ageVerification.country
                "tel:+1-844-276-7546"
                // : "tel:+1-604-563-0291"
              }
              style={phoneNumberPosition}
              className="no-underline text-grey absolute inline-flex pin-r shadow-md my-auto rounded -mr-2"
            >
              <div className="w-12 rounded bg-yellow-dark p-2 items-center flex justify-center">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="" />
                </p>
              </div>
              <p className="pl-3 pr-4 p-2 uppercase font-extrabold text-lg sm:hidden">
                {/* {props.misc.ageVerification != null &&
                "United States" == props.misc.ageVerification.country ? ( */}
                <React.Fragment>
                  <span>+1-844-CROP-KING</span>
                  <span className="-ml-2 mr-2">/</span>
                  <span>(276-7546)</span>
                </React.Fragment>
                {/* ) : (
                  "CALL NOW: +1 (604) 563-0291"
                )} */}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ background: "rgba(93, 9, 9, 0.71)" }}
        className="w-full h-12"
      >
        <div className="w-full xxl:w-1300 px-4 sm:pr-0 md:pr-0 lg:pr-0 xl:w-900 lg:w-700 sm:w-full md:w-full lg:w-full mx-auto text-center relative">
          <div className="inline-flex w-full sm:block md:block lg:block">
            <div className="w-1/5 sm:w-full md:w-full lg:w-full flex justify-start sm:justify-center">
              <div
                className={
                  props.misc.strains != null
                    ? "opacity-1 slow flex shadow-md -mt-54px sm:-mt-10 sm:mx-0 fixed z-999 sm:w-100 sm:h-100 md:w-100 md:-mt-6 md:h-100 w-130 h-125 rounded-full bg-crimson justify-center content-center items-center xxl:ml-10 ml-10"
                    : "opacity-0 slow flex shadow-md sm:mx-0 -mt-54px sm:-mt-6 md:-mt-6 fixed z-999 sm:w-80px sm:h-80px w-130 h-125 rounded-full bg-crimson justify-center content-center items-center ml-10"
                }
              >
                <Link href="/">
                  <a href="/">
                    <img
                      alt={props.misc.CFURL + "/logos/cks-logo-header.png"}
                      // src="../static/img/cks-logo-header.png"
                      src={props.misc.CFURL + "/logos/cks-logo-header.png"}
                      onClick={e => e.stopPropagation()}
                      className="z-999 cks-logo-header p-0 w-125 sm:w-85px md:w-100 scale-item cursor-pointer sm:-mt-2 sm:-ml-1 md:-mt-3"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-4/5 sm:w-full md:w-full lg:w-full flex justify-start">
              {/* MAIN MENU */}
              <div className="sm:hidden md:hidden lg:hidden w-full">
                <ul className="flex justify-around text-white mt-1 uppercase w-full">
                  <li className="font-extrabold cursor-pointer slowish ">
                    <SearchBar {...props} />{" "}
                  </li>
                  <Link href="/">
                    <li
                      onClick={() => {
                        props.toggleCartMenu(false);
                      }}
                      className="font-bold text-xl pt-3 p-2  ml-4 mr-2 cursor-pointer slowish"
                    >
                      <a href="/" className="text-white hover:text-yellow-dark">
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link href="/shop">
                    <li
                      onClick={() => {
                        props.toggleCartMenu(false);
                      }}
                      className="font-bold text-xl pt-3 p-2  xl:mx-2 cursor-pointer slowish"
                    >
                      <a
                        href="/shop"
                        className="text-white hover:text-yellow-dark"
                      >
                        Shop
                      </a>
                    </li>
                  </Link>
                  <Link href="/germination">
                    <li
                      onClick={() => {
                        props.toggleCartMenu(false);
                      }}
                      className="font-bold text-xl pt-3 p-2  xl:mx-2 cursor-pointer slowish"
                    >
                      <a
                        href="/germination"
                        className="text-white hover:text-yellow-dark"
                      >
                        Germinate
                      </a>
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li
                      onClick={() => {
                        props.toggleCartMenu(false);
                      }}
                      className="font-bold text-xl pt-3 p-2  xl:mx-2 cursor-pointer slowish"
                    >
                      <a
                        href="/contact"
                        className="text-white hover:text-yellow-dark"
                      >
                        Contact
                      </a>
                    </li>
                  </Link>
                  <li
                    className={`font-bold text-2xl px-2 scale-item ${
                      props.router.asPath.includes("checkout") ||
                      props.router.asPath.includes("confirmation")
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer scale-item"
                    }`}
                  >
                    <div
                      onClick={() => {
                        if (
                          props.router.asPath.includes("checkout") ||
                          props.router.asPath.includes("confirmation")
                        )
                          return;
                        props.toggleCartMenu(!props.misc.showCartMenu);
                      }}
                      className="text-center mt-1 text-white"
                    >
                      <CartIcon {...props} />
                    </div>
                  </li>
                </ul>
              </div>

              {/* MOBILE SM - SEARCH BAR */}
              <div
                className="absolute pin-l w-12 h-12 bg-semi-transparent items-center justify-center flex text-white xxl:hidden xl:hidden cursor-pointer"
                onClick={() => {
                  props.setVisibleScreen({
                    input: "showSearchBar"
                  });
                }}
              >
                <FontAwesomeIcon icon={faSearch} className="fa-2x p-1 " />{" "}
              </div>

              <div className="justify-center flex mx-auto text-center xl:hidden xxl:hidden w-100 mt-1 sm:mt-16 sm:pl-10 sm:w-main sm:absolute">
                {props.misc.visibleScreen.includes("showSearchBar") ? (
                  <SearchBar {...props} />
                ) : null}
              </div>
              {/* END MOBILE SM - SEARCH BAR */}

              <div
                onClick={() => {
                  props.toggleCartMenu(!props.misc.showCartMenu);
                }}
                className={
                  "font-bold text-2xl h-12 mr-6 lg:mr-12 md:mr-8 pt-2 hover:bg-red-navMobile cursor-pointer slowish xl:hidden xxl:hidden sm:ml-auto"
                }
              >
                <CartIcon {...props} />
              </div>

              {/* MOBILE MENU */}
              <div
                onClick={() => {
                  props.setVisibleScreen({
                    input: "showMobileNav"
                  });
                }}
                className="w-12 xl:hidden xxl:hidden inline-flex justify-end"
              >
                <div className="text-white p-2 h-12 ml-auto w-12 flex justify-end bg-semi-transparent cursor-pointer">
                  <FontAwesomeIcon icon={faBars} className="fa-2x" />
                </div>
                <div
                  style={showMobileNav}
                  className="w-full mt-12 pin-l bg-red-dark fixed"
                >
                  <ul
                    className={
                      isMobileNavVisible
                        ? "text-white w-full mt-1 ml-0 pl-0 uppercase opacity-1 h-full slow"
                        : "text-white w-full mt-1 ml-0 pl-0 uppercase opacity-0 h-0 "
                    }
                  >
                    <Link href="/">
                      <li
                        onClick={() => {
                          props.toggleCartMenu(false);
                        }}
                        className={
                          isMobileNavVisible
                            ? "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                            : "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                        }
                      >
                        Home
                      </li>
                    </Link>
                    <Link href="/shop">
                      <li
                        onClick={() => {
                          props.toggleCartMenu(false);
                        }}
                        className={
                          isMobileNavVisible
                            ? "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                            : "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                        }
                      >
                        Shop
                      </li>
                    </Link>
                    <Link href="/germination">
                      <li
                        onClick={() => {
                          props.toggleCartMenu(false);
                        }}
                        className={
                          isMobileNavVisible
                            ? "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                            : "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                        }
                      >
                        Germinate
                      </li>
                    </Link>
                    <Link href="/contact">
                      {/* props.router.asPath.includes("checkout") // ? "unselectable
                      opacity-50 pointer-events-none" // : "cursor-pointer
                      scale-item" */}
                      <li
                        onClick={() => {
                          props.toggleCartMenu(false);
                        }}
                        className={`                         
                            cursor-pointer scale-item" ${
                              isMobileNavVisible
                                ? "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                : "font-bold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                            }`}
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
