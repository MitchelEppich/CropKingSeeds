// lib imports
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import {
  faAngleLeft,
  faAngleRight,
  faCartArrowDown,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import Router from "next/router";
const isClient = typeof document !== "undefined";

// custom imports
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ProductPreview from "../components/sections/checkout/productPreview";
import Coupon from "../components/sections/checkout/coupon";
import Shipping from "../components/sections/checkout/shipping";
import ShippingMethod from "../components/sections/checkout/shipping/shippingMethod";
import BillingAddress from "../components/sections/checkout/billing/";
import Payment from "../components/sections/checkout/payment";
import Checkout from "../components/sections/checkout";
import Confirmation from "../components/sections/checkout/confirmation";
import FreeShippingNotify from "../components/sections/checkout/freeShippingNotify";
import ErrorHandler from "../components/sections/checkout/errorHandler";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import { payBitcoin } from "../store/utilities/bitcoinPaymentWindow";

class Index extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(actions.toggleStepsCheckout(0));
    await store.dispatch(actions.getBlockedIps());
    await store.dispatch(actions.getBlockedZips());
    await store.dispatch(actions.getTaxes());
    await store.dispatch(actions.getProcessors());
    return {};
  }
  constructor(props) {
    super(props);
    this.updateShippingMethod();
  }

  componentDidMount() {
    initGA();
    logPageView();
  }
  componentDidUpdate(prevProps) {
    let error = ErrorHandler(this.props);
    if (JSON.stringify(error) != JSON.stringify(this.props.checkout.error)) {
      this.props.setError({ value: error });
    }

    // Update if price has changed
    if (
      (this.props.cart.price != prevProps.cart.price ||
        this.props.checkout.shippingMethods == null ||
        this.props.checkout.shippingMethods.length == 0) &&
      this.props.misc.stepsCheckout < 2
    ) {
      this.updateShippingMethod();
    }
  }

  render() {
    let _orderDetails = this.props.checkout.orderDetails;
    let _stepsCheckout = this.props.misc.stepsCheckout;
    let errors = { ...this.props.checkout.error };
    delete errors[105]; // This error is for checking if user confirms information, not for this section
    let _error = Object.keys(errors).length != 0;

    let itemsCart = Object.keys(this.props.cart.items);

    return (
      <Layout {...this.props}>
        {typeof document !== "undefined" ? (
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  generateBreadcrumbMarkup(this.props.router.asPath)
                )
              }}
            />
          </Head>
        ) : null}
        <div className="text-center w-full pt-12 sm:pt-4 bg-white relative">
          <h1 className="text-4xl font-black text-black sm:text-3xl">
            {_stepsCheckout == 5 ? "Confirmation" : "Checkout Preview"}
          </h1>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            try {
              if (!isClient) return;

              if (this.props.checkout.processing && _stepsCheckout == 3) return;

              if (
                _stepsCheckout == 4 &&
                _orderDetails.payment != null &&
                _orderDetails.payment.method != null &&
                _orderDetails.payment.method.value == "Bitcoin"
              ) {
                payBitcoin(
                  _orderDetails,
                  _orderDetails.payment.orderId.value.toString()
                );
              } else if (_stepsCheckout == 3) {
                try {
                  this.props.toggleProcessing(true);

                  let ip = "0.0.0.0";
                  if (
                    _orderDetails != null &&
                    _orderDetails.details &&
                    _orderDetails.details.ip != null &&
                    _orderDetails.details.ip.value != null
                  )
                    ip = _orderDetails.details.ip.value;
                  if (!this.props.checkout.blockedIps.includes(ip)) {
                    try {
                      this.props
                        .acquireOrderId({ orderDetails: _orderDetails })
                        .then(res => {
                          let orderId = res.toString();

                          if (_orderDetails.payment.method.value == "Bitcoin") {
                            payBitcoin(_orderDetails, orderId);
                          }
                          try {
                            this.props
                              .processOrder({
                                idevAffiliate: this.props.checkout.idevCookie,
                                orderId,
                                cart: this.props.cart,
                                orderDetails: {
                                  ..._orderDetails,
                                  currency: this.props.checkout
                                    .availableCurrency,
                                  shippingTypeDescription: this.props.checkout.shippingMethods.find(
                                    a => {
                                      return (
                                        a.tag ==
                                        _orderDetails.shipping.shippingDetail
                                          .value
                                      );
                                    }
                                  ).description
                                },
                                shippingMethods: this.props.checkout
                                  .shippingMethods
                              })
                              .then(res => {
                                // this.props.toggleStepsCheckout(_stepsCheckout + 1);
                                Router.push("/confirmation");
                                this.props.toggleProcessing(false);
                              });
                          } catch (e) {
                            this.props.setSotiError({
                              value: "SYSTEM ERROR C-100"
                            });
                            console.log("Failed to post order...");
                          }
                        });
                    } catch (e) {
                      this.props.setSotiError({
                        value: "SYSTEM ERROR C-101"
                      });
                      console.log("Failed to acquire order id...");
                    }
                  } else {
                    // Purge the store.
                    this.props.purgeCart();
                    this.props.purgeOrderDetails({
                      orderDetails: _orderDetails
                    });
                    this.props.toggleProcessing(false);
                    // Redirect to 404

                    Router.push("/404");
                  }
                } catch (e) {
                  this.props.setSotiError({
                    value: "SYSTEM ERROR C-102"
                  });
                  console.log("Failed to acquire ip...");
                }
              } else {
                _stepsCheckout < 4
                  ? (() => {
                      this.props.toggleStepsCheckout(_stepsCheckout + 1);
                      if (
                        _orderDetails.details != null &&
                        _orderDetails.details.saveForLater &&
                        _stepsCheckout == 2
                      ) {
                        this.props.storeOrderDetails({
                          orderDetails: _orderDetails
                        });
                      }
                    })()
                  : null;
              }
            } catch (e) {
              this.props.setSotiError({
                value: "SYSTEM ERROR C-103"
              });
              console.log("Failed to submit order...");
            }
          }}
        >
          <div
            style={{
              background: "#f5f5f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              overflow: "hidden"
            }}
            className="w-main sm:w-full mx-auto mt-12 sm:mt-4"
          >
            <Checkout {...this.props} />

            {_stepsCheckout == 0 ? (
              <div>
                <ProductPreview {...this.props} />
                <div className="w-full flex sm:flex-col-reverse justify-between md:flex-col">
                  {itemsCart.length > 0 ? (
                    <div className="justify-start sm:justify-center flex sm:mt-4">
                      <div
                        onClick={() => {
                          this.props.purgeCart();
                        }}
                        className="inline-flex font-bold text-grey-light text-lg p-2 items-center rounded cursor-pointer hover:text-grey scale-item text-xl "
                      >
                        <p className="ml-8 justify-start flex">Clear Cart</p>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="ml-2 items-center flex"
                        />
                      </div>
                    </div>
                  ) : null}
                  <Link prefetch href="/shop">
                    <p className="font-bold text-xl sm:justify-center cursor-pointer scale-item text-red-light p-2 mr-6 items-center flex ml-8 sm:justify-end sm:mr-0 md:justify-end md:mr-0 hover:text-red-darker">
                      {itemsCart.length > 0
                        ? "Continue Shopping"
                        : "Go to Shop Page"}
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        className="ml-2 fa-lg"
                      />
                    </p>
                  </Link>
                </div>
                <hr
                  style={{ border: "1px solid rgb(228, 228, 228)" }}
                  className="my-2"
                />
                <Coupon {...this.props} />
              </div>
            ) : null}

            {_stepsCheckout == 1 ? (
              <div>
                <Shipping {...this.props} />
                <hr
                  style={{ border: "1px solid rgb(228, 228, 228)" }}
                  className="my-6"
                />
                <ShippingMethod {...this.props} />
              </div>
            ) : null}

            {_stepsCheckout == 2 ? <BillingAddress {...this.props} /> : null}

            {_stepsCheckout == 3 ? <Payment {...this.props} /> : null}
          </div>

          <div className="w-main mx-auto">
            <hr
              style={{
                border: "1px solid rgba(228, 228, 228, 0.3)"
              }}
              className=""
            />
            {_stepsCheckout != 5 ? (
              <div className="w-full inline-flex justify-between">
                <div
                  onClick={() => {
                    _stepsCheckout > 0
                      ? this.props.toggleStepsCheckout(_stepsCheckout - 1)
                      : null;
                  }}
                  className={`w-200 p-2 text-left cursor-pointer flex items-center hover:text-red ${
                    _stepsCheckout == 0 || _stepsCheckout >= 4
                      ? "opacity-0 unselectable pointer-events-none"
                      : ""
                  }`}
                >
                  {_stepsCheckout != 0 ? (
                    <span
                      className={`flex items-center font-extrabold text-red-light hover:text-red-light text-2xl uppercase`}
                    >
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="fa-2x mr-4"
                      />
                      Back
                    </span>
                  ) : null}
                </div>

                <span
                  style={{
                    height: "40px",
                    borderLeft: "2px solid #ececec"
                  }}
                />
                <div
                  className={`w-200 p-2 text-right justify-end cursor-pointer flex items-center hover:text-red ${
                    _stepsCheckout >= 3
                      ? "opacity-0 unselectable pointer-events-none"
                      : _error
                      ? "opacity-50 unselectable pointer-events-none"
                      : ""
                  }`}
                >
                  {_stepsCheckout != 4 ? (
                    <button
                      name="nextCheckout"
                      className="flex items-center font-extrabold text-red-light hover:text-red-light text-2xl uppercase"
                      type="submit"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Next
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="fa-2x ml-4"
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </Layout>
    );
  }

  updateShippingMethod() {
    let _orderDetails = this.props.checkout.orderDetails;
    if (
      _orderDetails.shipping != null &&
      _orderDetails.shipping.country != null &&
      _orderDetails.shipping.state != null
    ) {
      this.props.setShippingMethods({
        country: _orderDetails.shipping.country.value,
        state: _orderDetails.shipping.state.value,
        cartTotal: this.props.cart.price,
        freeShippingThreshold: this.props.checkout.freeShippingThreshold,
        orderDetails: _orderDetails
      });
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setContext: input => dispatch(actions.setContext(input)),
    toggleStepsCheckout: input => dispatch(actions.toggleStepsCheckout(input)),
    modifyOrderDetails: input => dispatch(actions.modifyOrderDetails(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setOrderDetails: input => dispatch(actions.setOrderDetails(input)),
    getBitcoinData: input => dispatch(actions.getBitcoinData(input)),
    toggleShowDifferentAddress: input =>
      dispatch(actions.toggleShowDifferentAddress(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    processOrder: input => dispatch(actions.processOrder(input)),
    setShippingMethods: input => dispatch(actions.setShippingMethods(input)),
    setError: input => dispatch(actions.setError(input)),
    applyCoupon: input => dispatch(actions.applyCoupon(input)),
    getBlockedIps: () => dispatch(actions.getBlockedIps()),
    getBlockedZips: () => dispatch(actions.getBlockedZips()),
    clearCart: () => dispatch(actions.clearCart()),
    purgeCart: () => dispatch(actions.purgeCart()),
    getTaxes: () => dispatch(actions.getTaxes()),
    purgeOrderDetails: input => dispatch(actions.purgeOrderDetails(input)),
    storeOrderDetails: input => dispatch(actions.storeOrderDetails(input)),
    loadLocalProfile: input => dispatch(actions.loadLocalProfile(input)),
    purgeLocalProfile: input => dispatch(actions.purgeLocalProfile(input)),
    clearOrderDetails: input => dispatch(actions.clearOrderDetails(input)),
    setSotiError: input => dispatch(actions.setSotiError(input)),
    checkForLocalProfile: input =>
      dispatch(actions.checkForLocalProfile(input)),
    acquireOrderId: input => dispatch(actions.acquireOrderId(input)),
    toggleProcessing: processing =>
      dispatch(actions.toggleProcessing(processing)),
    getProcessors: () => dispatch(actions.getProcessors())
  }; // setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input)),
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
