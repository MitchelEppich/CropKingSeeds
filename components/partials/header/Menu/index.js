import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faDollarSign, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import CartIcon from "./cartIcon";

import Router from "next/router";

const menu = props => {
    let menuStyle = {
        // backgroundImage: "url(../static/img/red.png)",
    };

    const isClient = typeof document !== "undefined";
    let route = isClient ? Router.route : "";

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
                    }}>
                    <div className="w-12 p-2 sm:w-8 sm:p-1 items-center flex justify-center">
                        <p>
                            <img src={`../../static/img/currency/currency_${country}.png`} className="w-10" />
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
              // width: "122px",
              // height: "43px"
          }
        : {
              transform: "translateX(-130px)",
              transition: "all 0.2s ease-in-out",
              WebkitTransition: "all 0.2s ease-in-out",
              // width: "122px",
              height: `${8 + (availableCurrencyLength - 1) * 39}px`
          };

    showMobileNav = isMobileNavVisible
        ? {
              height: "285px",
              transition: "all 0.4s ease-in-out",
              WebkitTransition: "all 0.3s ease-in-out",
              zIndex: "-90",
              color: "transparent",
              padding: "50px 0 0 0"
          }
        : {
              height: "0px",
              transition: "all 0.4s ease-in-out",
              WebkitTransition: "all 0.3s ease-in-out",
              zIndex: "-90"
          };
    let phoneNumberPosition = ["sm", "md"].includes(props.misc.mediaSize)
        ? { right: "-285px", backgroundColor: "#F9F9F9" }
        : { transform: "translateX(0px)", backgroundColor: "#F9F9F9" };

    return (
        <div
            style={{
                background: "white",
                background: "url(../static/img/bg-header.png)",
                backgroundSize: "cover",
                backgroundPosition: "left",
                overflow: "hidden",
                zIndex: "-18",
                position: "absolute",
                boxShadow: "0 2px 6px rgba(64, 64, 64, 0.29)"
            }}
            className="w-full ">
            <div className="w-full h-12 inline-flex mt-6 sm:mt-2 sm:h-10 sm:mb-0">
                <div className="w-1/2 relative">
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
                </div>
                <div className="w-1/2">
                    <a
                        href="tel:+1-844-276-7546"
                        style={phoneNumberPosition}
                        className="no-underline text-grey absolute inline-flex pin-r shadow-md my-auto rounded -mr-2">
                        <div className="w-12 rounded bg-yellow-dark p-2  items-center flex justify-center">
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="" />
                            </p>
                        </div>
                        <p className="pl-3 pr-4 p-2 uppercase font-extrabold text-lg">+1-844-CROP-KING (276-7546)</p>
                    </a>
                </div>
            </div>
            <div style={{ background: "rgba(93, 9, 9, 0.71)" }} className="w-full h-12">
                <div
                    style={{ marginTop: "3px" }}
                    className="w-full xxl:px-64 xl:px-48 lg:px-40 md:pr-16 md:pl-48 sm:pl-24 sm:w-full md:w-full lg:w-full mx-auto text-center relative">
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
                    <div className="inline-flex w-full sm:block md:block lg:block">
                        <div className="w-1/4 sm:w-full md:w-full lg:w-full flex justify-start">
                            <div className="pt-px pr-px pb-15px pl-3px sm:pb-2 sm:pr-1 flex shadow-md -mt-54px sm:-mt-6 fixed z-999 sm:w-80px sm:h-80px w-130 h-130 rounded-full bg-crimson justify-center content-center items-center">
                                <img
                                    src="../static/img/cks-logo-header.png"
                                    onClick={() => console.log(props)}
                                    className="z-999 p-0 w-125 sm:w-75px scale-item cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="w-3/4 sm:w-full md:w-full lg:w-full flex justify-start">
                            {/* MAIN MENU */}
                            <div className="sm:hidden md:hidden lg:hidden w-full">
                                <ul className="flex justify-around text-white mt-1 uppercase w-full">
                                    <Link href="/">
                                        <li className="font-extrabold text-xl pt-3 p-2 cursor-pointer slowish hover:text-yellow-dark">
                                            Home
                                        </li>
                                    </Link>
                                    <Link href="/shop">
                                        <li className="font-extrabold text-xl pt-3 p-2 cursor-pointer slowish hover:text-yellow-dark">
                                            Shop
                                        </li>
                                    </Link>
                                    <Link href="/germination">
                                        <li className="font-extrabold text-xl pt-3 p-2 cursor-pointer slowish hover:text-yellow-dark">
                                            Germination
                                        </li>
                                    </Link>
                                    <Link href="/contact">
                                        <li className="font-extrabold text-xl pt-3 p-2 cursor-pointer slowish hover:text-yellow-dark">
                                            Contact
                                        </li>
                                    </Link>
                                    <li
                                        className={`font-extrabold text-2xl px-2 cursor-pointer scale-item ${
                                            route.includes("checkout")
                                                ? "unselectable opacity-50 pointer-events-none"
                                                : "cursor-pointer scale-item"
                                        }`}>
                                        <div
                                            onClick={() => {
                                                props.setVisibleScreen({ input: "viewCart" });
                                            }}
                                            className="text-center cursor-pointer mt-1 text-white">
                                            <CartIcon {...props} />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* MOBILE MENU */}
                            <div
                                onClick={() => {
                                    props.setVisibleScreen({ input: "showMobileNav" });
                                }}
                                className={"justify-end w-full xl:hidden xxl:hidden"}>
                                <div className="text-white p-2 h-12 ml-auto mr-4 w-12 flex justify-end bg-semi-transparent cursor-pointer">
                                    <FontAwesomeIcon icon={faBars} className="fa-2x" />
                                </div>
                                <div style={showMobileNav} className="w-full fixed pin-l bg-red-dark z-50">
                                    <ul
                                        className={
                                            isMobileNavVisible
                                                ? "text-white w-full mt-1 ml-0 pl-0 uppercase opacity-1 h-full slow"
                                                : "text-white w-full mt-1 ml-0 pl-0 uppercase opacity-0 h-0 "
                                        }>
                                        <Link href="/">
                                            <li
                                                className={
                                                    isMobileNavVisible
                                                        ? "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                                        : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                                }>
                                                Home
                                            </li>
                                        </Link>
                                        <Link href="/shop">
                                            <li
                                                className={
                                                    isMobileNavVisible
                                                        ? "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                                        : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                                }>
                                                Shop
                                            </li>
                                        </Link>
                                        <Link href="/germination">
                                            <li
                                                className={
                                                    isMobileNavVisible
                                                        ? "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                                        : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                                }>
                                                Germination
                                            </li>
                                        </Link>
                                        <Link href="/contact">
                                            <li
                                                className={`${
                                                    route.includes("checkout")
                                                        ? "unselectable opacity-50 pointer-events-none"
                                                        : "cursor-pointer scale-item"
                                                }
                        ${
                            isMobileNavVisible
                                ? "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                        }`}>
                                                Contact
                                            </li>
                                        </Link>
                                        <li
                                            onClick={() => {
                                                props.setVisibleScreen({ input: "viewCart" });
                                            }}
                                            className={
                                                isMobileNavVisible
                                                    ? "font-extrabold text-2xl p-2 slowish hover:bg-red-navMobile cursor-pointer scale-item"
                                                    : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                            }>
                                            <CartIcon {...props} />
                                        </li>
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
