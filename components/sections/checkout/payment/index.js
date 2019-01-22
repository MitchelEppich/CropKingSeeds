import React from "react";
import CreditCard from "./creditCard";
import PrepaidCard from "./prepaidCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";
import Moneygram from "./moneygram";
import PaymentReview from "./paymentReview";
import Cash from "./cash";
import Transfer from "./transfer";

import MinimumSeedsWarning from "../other/minimumSeedsWarning"

const Payment = props => {
  let _orderDetails = props.checkout.orderDetails;

  let allowCC = !props.checkout.noCreditZip.includes(
    _orderDetails.billing.postalZip.value.toLowerCase().replace(/ /g, "")
  );

  return (
    <div className="w-full mt-6 mb-8">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">Payment</h2>
      <div className="mb-8">
      <MinimumSeedsWarning {...props} />
        </div>

      <PaymentReview {...props} />
      {["Canada", "United States"].includes(
        _orderDetails.billing.country.value
      ) && allowCC ? (
        <CreditCard {...props} />
      ) : (
        <div />
      )}
      {["Canada", "United States"].includes(
        _orderDetails.billing.country.value
      ) && allowCC ? (
        <PrepaidCard {...props} />
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
      {!allowCC ? (
        <div className="w-full">
          <hr className="border-t-1 mb-8 opacity-25 border border-grey-lighter" />
          <p className="text-red-dark w-full text-center opacity-75">
            ** Credit Card has been disabled in your location **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Payment;
