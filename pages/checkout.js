/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import Link from "next/link";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../components/partials/header";
import BannerCarousel from "../components/sections/bannerCarousel";
import GenePreview from "../components/sections/genePreview";
import Post from "../components/sections/post";
import Footer from "../components/partials/footer";
import ProductPreview from "../components/sections/checkout/productPreview";
import Coupon from "../components/sections/checkout/coupon";
import Shipping from "../components/sections/checkout/shipping";
import ShippingMethod from "../components/sections/checkout/shipping/shippingMethod";
import BillingAddress from "../components/sections/checkout/billing/";
import Payment from "../components/sections/checkout/payment";
import Checkout from "../components/sections/checkout";
import Confirmation from "../components/sections/checkout/confirmation";
import FreeShippingNotify from "../components/sections/checkout/freeShippingNotify";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
  faCartPlus,
  faCartArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Router from "next/router";

import ErrorHandler from "../components/sections/checkout/errorHandler";

class Index extends Component {
  componentDidMount() {
    this.props.toggleStepsCheckout(0);
    this.updateShippingMethod();

    this.props.getBlockedIps();
    this.props.getBlockedZips();
  }

  componentDidUpdate(prevProps) {
    let error = ErrorHandler(this.props);
    if (JSON.stringify(error) != JSON.stringify(this.props.checkout.error)) {
      this.props.setError({ value: error });
    }

    // Update if price has changed
    if (this.props.cart.price != prevProps.cart.price) {
      this.updateShippingMethod();
    }
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

  payBitcoin = (orderDetails, orderId) => {
    let _billing = { ...orderDetails.billing };
    let _payment = { ...orderDetails.payment };
    let name = _billing.fullName.value.split(" ");

    let fOrderId = [orderId.slice(0, 4), "-", orderId.slice(4), "-CKS"].join(
      ""
    );

    this.open(
      "POST",
      "https://www.coinpayments.net/index.php",
      {
        cmd: "_pay",
        reset: "1",
        invoice: fOrderId,
        custom: "",
        merchant: "8c1706a0ba5ad9024ba30eb29b92563e",
        first_name: name[0],
        last_name: name[1],
        email: _billing.email.value,
        address1: _billing.address.value,
        address2: _billing.apartment != null ? _billing.apartment.value : "",
        city: _billing.city.value,
        state: _billing.state.value,
        zip: _billing.postalZip.value,
        country: _billing.country.value.toUpperCase(),
        phone: _billing.phone.value,
        currency: _payment.currency.value,
        amountf: _payment.cartTotal.value,
        item_name: fOrderId,
        quantity: _payment.itemQuantity.value,
        allow_quantity: "0",
        shippingf: _payment.shippingFee.value,
        taxf: _payment.taxFee,
        ipn_url: "",
        success_url: "",
        cancel_url: ""
      },
      "_blank"
    );
  };

  render() {
    let _orderDetails = this.props.checkout.orderDetails;
    let _stepsCheckout = this.props.misc.stepsCheckout;
    let _error = this.props.checkout.error;

    let itemsCart = Object.keys(this.props.cart.items);

    return (
      <Layout>
        <div className="text-center w-full pt-12 bg-white relative">
          <h1 className="text-4xl font-black text-black">Checkout Preview</h1>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();

            // this.props.toggleStepsCheckout(1);
            if (
              _stepsCheckout == 4 &&
              _orderDetails.payment.method.value == "Bitcoin"
            ) {
              this.payBitcoin(
                _orderDetails,
                _orderDetails.payment.orderId.value.toString()
              );
            } else if (_stepsCheckout == 3) {
              if (
                !this.props.checkout.blockedIps.includes(
                  _orderDetails.details.ip.value
                )
              ) {
                this.props
                  .acquireOrderId({ orderDetails: _orderDetails })
                  .then(res => {
                    let orderId = res.toString();
                    if (_orderDetails.payment.method.value == "Bitcoin") {
                      this.payBitcoin(_orderDetails, orderId);
                    }
                    this.props
                      .processOrder({
                        orderId,
                        orderDetails: {
                          ..._orderDetails,
                          currency: this.props.checkout.availableCurrency
                        }
                      })
                      .then(res => {
                        console.log(res);
                        this.props.toggleStepsCheckout(_stepsCheckout + 1);
                      });
                  });
              } else {
                // Purge the store.
                this.props.purgeCart();
                this.props.purgeOrderDetails({
                  orderDetails: _orderDetails
                });

                // Redirect to 404
                const isClient = typeof document !== "undefined";
                if (!isClient) return;
                Router.push("/404");
              }
            } else {
              _stepsCheckout < 4
                ? this.props.toggleStepsCheckout(_stepsCheckout + 1)
                : null;
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
            className="w-main sm:w-full mx-auto mt-12"
          >
            <Checkout {...this.props} />

            {_stepsCheckout == 0 ? (
              <div>
                <ProductPreview {...this.props} />
                <div className="w-full flex justify-end">
                  <Link href="/shop">
                    <p className="font-extrabold text-xl cursor-pointer scale-item text-red-light p-2 mr-6 items-center flex">
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
                <FreeShippingNotify {...this.props} />
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

            {_stepsCheckout == 4 ? <Confirmation {...this.props} /> : null}
          </div>

          <div className="w-main mx-auto">
            <hr
              style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
              className=""
            />

            <div className="w-full inline-flex justify-between">
              <div
                onClick={() => {
                  _stepsCheckout > 0
                    ? this.props.toggleStepsCheckout(_stepsCheckout - 1)
                    : null;
                }}
                className="w-200 p-2 text-left cursor-pointer flex items-center hover:text-red"
              >
                {_stepsCheckout != 0 ? (
                  <span className="flex items-center font-extrabold text-red-light hover:text-red-light text-2xl uppercase">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="fa-2x mr-4"
                    />
                    Back
                  </span>
                ) : null}
              </div>

              <span
                style={{ height: "40px", borderLeft: "2px solid #ececec" }}
              />
              <div
                className={`w-200 p-2 text-right justify-end cursor-pointer flex items-center hover:text-red ${
                  _stepsCheckout >= 3
                    ? "opacity-0 unselectable pointer-events-none"
                    : error
                    ? "opacity-50 unselectable pointer-events-none"
                    : ""
                }`}
              >
                {_stepsCheckout != 4 ? (
                  <button
                    name="nextCheckout"
                    className="flex items-center font-extrabold text-red-light hover:text-red-light text-2xl uppercase"
                    type="submit"
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
          </div>
        </form>
      </Layout>
    );
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
    purgeOrderDetails: input => dispatch(actions.purgeOrderDetails(input)),
    acquireOrderId: input => dispatch(actions.acquireOrderId(input))
  }; // setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input)),
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
