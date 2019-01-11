import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../../../static/data";

const PaymentReview = props => {
  let pageGroup = "payment";
  let _orderDetails = props.checkout.orderDetails;

  if (
    _orderDetails[pageGroup] == null ||
    _orderDetails[pageGroup].updateRequested
  ) {
    console.log("Updating");

    let cartTotal = props.cart.price;
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
    //_orderDetails.payment["Credit Card"] != null ? cartTotal * 0.1 : 0;
    let cumTax = tax + provTax;
    let shippingFee = _orderDetails.shipping.shippingCost.value;
    let taxFee = cartTotal * cumTax;

    let orderTotal = creditFee + shippingFee + cartTotal + taxFee;

    _orderDetails[pageGroup] = {
      ..._orderDetails.payment,
      updateRequested: false,
      creditFee: { value: creditFee, tag: "CC_Charge" },
      shippingFee: { value: shippingFee, tag: "Shipping" },
      taxFee,
      cumTax,
      creditTax,
      tax: { value: tax, tag: "tax" },
      provTax: { value: provTax, tag: "prov_tax" },
      taxType: { value: taxType, tag: "prov_tax_type" },
      cartTotal: { value: cartTotal, tag: "Order_Amt" },
      orderTotal: { value: orderTotal, tag: "Total" },
      currency: { value: "USD", tag: "currency" } // Temporary
    };

    _orderDetails[pageGroup].updatedAt = _orderDetails.payment.updatedAt;

    props.setOrderDetails({ orderDetails: _orderDetails });
  }

  return (
    <div className="w-full flex justify-end mb-6">
      <div
        style={{
          border: "2px solid rgb(239, 239, 239)",
          background: "#ffffff",
          color: "#191919"
        }}
        className="w-1/3 h-200 mx-0"
      >
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}
        >
          Shipping Address
        </h3>
        <div className="p-2">
          <p className="mt-2">
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
        style={{
          border: "2px solid rgb(239, 239, 239)",
          background: "#ffffff",
          color: "#191919"
        }}
        className="w-1/3 h-200 mx-4"
      >
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}
        >
          Billing Address
        </h3>
        <div className="p-2">
          <p className="mt-2">
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
        style={{
          border: "2px solid rgb(239, 239, 239)",
          background: "#ffffff",
          color: "#191919"
        }}
        className="w-1/3 h-200 mx-0"
      >
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}
        >
          Payment Information
        </h3>
        <div className="p-2">
          <p className="mt-2">
            Product Total: {console.log(props)}
            <span className="">
              ${_orderDetails[pageGroup].cartTotal.value.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Shipping:{" "}
            <span className="">
              ${_orderDetails[pageGroup].shippingFee.value.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Tax ({(_orderDetails[pageGroup].cumTax * 100).toFixed(2)}%):{" "}
            <span className="">
              ${_orderDetails[pageGroup].taxFee.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Credit Card Tax (
            {(_orderDetails[pageGroup].creditTax * 100).toFixed(2)}%):{" "}
            <span className="">
              ${_orderDetails[pageGroup].creditFee.value.toFixed(2)}
            </span>
          </p>
          <hr
            style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
            className="mt-6"
          />
          <p className="text-lg mt-2 font-extrabold text-center">
            Total:{" "}
            <span className="">
              ${_orderDetails[pageGroup].orderTotal.value.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;
