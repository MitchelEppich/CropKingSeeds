/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/
//lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
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

import registerServiceWorker from "../registerServiceWorker";
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
  componentDidMount() {
    // registerServiceWorker();
    // iframe = document.createElement("iframe");
    // iframe.id = "iframe";
    // iframe.style.cssText = "display: none";
    // iframe.sandbox = "allow-same-origin";
    // document.body.appendChild(iframe);
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
    this.recallSession();
    this.props.getFeaturedNews();
    this.props.getTaxes();
    this.props.getStrains().then(strains => {
      if (!this.state.isClient) return;
      let url = Router.asPath.slice(1);
      if (url && url.length != 0) {
        let qr;
        if (url.includes("product/")) {
          qr = url.slice("product/".length);
          if (qr) {
            // Find product with name
            let index = strains.findIndex(a => {
              return (
                a.name
                  .toLowerCase()
                  .split(" ")
                  .join("-") == qr
              );
            });
            if (index < 0) {
              Router.push("/_error", "/404/product/" + qr);
            }
            this.props
              .getStrain({
                sotiId: strains[index].sotiId,
                strains
              })
              .then(res => {
                this.props.setCurrentProduct({ product: res }).then(() => {
                  let product = this.props.viewProduct.currentProduct;
                  let _index = 0;
                  while (product.price[_index] == -1) {
                    _index++;
                  }
                  this.props.quickAddToCartQty(_index);
                });
              });
          }
        }
      }
    });
    this.props.getFeaturedList({
      limit: 5
    });

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
    this.props.getExchangeRates();
  }

  componentWillUnmount() {
    sessionStorage.setItem("showNewCustomerPopUp", 3);
  }

  render() {
    return this.props.misc.strains != null ? (
      <React.Fragment>
        {this.props.viewProduct.currentProduct &&
        this.props.viewProduct.imageZoom ? (
          <ImageZoom {...this.props} />
        ) : null}
        <div id="top" className="w-full bg-off-white noscriptpage">
          {this.props.misc.ageVerification == null ||
          !this.props.misc.ageVerification.verified ? (
            this.props.misc.ageVerification != null ? (
              <AgeVerification {...this.props} />
            ) : (
              <div className="h-screen w-full">
                <Loader {...this.props} />
              </div>
            )
          ) : (
            <React.Fragment>
              <Header {...this.props} />

              {this.state.showNewCustomerPopUp ? (
                <PopUpBanner {...this.props} />
              ) : null}

              {/* {this.props.misc.hoverId == null ||
              ["md", "lg", "xl", "xxl"].includes(this.props.misc.mediaSize) ? (
                <SearchBar {...this.props} />
              ) : null} */}

              <div className="pt-32 md:pt-48">
                <div
                  className={window.innerHeight < 800 ? "hidden" : "relative"}
                >
                  <ShareButtons {...this.props} />
                </div>
                <div
                  id="tawkto"
                  className="pulse sm:hidden md:hidden lg:hidden fixed z-40 w-20 h-16 bg-red-darker mb-16 pin-b pin-l text-white text-center text-lg pt-3 pr-3 rounded-tr-full rounded-br-full cursor-pointer hover:bg-red-dark scale-item shadow-md"
                  onClick={() => {
                    Tawk_API.toggle();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faComments}
                    className="ml-2 fa-2x cursor-pointer"
                  />
                  {/* <h3>CHAT</h3> */}
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
                  className="bg-white relative z-30 px-4 py-4 w-full xxl:w-1300 xl:w-900 lg:w-700 md:w-main mx-auto shadow-md"
                >
                  {this.props.misc.strains != null ? (
                    this.props.children
                  ) : (
                    <div className="h-screen w-full">
                      <Loader {...this.props} />
                    </div>
                  )}
                </div>
              </div>
              <StrainsMenu {...this.props} />
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
          )}
        </div>
      </React.Fragment>
    ) : (
      <div className="h-screen w-full noscriptpage">
        <Loader isClient={this.state.isClient} {...this.props} />
      </div>
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
    this.props.recallGPUMode();
    let ageVerify = await this.props.recallAgeVerification();
    let cart = (await this.props.recallCart()) || {};

    this.props
      .recallOrderDetails({
        items: cart.items,
        max: this.props.cart.maxPerPackage
      })
      .then(res => {
        if (Object.keys(res).length != 0) {
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
    getFeaturedList: input => dispatch(actions.getFeaturedList(input)),
    isRepeatCustomer: input => dispatch(actions.isRepeatCustomer(input)),
    getExchangeRates: () => dispatch(actions.getExchangeRates()),
    recallCart: () => dispatch(actions.recallCart()),
    getFeaturedNews: () => dispatch(actions.getFeaturedNews()),
    recallAgeVerification: () => dispatch(actions.recallAgeVerification()),
    recallOrderDetails: input => dispatch(actions.recallOrderDetails(input)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
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
    recallGPUMode: () => dispatch(actions.recallGPUMode())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
