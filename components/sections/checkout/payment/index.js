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
import MinimumOrderWarning from "../other/minimumOrderWarning";

const Payment = props => {
  let _orderDetails = props.checkout.orderDetails;

  let allowCC = !props.checkout.noCreditZip.includes(
    _orderDetails.billing.postalZip.value.toLowerCase().replace(/ /g, "")
  );

  let titleBox = {
    borderBottom: "2px solid #505050",
    color: "#fff",
    background: "rgb(239, 87, 83)",
    padding: "7px",
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px"
  };

  return (
    <div className="w-full px-8 mb-6 sm:px-4">
      <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
        Payment Review
      </h2>
      <div className="mb-4">
        <MinimumSeedsWarning {...props} />
        <MinimumOrderWarning {...props} />
      </div>

      <PaymentReview {...props} />

      <div className="font-bold py-2 my-4">
        <h2 className="text-3/5xl font-extrabold opacity-50 mt-2 mb-4 text-black">
          Important
        </h2>
        <div style={titleBox}>
          <h2 className="text-xl">Confirmation</h2>
        </div>
        <div className="p-4 bg-white border border-grey-lightest inline-flex w-full sm:flex-col">
          <div className="w-main sm:w-full">
            <label className="text-lg sm:text-sm cursor-pointer items-center flex">
              <input
                type="checkbox"
                name="confirmation-data"
                id="infoConfirmed"
                checked={
                  props.checkout.orderDetails["details"] != null
                    ? props.checkout.orderDetails["details"].infoConfirmed
                    : false
                }
                // checked={false}
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.checked;

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: "details",
                    key: _key,
                    value: _value
                  });
                }}
                className="checkbox sm:mr-2"
              />
              I confirm that all my information is correct.*
            </label>
          </div>
          <div className="w-150 justify-end flex sm:w-full sm:justify-end">
            <p className="text-red-light font-bold text-sm p-2 flex justify-end items-center mr-6">
              * Required field.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
          Payment Method
        </h2>
      </div>
      <div
        className={
          props.checkout.error[105] != null
            ? "opacity-50 unselectable pointer-events-none py-2"
            : "py-2"
        }
      >
        <div
          style={titleBox}
          className="font-bold py-2 p-2 mb-4 mt-2 bg-red-dark text-white"
        >
          <p className="text-lg">
            Please, select your Payment Method to finalize your Order:
          </p>
        </div>
        {["Canada", "United States"].includes(
          _orderDetails.billing.country.value
        ) && allowCC ? (
          <CreditCard {...props} />
        ) : (
          <div />
        )}
        {/* {["Canada", "United States"].includes(
        _orderDetails.billing.country.value
      ) && allowCC ? (
        <PrepaidCard {...props} />
      ) : (
        <div />
      )} */}
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
    </div>
  );
};

export default Payment;
