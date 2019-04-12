/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/
//lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCaretUp,
  faAngleUp,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import axios from "axios";
import { detect } from "detect-browser";
//custom
import "../scss/universal.scss";
import "../scss/home.scss";
import "../scss/shop.scss";
import "../scss/product.scss";
import "../scss/germination.scss";
import "../scss/contact.scss";
import "../scss/checkout.scss";
import "../scss/about.scss";
import "../scss/affiliates.scss";
import "../scss/articles.scss";
import "../scss/cms.scss";
import "../scss/xxl.scss";
import "../scss/xl.scss";
import "../scss/lg.scss";
import "../scss/md.scss";
import "../scss/sm.scss";
const _browser = detect();
import actions from "../store/actions";
import Cart from "../components/sections/cart";
import Header from "../components/partials/header";
import Footer from "../components/partials/footer";
import ShareButtons from "../components/sections/shareButtons";
import AgeVerification from "../components/sections/ageVerification";
import Loader from "../components/sections/loader";
import SearchBar from "../components/partials/header/searchBar";
import ImageZoom from "../components/sections/productPage/imageZoom";
import StrainsMenu from "../components/sections/productPage/strainsMenu";
import PopUpBanner from "../components/sections/popup";
import HeaderMessage from "../components/partials/header/headerMessage";
import generateSchemaMarkup from "../scripts/generateSchemaMarkup";
import registerServiceWorker from "../registerServiceWorker";
import Router from "next/router";
const dev = process.env.NODE_ENV !== "production";
const isClient = typeof document !== "undefined";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCustomerPopUp: false,
      iframe: null,
      isClient: typeof document !== "undefined",
      times: [],
      fps: 0
    };
  }
  componentWillMount() {
    this.props.getStrains();
    this.props.getFeaturedNews();
    this.props.getFeaturedList({
      limit: 6
    });
  }

  componentDidMount() {
    var evt = document.createEvent("Event");
    evt.initEvent("load", false, false);
    window.dispatchEvent(evt);
    this.recallSession();
    this.props.getCookie(document.cookie, "idev");
    this.props.getDailyMessage().then(res => {
      if (
        this.props.misc.dailyMessage == null ||
        this.props.misc.dailyMessageShown
      )
        return;
      setTimeout(
        () =>
          this.props.toggleHeaderMessage({
            value: true,
            time: 7000,
            shown: true
          }),
        2000
      );
    });
    registerServiceWorker();
    // iframe = document.createElement("iframe");
    // iframe.id = "iframe";
    // iframe.style.cssText = "display: none";
    // iframe.sandbox = "allow-same-origin";
    // document.body.appendChild(iframe);

    if (window.top !== window.self)
      window.top.location.replace(window.self.location.href);
    // Check if new customer
    if (sessionStorage.getItem("showNewCustomerPopUp") == null) {
      sessionStorage.setItem("showNewCustomerPopUp", 0);
    }
    if (this.state.isClient) {
      if (
        this.props.misc.newCustomer &&
        sessionStorage.getItem("showNewCustomerPopUp") == "0" &&
        this.props.misc.ageVerification != null &&
        this.props.misc.ageVerification.verified == true
      )
        sessionStorage.setItem("showNewCustomerPopUp", 1);

      if (sessionStorage.getItem("showNewCustomerPopUp") == "1") {
        setTimeout(() => {
          sessionStorage.setItem("showNewCustomerPopUp", 2);
        }, 3000);
      }

      if (sessionStorage.getItem("showNewCustomerPopUp") == "2") {
        this.state.showNewCustomerPopUp = true;
      } else this.state.showNewCustomerPopUp = false;
    }
    this.props.getTaxes();
    if (this.props.checkout.viewCurrency == null)
      this.props.setCurrency({
        currency: {
          label: "usd",
          ...this.props.checkout.availableCurrency["usd"]
        }
      });

    let mediaSize = this.setMediaSize();
    if (["sm", "md", "lg"].includes(mediaSize)) {
      this.props.toggleShowFilters(false);
    }
    window.addEventListener("resize", () => {
      this.setMediaSize();
    });
    if (dev) {
      window.addEventListener("keypress", e => {
        if (e.shiftKey && e.code === "KeyP") {
          console.log(this.props);
        }
      });
    }

    this.props.getExchangeRates();
  }

  componentWillUnmount() {
    sessionStorage.setItem("showNewCustomerPopUp", 3);
  }

  render() {
    if (!isClient) return null;
    let title =
      this.props.router.asPath == "/"
        ? "Buy Feminized & Autoflowering Cannabis Seeds - Crop King Seeds"
        : this.props.router.asPath.slice(1, 2).toUpperCase() +
          this.props.router.asPath.slice(2) +
          " - Crop King Seeds";
    if (this.props.router.asPath.indexOf("?") > 0) {
      let url = this.props.router.asPath.replace(/\//g, "").split("?");

      let filters = url[1].split("&").map((word, index) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
      });
      title =
        url[0].slice(0, 1).toUpperCase() +
        url[0].slice(1) +
        " - " +
        filters.join(" | ");
      title += " - Crop King Seeds";
    }
    return (
      <React.Fragment>
        {this.state.isClient &&
        this.props.router.asPath.includes("product") &&
        this.props.viewProduct.currentProduct ? (
          <Head>
            <title key="titlePage">
              {this.props.viewProduct.currentProduct.name +
                " - Crop King Seeds"}
            </title>
            <meta name="robots" content="index, follow" />
            <meta
              id="og-title"
              property="og:title"
              content={this.props.viewProduct.currentProduct.name}
            />
            <meta
              id="og-url"
              property="og:url"
              content={
                "https://www.cropkingseeds.com" + this.props.router.asPath
              }
            />
            <meta id="og-locale" property="og:locale" content="en_US" />
            <meta
              id="og-description"
              property="og:description"
              content={this.props.viewProduct.currentProduct.description}
            />
            <meta
              name="title"
              key="title"
              content={this.props.viewProduct.currentProduct.name}
            />
            <meta
              name="description"
              key="description"
              content={this.props.viewProduct.currentProduct.description}
            />
            <meta
              id="og-image"
              property="og:image"
              content={
                "http://dcfgweqx7od72.cloudfront.net" +
                this.props.viewProduct.currentProduct.images[0]
              }
            />
          </Head>
        ) : (
          <Head>
            <title key="titlePage">{title}</title>

            <meta property="og:title" content={title} />
            <meta property="og:type" content="The type" />
            <meta
              property="og:url"
              content={
                "https://www.cropkingseeds.com" + this.props.router.asPath
              }
            />
            <meta
              id="og-description"
              property="og:description"
              content={
                this.props.misc.metaDescriptions[
                  this.props.router.asPath.slice(1).toLowerCase()
                ]
                  ? this.props.misc.metaDescriptions[
                      this.props.router.asPath.slice(1).toLowerCase()
                    ]
                  : "Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size."
              }
            />
            <meta name="title" key="title" content={title} />
            <meta
              name="description"
              key="desc"
              content={
                this.props.misc.metaDescriptions[
                  this.props.router.asPath.slice(1).toLowerCase()
                ]
                  ? this.props.misc.metaDescriptions[
                      this.props.router.asPath.slice(1).toLowerCase()
                    ]
                  : "Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size."
              }
            />
            <meta name="robots" content="index, follow" />
          </Head>
        )}

        {this.props.viewProduct.currentProduct &&
        this.props.viewProduct.imageZoom ? (
          <ImageZoom {...this.props} />
        ) : null}
        <div id="top" className="w-full bg-off-white noscriptpage">
          {/* {this.props.misc.ageVerification == null ||
          !this.props.misc.ageVerification.verified ? (
            this.props.misc.ageVerification != null ? (
              <AgeVerification {...this.props} />
            ) : (
              <div className="h-screen w-full">
                <Loader {...this.props} />
              </div>
            )
          ) : ( */}
          <React.Fragment>
            <Header {...this.props} />
            <HeaderMessage {...this.props} />
            {this.state.showNewCustomerPopUp ? (
              <PopUpBanner {...this.props} />
            ) : null}

            <div className="pt-32">
              <div
                className={
                  this.state.isClient && window.innerHeight < 800
                    ? "hidden"
                    : "relative"
                }
              >
                <ShareButtons {...this.props} />
              </div>
              <div
                id="tawkto"
                className="pulse font-bold fixed z-40 w-20 h-16 bg-red-darker sm:mb-0 mb-16 pin-b pin-l text-white text-center text-lg pt-3 pr-3 rounded-tr-full rounded-br-full cursor-pointer hover:bg-red-dark scale-item shadow-md"
                onClick={() => {
                  Tawk_API.toggle();
                }}
              >
                CHAT
                <FontAwesomeIcon
                  icon={faComments}
                  className="pb-1 fa-lg cursor-pointer"
                />
              </div>
              <div
                style={{
                  marginLeft:
                    this.props.viewProduct.showStrainsMenu &&
                    ["md", "lg", "xl"].includes(this.props.misc.mediaSize)
                      ? "250px"
                      : "auto",
                  transition: "all .4s ease"
                }}
                className="bg-white relative z-10 px-4 py-4 w-full xxl:w-1300 xl:w-900 lg:w-700 md:w-main mx-auto shadow-md"
              >
                {this.props.children}
              </div>
            </div>
            {!this.props.router.asPath.includes("shop") &&
            !(
              this.props.router.asPath.includes("checkout") &&
              window.innerWidth < 500
            ) ? (
              <StrainsMenu {...this.props} />
            ) : null}
            <AnchorLink
              aria-label="toTop"
              className="items-center flex"
              href="#top"
            >
              <div
                id="jumpToTop"
                className="fixed z-999 w-12 pb-2 mb-12 mr-4 h-12 bg-red-darker pin-b pin-r text-white text-center text-lg justify-center cursor-pointer hover:bg-red-dark scale-item items-center flex rounded shadow-md"
              >
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className="fa-2x cursor-pointer flex justify-center mt-1 mx-auto"
                />
              </div>
            </AnchorLink>
            <Cart {...this.props} />
            <Footer {...this.props} />
          </React.Fragment>
          {/* )} */}
        </div>
      </React.Fragment>
    );
  }

  setMediaSize = () => {
    let mediaSizes = {
      sm: { min: 100, max: 479 },
      md: { min: 480, max: 767 },
      lg: { min: 768, max: 991 },
      xl: { min: 992, max: 1367 },
      xxl: { min: 1368, max: 999999999 }
    };
    for (let mediaSize of Object.keys(mediaSizes)) {
      let _mediaSizeDim = mediaSizes[mediaSize];
      let _width = window.innerWidth;
      if (
        _width ==
          Math.max(_mediaSizeDim.min, Math.min(_width, _mediaSizeDim.max)) &&
        this.props.misc.mediaSize != mediaSize
      ) {
        if (["sm", "md"].includes(mediaSize)) {
          this.props.toggleLowGPUMode(false);
          this.props.toggleShowFilters(false);
          this.props.setMediaSize({ mediaSize: mediaSize });
        } else {
          this.props.toggleShowFilters(true);
          this.props.setMediaSize({ mediaSize: mediaSize });
        }
        return mediaSize;
      }
    }
  };

  recallSession = async () => {
    // this.props.recallGPUMode();
    let ageVerify = await this.props.recallAgeVerification();
    let cart = (await this.props.recallCart()) || {};

    this.props
      .recallOrderDetails({
        items: cart.items,
        max: this.props.cart.maxPerPackage
      })
      .then(res => {
        if (
          Object.keys(res).length != 0 &&
          res.details != null &&
          res.details.ip != null
        ) {
          this.props.isRepeatCustomer({ ip: res.details.ip.value });
          return;
        }
        let browser = _browser != null ? _browser.name : "unknown";
        let device = getPlatformType();
        let _orderDetails = this.props.checkout.orderDetails;

        axios.get("https://api.ipify.org?format=json").then(res => {
          let ip;
          if (res == null) ip = "-1.-1.-1.-1";
          else ip = res.data.ip;

          this.props.isRepeatCustomer({ ip });

          _orderDetails = {
            ..._orderDetails,
            details: {
              browser: { value: browser, tag: "Browser" },
              device: { value: device, tag: "Device" },
              ip: { value: ip, tag: "CardHolderIp" }
            }
          };

          this.props.modifyOrderDetails({
            orderDetails: _orderDetails,
            requestUpdateOfGroup: { group: "payment", value: true }
          });
        });
      });
  };
}

function getPlatformType() {
  if (navigator.userAgent.match(/mobile/i)) {
    return "Mobile";
  } else if (navigator.userAgent.match(/iPad|Android|Touch/i)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    getStrains: () => dispatch(actions.getStrains()),
    getStrain: input => dispatch(actions.getStrain(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    setCurrency: input => dispatch(actions.setCurrency(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setAgeVerification: input => dispatch(actions.setAgeVerification(input)),
    setMediaSize: input => dispatch(actions.setMediaSize(input)),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    setEmail: input => dispatch(actions.setEmail(input)),
    subscribeToNewsletter: input =>
      dispatch(actions.subscribeToNewsletter(input)),
    toggleShowFilters: isFilterVisible =>
      dispatch(actions.toggleShowFilters(isFilterVisible)),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    clearFilters: () => dispatch(actions.clearFilters()),
    getFeaturedList: input => dispatch(actions.getFeaturedList(input)),
    isRepeatCustomer: input => dispatch(actions.isRepeatCustomer(input)),
    getExchangeRates: () => dispatch(actions.getExchangeRates()),
    recallCart: () => dispatch(actions.recallCart()),
    getFeaturedNews: () => dispatch(actions.getFeaturedNews()),
    recallAgeVerification: () => dispatch(actions.recallAgeVerification()),
    recallOrderDetails: input => dispatch(actions.recallOrderDetails(input)),
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    modifyOrderDetails: input => dispatch(actions.modifyOrderDetails(input)),
    setSearch: value => dispatch(actions.setSearch(value)),
    setSuggestions: suggestions =>
      dispatch(actions.setSuggestions(suggestions)),
    setHighlightedSuggestion: input =>
      dispatch(actions.setHighlightedSuggestion(input)),
    toggleImageZoom: isImageZoomed =>
      dispatch(actions.toggleImageZoom(isImageZoomed)),
    setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
    toggleStrainsMenu: isStrainsMenuVisible =>
      dispatch(actions.toggleStrainsMenu(isStrainsMenuVisible)),
    purgeCart: () => dispatch(actions.purgeCart()),
    getTaxes: () => dispatch(actions.getTaxes()),
    setCompareSearchValue: input =>
      dispatch(actions.setCompareSearchValue(input)),
    calculateFpsAvg: fpsArr => dispatch(actions.calculateFpsAvg(fpsArr)),
    disableFpsCalc: () => dispatch(actions.disableFpsCalc()),
    toggleLowGPUMode: lowGpuMode =>
      dispatch(actions.toggleLowGPUMode(lowGpuMode)),
    toggleCartMenu: input => dispatch(actions.toggleCartMenu(input)),
    toggleHeaderMessage: input => dispatch(actions.toggleHeaderMessage(input)),
    getDailyMessage: () => dispatch(actions.getDailyMessage()),
    recallGPUMode: () => dispatch(actions.recallGPUMode()),
    toggleMute: () => dispatch(actions.toggleMute()),
    getCookie: (cookie, name) => dispatch(actions.getCookie(cookie, name))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
