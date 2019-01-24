import React from "react";
import CreditCard from "./creditCard";
import PrepaidCard from "./prepaidCard";
import Bitcoin from "./bitcoin";
import Paypal from "./paypal";
import Moneygram from "./moneygram";
import PaymentReview from "./paymentReview";
import Cash from "./cash";
import Transfer from "./transfer";

import MinimumSeedsWarning from "../other/minimumSeedsWarning";

const Payment = props => {
  let _orderDetails = props.checkout.orderDetails;

  let allowCC = !props.checkout.noCreditZip.includes(
    _orderDetails.billing.postalZip.value.toLowerCase().replace(/ /g, "")
  );

  return (
    <div className="w-full px-8 mb-6 sm:px-4">
      <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
        Payment
      </h2>
      <div className="mb-4">
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
