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

  let { productList, itemQuantity } = buildProductList(_cart.items);
  if (
    _orderDetails[pageGroup] == null ||
    _orderDetails[pageGroup].updateRequested ||
    (_orderDetails[pageGroup].productList != null &&
      _orderDetails[pageGroup].productList.value != productList)
  ) {
    // Product Information

    // Payment Information
    let cartTotal = _cart.price;
    let { tax, provTax, taxType } =
      _orderDetails.billing.country.value.toLowerCase() == "canada"
        ? (() => {
            let _province = data.provincesCA[_orderDetails.billing.state.value];
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
    let creditFee = cartTotal * creditTax;
    let cumTax = tax + provTax;
    let shippingFee = _orderDetails.shipping.shippingCost.value;
    let taxFee = cartTotal * cumTax;

    // Discount
    let _coupon = _orderDetails.coupon != null ? _orderDetails.coupon : 0;
    let discount = _cart.discount || 0;
    let discountAmt;
    console.log("here", _orderDetails.coupon, _orderDetails);
    if (_coupon.type == "%") {
      discountAmt = `${_coupon.amount.toFixed(2)}%`;
    } else if (_coupon.type == "$") {
      discountAmt = currency.symbol;
    }

    let orderTotal = creditFee + shippingFee + cartTotal + taxFee;

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
      currency: { value: "USD", tag: "Currency" }
    };

    _orderDetails[pageGroup].updatedAt = _orderDetails.payment.updatedAt;

    props.setOrderDetails({ orderDetails: _orderDetails });
  }

  let box = {
    border: "2px solid rgb(239, 239, 239)",
    borderRadius: "5px",
    overflow: "hidden"
  };
  let titleBox = {
    borderBottom: "2px solid #505050",
    color: "#fff",
    // background: "#ef5753",
    background: "rgb(239, 87, 83)",
    padding: "6px"
  };

  return (
    <div className="w-full flex justify-end mb-6 lg:flex-col md:flex-col sm:flex-col">
      <div
        style={box}
        className="w-1/3 h-200 lg:w-full lg:mt-2 sm:w-full sm:mt-2 md:w-full md:mt-2 mx-0 bg-white"
      >
        <h3 style={titleBox}>Shipping Address</h3>
        <div className="p-2">
          <p className="mt-1">
            {_orderDetails.shipping != null ? (
              <span>
                {_orderDetails.shipping.address.value}
                {", "}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {_orderDetails.shipping != null ? (
              <span>
                {_orderDetails.shipping.city.value}
                {", "}
                {_orderDetails.shipping.state.value}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {_orderDetails.shipping != null
              ? _orderDetails.shipping.postalZip.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            {_orderDetails.shipping != null
              ? _orderDetails.shipping.country.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg" />
            </span>
            {_orderDetails.shipping != null
              ? _orderDetails.shipping.phone.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
            </span>
            {_orderDetails.shipping != null ? (
              <span>{_orderDetails.shipping.email.value}</span>
            ) : (
              "Not Defined"
            )}
          </p>
        </div>
      </div>
      <div
        style={box}
        className="w-1/3 h-200 lg:w-full lg:mt-2 sm:w-full sm:mt-2 md:w-full md:mt-2 xxl:mx-4 xl:mx-4 bg-white"
      >
        <h3 style={titleBox}>Billing Address</h3>
        <div className="p-2">
          <p className="mt-1">
            {_orderDetails.billing != null ? (
              <span>
                {_orderDetails.billing.address.value}
                {", "}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {_orderDetails.billing != null ? (
              <span>
                {_orderDetails.billing.city.value}
                {", "}
                {_orderDetails.billing.state.value}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {_orderDetails.billing != null
              ? _orderDetails.billing.postalZip.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            {_orderDetails.billing != null
              ? _orderDetails.billing.country.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg" />
            </span>
            {_orderDetails.billing != null
              ? _orderDetails.billing.phone.value
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
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
        className="w-1/3 h-200 lg:w-full lg:mt-2 sm:w-full sm:h-full sm:mt-2 md:w-full md:mt-2 mx-0 bg-white"
      >
        <h3 style={titleBox}>Payment Information</h3>
        <div className="p-2 inline-flex w-full">
          <div className="w-3/5 text-right">
            <p className="mt-1">Product Total:</p>
            <p className="mt-2">Shipping: </p>
            <p className="mt-2">
              Tax ({(_orderDetails[pageGroup].cumTax * 100).toFixed(2)}%):
            </p>
            <p className="mt-2">
              Credit Card Tax (
              {(_orderDetails[pageGroup].creditTax * 100).toFixed(2)}%):{" "}
            </p>
            {_orderDetails.coupon != null &&
            _orderDetails.coupon.code != null ? (
              <p className="mt-2 text-red-dark">
                Discount ({_orderDetails[pageGroup].discountAmt}
                ):{" "}
              </p>
            ) : null}
          </div>
          <div className="w-2/5 pl-4 text-left">
            <p className="mt-1">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    (_orderDetails[pageGroup].cartTotal.value +
                      _orderDetails[pageGroup].discount)
                  ).toFixed(2)}`
                : ""}
            </p>
            <p className="mt-2">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    _orderDetails[pageGroup].shippingFee.value
                  ).toFixed(2)}`
                : ""}
            </p>
            <p className="mt-2">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * _orderDetails[pageGroup].taxFee
                  ).toFixed(2)}`
                : ""}
            </p>
            <p className="mt-2">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * _orderDetails[pageGroup].creditFee.value
                  ).toFixed(2)}`
                : ""}
            </p>
            {_orderDetails.coupon != null &&
            _orderDetails.coupon.code != null ? (
              <p className="mt-2 text-red-dark">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails[pageGroup].discount
                    ).toFixed(2)}`
                  : ""}
              </p>
            ) : null}
          </div>
        </div>
        <div
          className={`${
            _orderDetails.coupon != null && _orderDetails.coupon.code != null
              ? "p-1"
              : "p-2 mt-4"
          } border-t-2 border-grey-lightest inline-flex w-full`}
        >
          <div className="w-3/5 text-right">
            {" "}
            <p className="font-extrabold text-grey-light text-lg uppercase">
              Total:
            </p>{" "}
          </div>
          <div className="w-2/5 text-left pl-4">
            {" "}
            <p className="font-extrabold text-lg">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * _orderDetails[pageGroup].orderTotal.value
                  ).toFixed(2)}`
                : ""}
            </p>{" "}
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
    productList.push(`${_name} x ${item.quantity} x ${item.price}`);
  }

  return { productList: productList.toString(), itemQuantity };
};
