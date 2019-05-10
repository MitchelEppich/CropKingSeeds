// lib imports
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import {
  faAngleLeft,
  faAngleRight,
  faCartArrowDown,
  faQuestionCircle,
  faTrash,
  faExclamation,
  faExclamationCircle,
  faHourglassHalf
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

// custom imports
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import Router from "next/router";
const isClient = typeof document !== "undefined";

import { payBitcoin } from "../store/utilities/bitcoinPaymentWindow";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
    window.scroll(0, 0);
  }

  componentDidUpdate() {
    if (this.props.checkout.affiliateUrl != null) {
      this.props.deleteAffiliateLink();
    }
  }

  componentWillUnmount() {
    this.props.deleteAffiliateLink();
    // this.props.purgeCart();
    // this.props.purgeOrderDetails({
    //   orderDetails: this.props.checkout.orderDetails
    // });
  }

  render() {
    let _orderDetails = this.props.checkout.orderConfirmed;
    let _cart = this.props.checkout.cartConfirmed;

    if (!isClient) return null;

    if (_cart.items == null) {
      Router.push("/");
      return null;
    }

    let _orderId;
    _orderId =
      _orderDetails.payment == null ? null : _orderDetails.payment.orderId;
    let orderId = _orderId == null ? null : _orderId.value;
    let fOrderId =
      _orderId == null
        ? "NO ORDER ID"
        : [orderId.slice(0, 4), "-", orderId.slice(4), "-CKS"].join("");

    let currency = this.props.checkout.viewCurrency;

    let products = Object.keys(_cart.items);
    let _ccr = this.props.checkout.ccResponse;

    let showProduct = () => {
      let arr = [];
      let _items = _cart.items;
      for (let item of Object.keys(_items)) {
        let _item = _items[item];
        arr.push(
          <div
            key={arr}
            className="w-full inline-flex my-1 shadow-md h-full bg-white items-center flex p-2"
          >
            {/* <div className="w-32 p-2 font-bold text-lg items-center flex">
            <img src={_item.product.packageImg} className="h-32" />
          </div> */}
            <div className="w-3/5">
              <div className="p-2 font-bold text-lg sm:text-base items-center md:text-left sm:text-left lg:text-left flex">
                <Link
                  href="/product"
                  as={
                    "/product/" +
                    _item.product.name.toLowerCase().replace(/ /g, "-")
                  }
                >
                  <a
                    aria-label={"view-" + _item.product.name}
                    className="cursor-pointer hover:text-red-light"
                    target="_blank"
                  >
                    {_item.product.name} - {_item.amount} Seeds
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-1/5 p-2 font-bold text-lg sm:text-base items-center justify-center flex">
              {_item.quantity}
            </div>
            <div className="w-1/5 p-2 font-bold text-lg sm:text-base items-center justify-center flex">
              {currency != null
                ? `${currency.symbol}${(currency.convert * _item.price).toFixed(
                    2
                  )}`
                : ""}
            </div>
          </div>
        );
      }
      return arr;
    };

    let CreditCardStatusCondition =
      _ccr != null && _ccr.status.toLowerCase() != "approved";

    let sectionTitle = {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px"
    };

    return (
      <Layout {...this.props}>
        <div className="w-full mt-6 text-center">
          <div>
            {this.props.checkout != null &&
            this.props.checkout.affiliateUrl != null ? (
              <img
                alt="cks confirmation"
                hidden
                src={this.props.checkout.affiliateUrl}
              />
            ) : null}
            <img
              alt={this.props.misc.CFURL + "/logos/cks-confirmation.png"}
              src={this.props.misc.CFURL + "/logos/cks-confirmation.png"}
              className="text-center"
              width="200px"
            />
            <h1 className="text-3/5xl font-bold mt-4 mb-4 text-black">
              {CreditCardStatusCondition ? "Important:" : "Thank You!"}
            </h1>

            <h4 className="font-bold uppercase text-red-light p-2 text-2xl">
              Your order{" "}
              {CreditCardStatusCondition ? (
                <span>
                  has been<span className="underline ml-2">Declined</span>
                </span>
              ) : (() => {
                  let _method =
                    _orderDetails.payment == null
                      ? null
                      : _orderDetails.payment.method;
                  return _method == null ? null : _method.value;
                })() == "Bitcoin" ? (
                <span>
                  is<span className="underline ml-2">Pending</span>
                </span>
              ) : (
                <span>
                  has been<span className="underline ml-2">Approved</span>
                </span>
              )}
            </h4>
            <p className="text-grey font-bold text-xl">
              Please follow payment instructions below.
            </p>
          </div>
          <div className="xxl:w-container mx-auto pt-12 w-main sm:w-95p">
            <div className="bg-white shadow-md">
              <div
                style={sectionTitle}
                className="w-full inline-flex text-lg p-2 text-white sm:flex-col md:flex-col lg:flex-col bg-red-light p-2 mb-1"
              >
                <div className="w-1/2 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center">
                  <p className="text-lg font-bold uppercase">
                    Order <span className="">#{fOrderId}</span>
                  </p>
                </div>
                <div className="w-1/2 p-2 text-right sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center">
                  <p className="text-lg font-bold uppercase">
                    Order made on:{" "}
                    <span className="">{moment().format("LL")}</span>{" "}
                  </p>
                </div>
              </div>
              <div className="w-full inline-flex text-lg bg-white p-2 pb-6 lg:flex-col sm:flex-col md:flex-col">
                <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:border-b-2 lg:border-b-2 md:border-b-2 border-grey-lightest sm:py-6 md:py-6 lg:py-6">
                  <p className="font-bold">Payment Method:</p>
                  <p>
                    {_orderDetails.payment == null ||
                    _orderDetails.payment.method == null
                      ? "NO METHOD"
                      : _orderDetails.payment.method.value}
                  </p>
                </div>
                <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:border-b-2 lg:border-b-2 md:border-b-2 border-grey-lightest sm:py-6 md:py-6 lg:py-6">
                  <p className="font-bold">Shipping Destination:</p>
                  <p>
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.firstName == null
                      ? "NO NAME"
                      : _orderDetails.shipping.firstName.value +
                        " " +
                        _orderDetails.shipping.lastName.value}
                  </p>
                  <p>
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.address == null
                      ? "NO ADDRESS"
                      : _orderDetails.shipping.address.value}
                    ,{" "}
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.apartment == null
                      ? null
                      : _orderDetails.shipping.apartment.value}{" "}
                  </p>
                  <p>
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.postalZip == null
                      ? "NO POSTAL/ZIP"
                      : _orderDetails.shipping.postalZip.value}
                  </p>
                  <p>
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.city == null
                      ? "NO CITY"
                      : _orderDetails.shipping.city.value}
                    ,{" "}
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.country == null
                      ? "NO COUNTRY"
                      : _orderDetails.shipping.country.value}
                  </p>
                </div>
                <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:py-6 md:py-6 lg:py-6">
                  <p className="font-bold">Shipping Type:</p>
                  <p>
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.shippingDetail == null
                      ? "NO SHIPPING DETAILS"
                      : _orderDetails.shipping.shippingDetail.value}
                  </p>

                  <p className="text-base text-red-light">
                    *
                    {_orderDetails.shipping == null ||
                    _orderDetails.shipping.shippingDetail == null ||
                    Object.keys(this.props.checkout.shippingMethods).length == 0
                      ? "NO SHIPPING METHOD"
                      : this.props.checkout.shippingMethods.find(a => {
                          return (
                            a.tag == _orderDetails.shipping.shippingDetail.value
                          );
                        }).description}
                  </p>
                </div>
              </div>
            </div>

            {(() => {
              let _method =
                _orderDetails.payment == null
                  ? null
                  : _orderDetails.payment.method;
              let method = _method == null ? null : _method.value;
              switch (method) {
                case "Cash":
                  return (
                    <div className="mt-10 bg-white shadow-md">
                      <div
                        style={sectionTitle}
                        className="bg-red-light p-2 mb-1"
                      >
                        <p className="font-bold uppercase text-center text-white p-1 text-lg">
                          Cash Payment Instructions
                        </p>
                      </div>
                      <div className="">
                        <p className="w-main mx-auto pt-4">
                          To ensure that your cash order is successfully
                          recieved please document your order number (
                          <strong>{fOrderId}</strong>) on a piece of paper,
                          along side the requested amount in applicable
                          currency:
                        </p>
                        <p className="font-bold text-center p-2 mt-4 text-xl">
                          In-Organic Marketing
                          <br />
                          112 East 6th Ave
                          <br />
                          Vancouver, BC
                          <br />
                          V5T 1J5
                          <br />
                          Canada
                        </p>
                        <p className="mt-4 p-2 text-center pb-4">
                          It is recommended that you wrap any cash within your
                          mail (in newspaper, charcoal paper or tin foil) to
                          ensure privacy.
                        </p>
                      </div>
                    </div>
                  );
                case "Interac E Transfer":
                  return (
                    <div className="mt-10 bg-white shadow-md">
                      <div
                        style={sectionTitle}
                        className="bg-red-light p-2 mb-1"
                      >
                        <p className="font-bold uppercase text-center text-white p-1 text-lg">
                          Interac E-Transfer Instructions
                        </p>
                      </div>
                      <div className="mt-6">
                        <FontAwesomeIcon
                          icon={faHourglassHalf}
                          className="fa-5x opacity-25 text-grey-light"
                        />
                        <p className="font-bold text-2xl uppercase text-red-light p-4">
                          You are almost there...
                        </p>
                        <p className="w-main mx-auto pt-4 font-bold uppercase text-xl">
                          To complete your order please initiate an interac
                          e-transfer:
                        </p>
                        <div className="inline-flex mt-4">
                          <div className="w-1/2 text-right p-2">
                            <p>Recipient email:</p>
                            <p>Recipient name:</p>
                            <p>Message (Order Number):</p>
                            <p>Security question:</p>
                            <p>Security answer:</p>
                          </div>
                          <div className="w-1/2 text-left p-2">
                            <p>
                              <strong>organicmarketing11@gmail.com</strong>
                            </p>
                            <p>
                              <strong>Vancouver</strong>
                            </p>
                            <p>
                              <strong>{fOrderId}</strong>
                            </p>
                            <p>
                              <strong>What is your favorite color</strong>
                            </p>
                            <p>
                              <strong>green1</strong>
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 p-2 text-center pb-4 mx-auto w-main">
                          <span className="font-bold uppercase">Important</span>
                          : Interac E-Transfers may take a few hours to be
                          approved. Once a payment is successfully recieved we
                          will ship your order on the next applicable business
                          day.
                          <br />
                          To ensure your order is shipped as soon as possible,
                          please call us to confirm the transfer.
                        </p>
                      </div>
                    </div>
                  );
                case "Bitcoin":
                  return (
                    <div className="mt-10 bg-white shadow-md">
                      <div
                        style={sectionTitle}
                        className="bg-red-light p-2 mb-1"
                      >
                        <p className="font-bold uppercase text-center text-white p-1 text-lg">
                          Bitcoin Instructions
                        </p>
                      </div>
                      <div className="">
                        <p className="w-main mx-auto py-4">
                          To complete your payment with Bitcoin, a new tab has
                          been opened in which you can proceed to finalize your
                          payment. If you are unable to finalize the payment
                          please call our Customer Support at our{" "}
                          <span className="underline">toll-free</span> number +1
                          (844) 276 - 7546.
                          <br />
                          <br />
                          <span
                            className="cursor-pointer text-red-dark font-bold hover:text-red-light scale-item"
                            onClick={() => payBitcoin(_orderDetails, orderId)}
                          >
                            Did the payment window not show? Click here to
                            retry.
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                case "MoneyGram":
                  return (
                    <div className="mt-10 bg-white shadow-md">
                      <div
                        style={sectionTitle}
                        className="bg-red-light p-2 mb-1"
                      >
                        <p className="font-bold uppercase text-center text-white p-1 text-lg">
                          MoneyGram Instructions
                        </p>
                      </div>
                      <div className="mt-6">
                        <FontAwesomeIcon
                          icon={faHourglassHalf}
                          className="fa-5x opacity-25 text-grey-light"
                        />
                        <p className="font-bold text-2xl uppercase text-red-light p-4">
                          You are almost there...
                        </p>
                        <p className="mx-auto w-main text-left font-bold uppercase mt-6 text-xl">
                          The person you are sending the MoneyGram to is:{" "}
                        </p>
                        <div className="w-main mx-auto py-4 leading-normal text-left">
                          <div className="justify-start flex">
                            <div className="text-left flex-col w-500">
                              <div className="inline-flex w-full">
                                <span className="text-left">
                                  Name of Receiver:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.name
                                      : "ERROR"}
                                  </b>
                                  <br />
                                  Street:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.address
                                      : "ERROR"}
                                  </b>
                                  <br />
                                  City:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.city +
                                        ", " +
                                        this.props.checkout.moneyGram.province
                                      : "ERROR"}
                                  </b>
                                  <br />
                                  Postal/Zip Code:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.postal
                                      : "ERROR"}
                                  </b>
                                  <br />
                                  Country:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.country
                                      : "ERROR"}
                                  </b>
                                  <br /> Phone Number:{" "}
                                  <b>
                                    {this.props.checkout.moneyGram != null
                                      ? this.props.checkout.moneyGram.phone
                                      : "ERROR"}
                                  </b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <p className="mt-4 text-left">
                              You are best to go to a retail MoneyGram location
                              near you and pay cash in US dollars, as they will{" "}
                              <span className="underline">
                                release the funds immediately.
                              </span>
                            </p>
                            <p className="font-bold my-4 text-left">
                              After sending the payment, please provide us with
                              the following information so that we can claim the
                              payment:
                            </p>
                          </div>
                          <div className="text-left text-base">
                            <p>
                              Name of Sender:{" "}
                              <span className="capitalize font-bold">
                                Insert Your Sender Name
                              </span>
                            </p>
                            <p>
                              Payment Sent to:{" "}
                              <span className="font-bold">
                                {this.props.checkout.moneyGram != null
                                  ? this.props.checkout.moneyGram.name
                                  : "ERROR"}
                              </span>
                            </p>
                            <p>
                              Street:{" "}
                              <span className="font-bold">
                                {this.props.checkout.moneyGram != null
                                  ? this.props.checkout.moneyGram.address
                                  : "ERROR"}
                              </span>
                            </p>
                            <p>
                              City:{" "}
                              <span className="font-bold">
                                {this.props.checkout.moneyGram != null
                                  ? this.props.checkout.moneyGram.city +
                                    ", " +
                                    this.props.checkout.moneyGram.province
                                  : "ERROR"}
                              </span>
                            </p>
                            <p>
                              Postal/Zip Code:{" "}
                              <span className="font-bold">
                                {this.props.checkout.moneyGram != null
                                  ? this.props.checkout.moneyGram.postal
                                  : "ERROR"}
                              </span>
                            </p>
                            <p>
                              Country:{" "}
                              <span className="font-bold">
                                {this.props.checkout.moneyGram != null
                                  ? this.props.checkout.moneyGram.country
                                  : "ERROR"}
                              </span>
                            </p>
                            <p>
                              Amount:{" "}
                              <span className="font-bold">
                                {_orderDetails.payment == null ||
                                _orderDetails.payment.orderTotal == null
                                  ? "ERROR"
                                  : _orderDetails.payment.orderTotal.value.toFixed(
                                      2
                                    )}
                              </span>
                            </p>
                            <p>
                              Reference #:{" "}
                              <span className="font-bold">
                                Insert Your Reference Number
                              </span>
                            </p>
                          </div>
                          <br />
                          <p className="font-bold uppercase text-center text-red-light text-xl">
                            We will then process and ship your order within 48
                            hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  if (_ccr != null) {
                    return (
                      <div className="mt-10 bg-white shadow-md">
                        <div
                          style={sectionTitle}
                          className="bg-red-light p-2 mb-1"
                        >
                          <p className="font-bold uppercase text-center text-white p-1 text-lg">
                            {CreditCardStatusCondition
                              ? "Oops, Something Went Wrong..."
                              : "Credit Card Instructions"}
                          </p>
                        </div>
                        <p className="w-main mx-auto pt-4" />
                        <div className="text-center p-2 mt-4 text-xl">
                          {_ccr.status.toLowerCase() == "declined" ? (
                            <div className="mb-6">
                              <FontAwesomeIcon
                                icon={faExclamationCircle}
                                className="fa-4x text-grey-light opacity-25"
                              />
                              <p className="font-bold text-2xl uppercase text-red-light p-4">
                                Your Credit Card was Declined
                              </p>
                              <p className="p-2 py-4 font-bold">
                                Please call our Customer Support at our{" "}
                                <span className="underline">toll-free</span>{" "}
                                number +1 (844) 276 - 7546.
                              </p>
                            </div>
                          ) : _ccr.status == "" ? (
                            <div className="my-6">
                              <FontAwesomeIcon
                                icon={faExclamationCircle}
                                className="fa-6x text-grey-light opacity-25"
                              />
                              <p className="font-bold text-2xl uppercase text-red-light p-4">
                                Order too Large
                              </p>
                              <p className="text-xl font-bold text-grey-light">
                                We are unable to process your large order.
                              </p>
                              <p className="p-2 text-xl py-4 font-bold">
                                Please call our Customer Support at our{" "}
                                <span className="underline">toll-free</span>{" "}
                                number +1 (844) 276 - 7546.
                              </p>
                              <p className="text-base text-center font-bold py-3">
                                Once your payment has been received we will ship
                                your order on the next applicable business day.
                              </p>
                            </div>
                          ) : (
                            <div>
                              <div className="w-2/3 mx-auto text-center p-2 my-6 text-lg">
                                <FontAwesomeIcon
                                  icon={faHourglassHalf}
                                  className="fa-5x opacity-25 text-grey-light"
                                />
                                <p className="font-bold text-2xl uppercase text-red-light p-4">
                                  Your credit card was approved!
                                </p>
                                <p className="text-xl font-bold text-grey-light">
                                  Please allow some time for your payment to
                                  process, once your payment has been received
                                  we will ship your order on the next applicable
                                  business day.
                                </p>
                                <p className="w-main mx-auto mt-4 p-2 text-center pb-4">
                                  <span className="font-bold uppercase">
                                    Important:
                                  </span>{" "}
                                  The displayed order total may vary depending
                                  on fluctuations in conversion rates and bank
                                  processing fees. All charges will show up as '
                                  {_ccr == null
                                    ? "NO DESCRIPTOR INFORMED"
                                    : _ccr.descriptor}
                                  ' on your credit card statement once
                                  successfully processed.
                                  <br />
                                  If you have any concerns or issues please
                                  contact our customer service representatives
                                  (+1 (844) 276 - 7546) for help.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="mt-10 bg-white shadow-md">
                        <div
                          style={sectionTitle}
                          className="bg-red-light p-2 mb-1"
                        >
                          <p className="font-bold uppercase text-center text-white p-1 text-lg">
                            Ooops... something went wrong!
                          </p>
                        </div>
                        <div className="mt-6">
                          <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className="fa-5x opacity-25 text-grey-light"
                          />
                          <p className="font-bold text-2xl uppercase text-red-light p-4">
                            Error
                          </p>
                          <p className="p-2 text-xl py-4 font-bold">
                            Please call our Customer Support at our{" "}
                            <span className="underline">toll-free</span> number
                            +1 (844) 276 - 7546.
                          </p>
                        </div>
                      </div>
                    );
                  }
              }
            })()}
            <div>
              <div
                style={sectionTitle}
                className="w-full inline-flex mt-8 bg-red-light text-white font-bold p-1"
              >
                <div className="w-3/5 px-4 p-2 uppercase text-left font-bold text-lg">
                  Product
                </div>
                <div className="w-1/5 p-2 uppercase font-bold text-lg">Qty</div>
                <div className="w-1/5 p-2 uppercase font-bold text-lg">
                  Price
                </div>
              </div>
              <div className="w-full">{showProduct()}</div>
            </div>
            <div className="inline-flex justify-end flex w-full mt-8 text-lg mb-4 xl:flex-col-reverse lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse">
              <div className="xxl:w-1/2 xl:w-full w-full md:w-full inline-flex text-lg sm:flex-col md:flex-col xxl:border-r-2 border-grey-lightest lg:mt-4 lg:pt-4 md:pt-4 md:mt-4 xl:pt-4 xl:mt-4 sm:mt-4 sm:pt-4 sm:border-t-2 md:border-t-2 lg:border-t-2 xl:border-t-2">
                <div className="w-1/4 text-right justify-start flex p-2  sm:w-full md:w-full sm:justify-center md:justify-center sm:mr-0 md:mr-0 justify-center items-center">
                  <FontAwesomeIcon icon={faQuestionCircle} className="fa-4x" />
                </div>
                <div className="w-3/4 text-left p-2 sm:w-full md:w-full sm:text-center md:text-center sm:ml-0 md:ml-0">
                  <p className="font-bold text-2xl">Need help?</p>
                  <p className="font-bold">
                    We are available to assist you 24/7.
                  </p>
                  <p>Canada: (604) 563-0291</p>
                  <p>USA: +1 (844) 276-7546</p>
                  <p>International: +1 (604) 563-0291</p>
                  <p>Email: info@cropkingseeds.com</p>
                </div>
              </div>
              <div className="w-1/2 text-right p-2 pl-6 sm:pl-0 md:pl-0 sm:w-full md:w-full lg:w-full xl:w-full">
                <div className="inline-flex w-500 xl:w-full sm:w-full md:w-full lg:w-full">
                  <div className="w-3/5 sm:text-base md:w-1/2 lg:w-4/5 xl:w-4/5 text-right">
                    <p className="p-1">Subtotal:</p>
                    <p className="p-1">Shipping:</p>
                    {_orderDetails.payment == null ||
                    _orderDetails.payment.creditFee.value != 0 ? (
                      <p className="p-1">
                        {_orderDetails.payment == null
                          ? "Credit C. Fee:"
                          : `Credit C. Fee (${_orderDetails.payment.creditTax *
                              100}%):`}
                      </p>
                    ) : null}
                    {_orderDetails.coupon != null &&
                    _orderDetails.coupon.code != null ? (
                      <p className="p-1 text-red-dark">
                        Discount ({_orderDetails.payment.discountAmt}):
                      </p>
                    ) : null}
                    <p className="p-1">
                      Tax (
                      {_orderDetails.payment == null
                        ? "NO TAX"
                        : (_orderDetails.payment.cumTax * 100).toFixed(2)}
                      %):
                    </p>
                    <p className="font-bold p-1 text-xl">Total:</p>
                  </div>
                  <div className="w-2/5 sm:text-base md:w-1/2 lg:w-1/5 xl:w-1/5  text-left sm:text-right pl-10 md:ml-2 lg:ml-2 lg:pl-5 xl:pl-8">
                    <p className="p-1">
                      {_orderDetails.payment == null
                        ? "NO SUBTOTAL"
                        : currency != null
                        ? `${currency.symbol}${(
                            currency.convert *
                            (_orderDetails.payment.cartTotal.value +
                              _orderDetails.payment.discount)
                          ).toFixed(2)}`
                        : ""}
                    </p>
                    <p className="p-1">
                      {_orderDetails.payment == null
                        ? "NO SHIPPING FEE"
                        : _orderDetails.payment.shippingFee.value != 0
                        ? currency != null
                          ? `${currency.symbol}${(
                              currency.convert *
                              _orderDetails.payment.shippingFee.value
                            ).toFixed(2)}`
                          : ""
                        : "FREE"}
                    </p>
                    {_orderDetails.payment == null ||
                    _orderDetails.payment.creditFee.value != 0 ? (
                      <p className="p-1">
                        {_orderDetails.payment == null
                          ? "NO CREDIT FEE"
                          : _orderDetails.payment.creditFee.value != 0
                          ? currency != null
                            ? `${currency.symbol}${(
                                currency.convert *
                                _orderDetails.payment.creditFee.value
                              ).toFixed(2)}`
                            : ""
                          : null}
                      </p>
                    ) : null}
                    {_orderDetails.coupon != null &&
                    _orderDetails.coupon.code != null ? (
                      <p className="p-1 text-red-dark">
                        {currency != null
                          ? `${currency.symbol}${(
                              currency.convert * _orderDetails.payment.discount
                            ).toFixed(2)}`
                          : ""}
                      </p>
                    ) : null}
                    <p className="p-1">
                      {_orderDetails.payment == null
                        ? "NO TAX FEE"
                        : currency != null
                        ? `${currency.symbol}${(
                            currency.convert * _orderDetails.payment.taxFee
                          ).toFixed(2)}`
                        : ""}
                    </p>
                    <p className="font-bold p-1 text-xl">
                      {_orderDetails.payment == null
                        ? "NO ORDER TOTAL"
                        : currency != null
                        ? `${currency.symbol}${(
                            currency.convert *
                            _orderDetails.payment.orderTotal.value
                          ).toFixed(2)}`
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
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
    processOrder: input => dispatch(actions.processOrder(input)),
    setShippingMethods: input => dispatch(actions.setShippingMethods(input)),
    setError: input => dispatch(actions.setError(input)),
    applyCoupon: input => dispatch(actions.applyCoupon(input)),
    getBlockedIps: () => dispatch(actions.getBlockedIps()),
    getBlockedZips: () => dispatch(actions.getBlockedZips()),
    clearCart: () => dispatch(actions.clearCart()),
    purgeCart: () => dispatch(actions.purgeCart()),
    deleteAffiliateLink: () => dispatch(actions.deleteAffiliateLink()),
    purgeOrderDetails: input => dispatch(actions.purgeOrderDetails(input)),
    storeOrderDetails: input => dispatch(actions.storeOrderDetails(input)),
    loadLocalProfile: input => dispatch(actions.loadLocalProfile(input)),
    purgeLocalProfile: input => dispatch(actions.purgeLocalProfile(input)),
    clearOrderDetails: input => dispatch(actions.clearOrderDetails(input)),
    checkForLocalProfile: input =>
      dispatch(actions.checkForLocalProfile(input)),
    acquireOrderId: input => dispatch(actions.acquireOrderId(input)),
    toggleProcessing: processing =>
      dispatch(actions.toggleProcessing(processing))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
