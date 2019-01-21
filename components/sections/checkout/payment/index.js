import React from "react";
import CreditCard from "./creditCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";
import Moneygram from "./moneygram";
import PaymentReview from "./paymentReview";
import Cash from "./cash";
import Transfer from "./transfer";

const Payment = props => {
  let _orderDetails = props.checkout.orderDetails;

  return (
    <div className="w-full mt-6 mb-8">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Payment</h2>
      <PaymentReview {...props} />
      {["Canada", "United States"].includes(
        _orderDetails.billing.country.value
      ) ? (
        <CreditCard {...props} />
      ) : (
        <div />
      )}
      <Bitcoin {...props} />
      {_orderDetails.billing.country.value != "Canada" ? (
        <Moneygram {...props} />
      ) : (
        <div />
      )}
      <Cash {...props} />
      {_orderDetails.billing.country.value == "Canada" ? (
        <Transfer {...props} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default Payment;
