import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../../../static/data";

const PaymentReview = props => {
  let currency = props.checkout.viewCurrency;

  let pageGroup = "payment";
  let _orderDetails = props.checkout.orderDetails;
  let _cart = props.cart;

  let couponActive, ccFeeActive;

  let { productList, itemQuantity } = buildProductList(_cart.items);
  if (
    _orderDetails[pageGroup] == null ||
    _orderDetails[pageGroup].updateRequested ||
    (_orderDetails[pageGroup].productList != null &&
      _orderDetails[pageGroup].productList.value != productList)
  ) {
    let _payment = _orderDetails[pageGroup];

    // Payment Information
    let cartTotal = _cart.price;
    let { tax, provTax, taxType } =
      _orderDetails.billing.country.value.toLowerCase() == "canada"
        ? (() => {
            let _province = props.misc.taxes[_orderDetails.billing.state.value];
            let _type = _province.type;
            let _tax = _province.gst;
            let _provTax = 0;
            if (_type != "GST") _provTax = _province[_type.toLowerCase()];
            return { tax: _tax, provTax: _provTax, taxType: _type };
          })()
        : { tax: 0, provTax: 0, taxType: "" }; // Still need to get tax
    let creditTax =
      _orderDetails[pageGroup] != null &&
      _orderDetails[pageGroup].method != null &&
      _orderDetails[pageGroup].method.value == "Credit Card"
        ? 0.1
        : 0;
    let cumTax = tax + provTax;
    let shippingFee = _orderDetails.shipping.shippingCost.value;
    let taxFee = (cartTotal + shippingFee) * cumTax;
    let creditFee = (cartTotal + shippingFee + taxFee) * creditTax;

    // Discount
    let discount = _cart.discount || 0;
    let discountAmt;
    let _coupon = _orderDetails.coupon;
    if (_coupon != null) {
      if (_coupon.type == "%") {
        discountAmt = `${_coupon.amount.toFixed(2)}%`;
      } else if (_coupon.type == "$") {
        discountAmt = currency.symbol;
      }
    }

    // Set Currency
    let currency = props.checkout.viewCurrency.label.toUpperCase();

    let orderTotal = creditFee + shippingFee + cartTotal + taxFee;

    let _method =
      _payment == null ? undefined : _orderDetails[pageGroup].method;

    _orderDetails[pageGroup] = {
      ..._orderDetails.payment,
      updateRequested: false,
      creditFee: { value: creditFee, tag: "CC_Charge" },
      shippingFee: { value: shippingFee, tag: "Shipping" },
      taxFee,
      cumTax,
      creditTax,
      discount,
      discountAmt,
      tax: { value: tax, tag: "tax" },
      provTax: { value: provTax, tag: "prov_tax" },
      taxType: { value: taxType, tag: "prov_tax_type" },
      cartTotal: { value: cartTotal, tag: "Order_Amt" },
      orderTotal: { value: orderTotal, tag: "Total" },
      productList: { value: productList, tag: "productlist" },
      itemQuantity: { value: itemQuantity, tag: "Order_Qty" },
      currency: { value: currency, tag: "Currency" },
      method: _method,
      isPrepaid:
        _payment == null
          ? {
              value: "No",
              tag: "Prepaidcard"
            }
          : _orderDetails[pageGroup].isPrepaid
    };

    if (_method == null)
      props.setVisibleScreen({
        clearAll: true
      });

    _orderDetails[pageGroup].updatedAt = _orderDetails.payment.updatedAt;

    props.setOrderDetails({ orderDetails: _orderDetails });
  } else {
    couponActive =
      _orderDetails.coupon != null && _orderDetails.coupon.code != null;
    ccFeeActive =
      _orderDetails[pageGroup].creditFee != null &&
      _orderDetails[pageGroup].creditFee.value != 0;
  }

  let box = {
    // border: "2px solid rgb(239, 239, 239)",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "rgba(29, 29, 29, 0.12) 0px 2px 9px"
  };
  let titleBox = {
    borderBottom: "2px solid #505050",
    color: "#fff",
    background: "rgb(239, 87, 83)",
    padding: "6px"
  };

  return (
    <div className="w-full flex justify-end mb-6 lg:flex-col md:flex-col sm:flex-col">
      <div
        style={box}
        className="w-1/3 lg:w-full lg:mt-2 sm:w-full sm:mt-2 md:w-full md:mt-2 mx-0 bg-white"
      >
        <h3 style={titleBox}>Shipping Address</h3>
        <div className="">
          {/* NAME */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.shipping != null ? (
              <span>
                {_orderDetails.shipping.firstName.value}{" "}
                {_orderDetails.shipping.lastName.value}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* ADDRESS */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.shipping != null ? (
              <span>{_orderDetails.shipping.address.value}</span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* APARTMENT */}
          {_orderDetails.shipping.apartment != null ? (
            <p className="p-1 pt-2 pl-3 bg-white capitalize">
              <span>{_orderDetails.shipping.apartment.value}</span>
            </p>
          ) : null}
          {/* CITY */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.shipping != null ? (
              <span>
                {_orderDetails.shipping.city.value}
                {_orderDetails.shipping.state
                  ? ", " + _orderDetails.shipping.state.value
                  : null}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* COUNTRY */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.shipping != null
              ? _orderDetails.shipping.country.value
              : "Not Defined"}
          </p>
          {/* POSTALZIP */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.shipping != null
              ? _orderDetails.shipping.postalZip.value
              : "Not Defined"}
          </p>
          {/* PHONE */}
          <p className="pr-1 pt-2 pl-3 bg-white">
            <span className="py-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg mr-2 pt-1" />
            </span>
            {_orderDetails.shipping != null &&
            _orderDetails.shipping.phone != null
              ? _orderDetails.shipping.phone.value
              : "Not Defined"}
          </p>
          {/* EMAIL */}
          <p className="p-1 py-2 pl-3 bg-white">
            <span className="py-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg mr-2 pt-1" />
            </span>
            {_orderDetails.shipping != null && _orderDetails.shipping.phone ? (
              <span>{_orderDetails.shipping.email.value}</span>
            ) : (
              "Not Defined"
            )}
          </p>
        </div>
      </div>
      <div
        style={box}
        className="w-1/3 lg:w-full lg:mt-2 sm:w-full sm:mt-2 md:w-full md:mt-2 xxl:mx-4 xl:mx-2 bg-white"
      >
        <h3 style={titleBox}>Billing Details</h3>
        <div className="">
          {/* NAME */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.billing != null ? (
              <span>
                {_orderDetails.billing.firstName.value}{" "}
                {_orderDetails.billing.lastName.value}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* ADDRESS */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.billing != null ? (
              <span>{_orderDetails.billing.address.value}</span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* APARTMENT */}
          {_orderDetails.billing.apartment != null ? (
            <p className="p-1 pt-2 pl-3 bg-white capitalize">
              <span>{_orderDetails.billing.apartment.value}</span>
            </p>
          ) : null}
          {/* CITY */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.billing != null ? (
              <span>
                {_orderDetails.billing.city.value}
                {_orderDetails.billing.state
                  ? ", " + _orderDetails.billing.state.value
                  : null}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>
          {/* COUNTRY */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.billing != null
              ? _orderDetails.billing.country.value
              : "Not Defined"}
          </p>
          {/* POSTALZIP */}
          <p className="p-1 pt-2 pl-3 bg-white capitalize">
            {_orderDetails.billing != null
              ? _orderDetails.billing.postalZip.value
              : "Not Defined"}
          </p>
          {/* PHONE */}
          <p className="pr-1 pt-2 pl-3 bg-white">
            <span className="py-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg pt-1 mr-2" />
            </span>
            {_orderDetails.billing != null &&
            _orderDetails.billing.phone != null
              ? _orderDetails.billing.phone.value
              : "Not Defined"}
          </p>
          {/* EMAIL */}
          <p className="p-1 py-2 pl-3 bg-white">
            <span className="py-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg pt-1 mr-2" />
            </span>
            {_orderDetails.billing != null ? (
              <span>{_orderDetails.billing.email.value}</span>
            ) : (
              "Not Defined"
            )}
          </p>
        </div>
      </div>
      <div
        style={box}
        className="w-1/3 relative lg:w-full lg:mt-2 sm:w-full sm:h-full sm:mt-2 md:w-full md:mt-2 mx-0 bg-white"
      >
        <h3 style={titleBox}>Payment Information</h3>
        <div className="w-full">
          {/* SUBTOTAL */}
          <div className="w-full inline-flex bg-smoke-grey">
            <div className="w-3/5 pl-3">
              <p className="mt-1 p-1">Subtotal:</p>
            </div>
            <div className="w-2/5 text-left">
              <p className="mt-1 p-1 pl-4">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert *
                      (_orderDetails[pageGroup].cartTotal.value +
                        _orderDetails[pageGroup].discount)
                    ).toFixed(2)}`
                  : ""}
              </p>
            </div>
          </div>
          {/* SHIPPING */}
          <div className="w-full inline-flex">
            <div className="w-3/5 pl-3">
              <p className="p-1">Shipping: </p>
            </div>
            <div className="w-2/5 text-left">
              <p className="pl-4 p-1">
                {_orderDetails[pageGroup].shippingFee.value != 0
                  ? currency != null
                    ? `${currency.symbol}${(
                        currency.convert *
                        _orderDetails[pageGroup].shippingFee.value
                      ).toFixed(2)}`
                    : ""
                  : "FREE"}
              </p>
            </div>
          </div>
          {/* CREDIT CARD */}
          {_orderDetails[pageGroup].creditFee.value != 0 ? (
            <div className="w-full inline-flex bg-smoke-grey">
              <div className="w-3/5 pl-3">
                <p className="p-1">
                  Credit C. Tax ({_orderDetails[pageGroup].creditTax * 100}%):{" "}
                </p>
              </div>
              <div className="w-2/5 text-left">
                <p className="pl-4 p-1">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert *
                        _orderDetails[pageGroup].creditFee.value
                      ).toFixed(2)}`
                    : ""}
                </p>
              </div>
            </div>
          ) : null}
          {/* DISCOUNT */}
          {_orderDetails.coupon != null && _orderDetails.coupon.code != null ? (
            <div
              className={` ${
                _orderDetails[pageGroup].creditFee.value != 0
                  ? "bg-white"
                  : "bg-smoke-grey"
              } w-full inline-flex `}
            >
              <div className="w-3/5 pl-3">
                <p className="p-1 ">
                  Discount ({parseInt(_orderDetails[pageGroup].discountAmt)}
                  %):
                </p>
              </div>
              <div className="w-2/5 text-left">
                <p className="pl-4 p-1">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert * _orderDetails[pageGroup].discount
                      ).toFixed(2)}`
                    : ""}
                </p>
              </div>
            </div>
          ) : null}
          {/* TAX */}
          <div
            className={` ${
              (!_orderDetails[pageGroup].creditFee.value != 0 &&
                !_orderDetails[pageGroup].discountAmt != null) ||
              _orderDetails[pageGroup].creditFee.value != 0 ||
              _orderDetails[pageGroup].discountAmt != null
                ? "bg-white"
                : "bg-smoke-grey"
            } w-full inline-flex `}
          >
            <div className="w-3/5 pl-3">
              <p className="p-1">
                Tax ({(_orderDetails[pageGroup].cumTax * 100).toFixed()}%):
              </p>
            </div>
            <div className="w-2/5 text-left">
              <p className="pl-4 p-1">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails[pageGroup].taxFee
                    ).toFixed(2)}`
                  : ""}
              </p>
            </div>
          </div>
          {/* TOTAL */}
          <div className="absolute pin-b pin-x py-1 w-full inline-flex border-t-2 border-smoke-grey md:relative sm:relative lg:relative md:mt-4 sm:mt-4 lg:mt-4">
            <div className="w-3/5 pl-3">
              <p className="font-bold text-grey-light text-lg uppercase p-1">
                Total:
              </p>
            </div>
            <div className="w-2/5 text-left">
              <p className="pl-4 p-1 font-bold text-lg">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert *
                      _orderDetails[pageGroup].orderTotal.value
                    ).toFixed(2)}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;

let buildProductList = items => {
  let productList = [];
  let itemQuantity = 0;
  for (let key of Object.keys(items)) {
    let item = items[key];
    let product = item.product;
    let _name = `${product.sotiId}${item.amount} - ${product.name} ${
      product.genetic
    } Cannabis Seeds (${item.amount} Seeds)`;

    itemQuantity += item.quantity;

    productList.push(
      `${_name} x ${item.quantity} x ${item.per * item.quantity}`
    );
  }

  return { productList: productList.toString(), itemQuantity };
};
