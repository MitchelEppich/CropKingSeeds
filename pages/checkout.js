/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
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
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="text-center w-full pt-8 bg-white relative">
          <h1 className="text-4xl font-bold text-black">Checkout Preview</h1>
        </div>

        <div className="w-container mx-auto pt-12 bg-white">
          <Checkout {...this.props} />
          {this.props.misc.stepsCheckout == 0 ? (
            <div>
              <ProductPreview {...this.props} />
              <hr
                style={{ border: "1px solid rgb(228, 228, 228)" }}
                className="my-6"
              />
              <Coupon {...this.props} />
            </div>
          ) : null}

          {this.props.misc.stepsCheckout == 1 ? (
            <div>
              <Shipping {...this.props} />
              <hr
                style={{ border: "1px solid rgb(228, 228, 228)" }}
                className="my-6"
              />
              <ShippingMethod {...this.props} />
            </div>
          ) : null}

          {this.props.misc.stepsCheckout == 2 ? (
            <BillingAddress {...this.props} />
          ) : null}

          {this.props.misc.stepsCheckout == 3 ? (
            <Payment {...this.props} />
          ) : null}

          {this.props.misc.stepsCheckout == 4 ? (
            <Confirmation {...this.props} />
          ) : null}
        </div>

        <div className="w-container mx-auto">
          <hr
            style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
            className=""
          />

          <div className="w-full p-2 inline-flex justify-between">
            <div
              onClick={() => {
                this.props.misc.stepsCheckout > 0
                  ? this.props.toggleStepsCheckout(
                      this.props.misc.stepsCheckout - 1
                    )
                  : null;
                console.log(this.props.misc.stepsCheckout);
              }}
              className="w-200 p-2 text-left mx-2 cursor-pointer flex items-center hover:text-red">
              {this.props.misc.stepsCheckout != 0 ? (
                <span className="flex items-center font-extrabold text-grey-light hover:text-red-dark text-2xl">
                  <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
                  Back
                </span>
              ) : null}
            </div>

            <span style={{ height: "40px", borderLeft: "2px solid #ececec" }} />

            <div
              onClick={() => {
                this.props.misc.stepsCheckout < 4
                  ? this.props.toggleStepsCheckout(
                      this.props.misc.stepsCheckout + 1
                    )
                  : null;
                console.log(this.props.misc.stepsCheckout);
              }}
              className="w-200 p-2 text-right justify-end mx-2 cursor-pointer flex items-center hover:text-red">
              {this.props.misc.stepsCheckout != 4 ? (
                <span className="flex items-center font-extrabold text-grey-light hover:text-red-dark text-2xl">
                  Next
                  <FontAwesomeIcon icon={faAngleRight} className="fa-2x ml-4" />
                </span>
              ) : null}
            </div>
          </div>
        </div>
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
    clearCart: () => dispatch(actions.clearCart())
  }; // setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input)),
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
