import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faDollarSign, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const menu = props => {
    let menuStyle = {
        // backgroundImage: "url(../static/img/red.png)",
    };

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
                    style={{
                        marginTop: "5px",
                        height: "34px"
                    }}
                    onClick={() => {
                        props.setCurrency({
                            currency: {
                                label: country,
                                ...props.checkout.availableCurrency[country]
                            }
                        });
                        props.setVisibleScreen({
                            input: "viewCurrency"
                        });
                    }}>
                    <div className="w-12  p-2 items-center flex justify-center">
                        <p>
                            <img src={`../../static/img/currency/currency_${country}.png`} className="w-10" />
                        </p>
                    </div>
                    <p className="px-6 pt-2 p-1 uppercase text-center font-extrabold text-lg ">
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
              WebkitTransition: "all 0.2s ease-in-out",
              width: "122px",
              height: "43px"
          }
        : {
              transform: "translateX(-122px)",
              transition: "all 0.2s ease-in-out",
              WebkitTransition: "all 0.2s ease-in-out",
              width: "122px",
              height: `${8 + (availableCurrencyLength - 1) * 39}px`
          };

    showMobileNav = isMobileNavVisible
        ? {
              height: "320px",
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
    let phoneNumberPosition = ["md", "lg"].includes(props.misc.mediaSize)
        ? { transform: "translateX(310px)", backgroundColor: "#F9F9F9" }
        : { transform: "translateX(0)", backgroundColor: "#F9F9F9" };
    if (props.misc.mediaSize == "sm") {
        phoneNumberPosition = { right: "-310px", backgroundColor: "#F9F9F9" };
    }

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
            <div className="w-full h-12 inline-flex mt-6 sm:mt-6 sm:mb-6">
                <div className="w-1/2 relative">
                    <div
                        style={viewCurrency}
                        className="fixed h-100 overflow-hidden pin-l bg-white shadow-md rounded cursor-pointer mt-10 -mr-1">
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
                        className="absolute pin-l shadow-md my-auto rounded -mr-2 inline-flex cursor-pointer scale-item">
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
                        className="no-underline text-grey absolute inline-flex pin-r shadow-md my-auto rounded -ml-4">
                        <div className="w-12 rounded bg-yellow-dark p-2  items-center flex justify-center">
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="" />
                            </p>
                        </div>
                        <p className="pl-8 pr-6 p-2 uppercase font-extrabold text-lg">+1-844-CROP-KING (276-7546)</p>
                    </a>
                </div>
            </div>
            <div style={{ background: "rgba(93, 9, 9, 0.71)" }} className="w-full h-12">
                <div
                    style={{ marginTop: "3px" }}
                    className="w-container sm:w-full md:w-full lg:w-full mx-auto text-center relative">
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
                        <div className="w-1/4 sm:w-full md:w-full lg:w-full flex justify-center pl-2">
                            <div
                                className="absolute"
                                style={{
                                    width: "128px",
                                    height: "128px",
                                    borderRadius: "50%",
                                    background: "#600706",
                                    padding: "6px",
                                    marginTop: "-54px",
                                    position: "fixed",
                                    zIndex: "55",
                                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 10px"
                                }}
                            />
                            <img
                                style={{
                                    width: "125px",
                                    padding: "0px",
                                    marginTop: "-69px",
                                    position: "fixed",
                                    zIndex: "55"
                                }}
                                src="../static/img/cks-logo-header.png"
                                onClick={() => console.log(props)}
                                className="scale-item absolute cursor-pointer"
                            />
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
                                    <li className="font-extrabold text-2xl px-2 cursor-pointer scale-item">
                                        <div
                                            onClick={() => {
                                                props.setVisibleScreen({ input: "viewCart" });
                                            }}
                                            className="text-center cursor-pointer mt-1 text-white">
                                            <div className="">
                                                <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />

                                                <span
                                                    style={{
                                                        height: "28px",
                                                        width: "28px",
                                                        borderRadius: "50%",
                                                        background: "#ffca0f",
                                                        position: "absolute",
                                                        marginTop: "-10px",
                                                        color: "#404040",
                                                        fontSize: "16px",
                                                        textAlign: "center",
                                                        paddingTop: "6px",
                                                        marginTop: "-14px",
                                                        marginLeft: "-5px"
                                                    }}>
                                                    {Object.keys(props.cart.items).length}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* MOBILE MENU */}
                            <div className={"justify-end w-full xl:hidden xxl:hidden"}>
                                <div
                                    onClick={() => {
                                        props.setVisibleScreen({ input: "showMobileNav" });
                                    }}
                                    className="text-white p-2 h-12 ml-auto mr-4 w-12 flex justify-end bg-semi-transparent cursor-pointer">
                                    <FontAwesomeIcon icon={faBars} className="fa-2x" />
                                </div>
                                <div style={showMobileNav} className="w-full fixed bg-red-dark z-50">
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
                                                className={
                                                    isMobileNavVisible
                                                        ? "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish"
                                                        : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                                }>
                                                Contact
                                            </li>
                                        </Link>
                                        <li
                                            className={
                                                isMobileNavVisible
                                                    ? "font-extrabold text-2xl p-2 slowish hover:bg-red-navMobile cursor-pointer scale-item"
                                                    : "font-extrabold text-xl pt-3 p-2 my-1 hover:bg-red-navMobile cursor-pointer slowish hidden"
                                            }>
                                            <div
                                                onClick={() => {
                                                    props.setVisibleScreen({ input: "viewCart" });
                                                }}
                                                className="text-center cursor-pointer mt-1 text-white">
                                                <div className="">
                                                    <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />

                                                    <span
                                                        style={{
                                                            height: "28px",
                                                            width: "28px",
                                                            borderRadius: "50%",
                                                            background: "#ffca0f",
                                                            position: "absolute",
                                                            marginTop: "-10px",
                                                            color: "#404040",
                                                            fontSize: "16px",
                                                            textAlign: "center",
                                                            paddingTop: "6px",
                                                            marginTop: "-14px",
                                                            marginLeft: "-5px"
                                                        }}>
                                                        {Object.keys(props.cart.items).length}
                                                    </span>
                                                </div>
                                            </div>
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
