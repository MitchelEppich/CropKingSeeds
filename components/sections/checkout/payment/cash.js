import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoaderCheckout from "../loaderCheckout";

const Cash = props => {
  let pageGroup = "payment";
  let paymentType = "Cash";

  return (
    <div className="w-full mb-6 ">
      <div
        onClick={() => {
          props.setVisibleScreen({
            input: paymentType,
            group: "payment"
          });
          let _orderDetails = props.checkout.orderDetails;
          props.modifyOrderDetails({
            orderDetails: _orderDetails,
            group: pageGroup,
            key: "method",
            value:
              _orderDetails[pageGroup]["method"] != null &&
              _orderDetails[pageGroup]["method"].value == paymentType
                ? undefined
                : {
                    value: paymentType,
                    tag: "Payment_Method"
                  },
            tag: undefined,
            requestUpdateOfGroup: { value: true, group: pageGroup }
          });
        }}
        style={{
          border: "2px solid #e4e4e4",
          background: "#ffffff",
          color: "#191919"
        }}
        className="h-10 mb-2 inline-flex w-full cursor-pointer"
      >
        <div className="w-4/5 p-2 flex items-center">
          <p className="font-bold">Pay with Cash</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen != null &&
      props.misc.visibleScreen.includes("payment::" + paymentType) ? (
        <div className="w-full p-2">
          <div className="w-full mt-2 text-center">
            <p className="text-sm p-2">
              Proceeding will take you to the instructions on how to pay with
              cash.
            </p>
          </div>
          <div className="w-225 p-2 mx-auto mt-6 text-center">
            {!props.checkout.processing ? (
              <button
                name="cashPay"
                type="submit"
                className="w-full font-bold text-white text-center p-2 font-extrabold bg-red-dark text-white text-xl hover:bg-grey-light cursor-pointer rounded"
              >
                Pay Now
              </button>
            ) : (
              <div className="text-center">
                <p className="p-1 uppercase font-bold pb-2">
                  Please Do NOT Refresh
                </p>
                <LoaderCheckout {...props} />
                <p className="p-1 blink font-bold">Processing your order...</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cash;
