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
              ${props.checkout.orderDetails[pageGroup].cartTotal.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Shipping:{" "}
            <span className="">
              ${props.checkout.orderDetails[pageGroup].shippingFee.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Tax:{" "}
            <span className="">
              ${props.checkout.orderDetails[pageGroup].taxFee.toFixed(2)}
            </span>
          </p>
          <p className="mt-2">
            Credit Card Tax (10%):{" "}
            <span className="">
              ${props.checkout.orderDetails[pageGroup].creditTax.toFixed(2)}
            </span>
          </p>
          <hr
            style={{ border: "1px solid rgba(228, 228, 228, 0.3)" }}
            className="mt-6"
          />
          <p className="text-lg mt-2 font-extrabold text-center">
            Total:{" "}
            <span className="">
              ${props.checkout.orderDetails[pageGroup].orderTotal.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;
