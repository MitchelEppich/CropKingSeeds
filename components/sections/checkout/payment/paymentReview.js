import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentReview = props => {
  let pageGroup = "payment";

  if (props.checkout.orderDetails[pageGroup] == null) {
    let _orderDetails = props.checkout.orderDetails;

    let cartTotal = props.cart.price;
    let tax = 0.1; // Still need to get tax
    let creditTax = cartTotal * 0.1;
    let shippingFee = _orderDetails.shipping.shippingCost;
    let taxFee = cartTotal * tax;

    let orderTotal = creditTax + shippingFee + cartTotal + taxFee;

    _orderDetails[pageGroup] = {
      ..._orderDetails.payment,
      creditTax,
      shippingFee,
      taxFee,
      tax,
      cartTotal,
      orderTotal
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
        className="w-1/3 h-200 mx-0">
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}>
          Shipping Address
        </h3>
        <div className="p-2">
          <p className="mt-2">
            {props.checkout.orderDetails.shipping != null ? (
              <span>
                {props.checkout.orderDetails.shipping.address}
                {", "}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.shipping != null ? (
              <span>
                {props.checkout.orderDetails.shipping.city}
                {", "}
                {props.checkout.orderDetails.shipping.state}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.shipping != null
              ? props.checkout.orderDetails.shipping.postalZip
              : "Not Defined"}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.shipping != null
              ? props.checkout.orderDetails.shipping.country
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg" />
            </span>
            {props.checkout.orderDetails.shipping != null
              ? props.checkout.orderDetails.shipping.phone
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
            </span>
            {props.checkout.orderDetails.shipping != null ? (
              <span>{props.checkout.orderDetails.shipping.email}</span>
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
        className="w-1/3 h-200 mx-4">
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}>
          Billing Address
        </h3>
        <div className="p-2">
          <p className="mt-2">
            {props.checkout.orderDetails.billing != null ? (
              <span>
                {props.checkout.orderDetails.billing.address}
                {", "}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.billing != null ? (
              <span>
                {props.checkout.orderDetails.billing.city}
                {", "}
                {props.checkout.orderDetails.billing.state}
              </span>
            ) : (
              "Not Defined"
            )}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.billing != null
              ? props.checkout.orderDetails.billing.postalZip
              : "Not Defined"}
          </p>

          <p className="mt-2">
            {props.checkout.orderDetails.billing != null
              ? props.checkout.orderDetails.billing.country
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faPhone} className="fa-lg" />
            </span>
            {props.checkout.orderDetails.billing != null
              ? props.checkout.orderDetails.billing.phone
              : "Not Defined"}
          </p>

          <p className="mt-2">
            <span className="p-2 text-grey-light">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
            </span>
            {props.checkout.orderDetails.billing != null ? (
              <span>{props.checkout.orderDetails.billing.email}</span>
            ) : (
              "Not Defined"
            )}
          </p>
        </div>
        {console.log(props.checkout)}
      </div>
      <div
        style={{
          border: "2px solid rgb(239, 239, 239)",
          background: "#ffffff",
          color: "#191919"
        }}
        className="w-1/3 h-200 mx-0">
        <h3
          style={{
            borderBottom: "2px solid #505050",
            color: "#1d1d1d",
            background: "whitesmoke",
            padding: "5px"
          }}>
          Payment Information
        </h3>
        <div className="p-2 inline-flex w-full">
          <div className="w-1/2 text-right">
            <p className="mt-2">Product Total:</p>
            <p className="mt-2">Shipping: </p>
            <p className="mt-2">Tax:</p>
            <p className="mt-2">Credit Card Tax (10%): </p>
          </div>
          <div className="w-1/2 text-right">
            <p className="mt-2">
              ${props.checkout.orderDetails[pageGroup].cartTotal.toFixed(2)}
            </p>
            <p className="mt-2">
              ${props.checkout.orderDetails[pageGroup].shippingFee.toFixed(2)}
            </p>
            <p className="mt-2">
              ${props.checkout.orderDetails[pageGroup].taxFee.toFixed(2)}
            </p>
            <p className="mt-2">
              ${props.checkout.orderDetails[pageGroup].creditTax.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="p-2 mt-4 border-t-2 border-grey-lightest inline-flex w-full">
          <div className="w-1/2 text-right">
            {" "}
            <p className="font-bold">Total:</p>{" "}
          </div>
          <div className="w-1/2 text-right">
            {" "}
            <p className="font-bold">
              ${props.checkout.orderDetails[pageGroup].orderTotal.toFixed(2)}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;
