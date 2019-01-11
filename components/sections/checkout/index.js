import React from "react";

const Checkout = props => {
  let _orderDetails = props.checkout.orderDetails;
  return (
    <div
      style={{
        borderTop: "2px solid #efefef"
      }}
      className="w-full pt-2 inline-flex text-xl font-medium">
      <div
        className={`w-1/4 mx-2 text-center text-black relative unselectable ${
          props.misc.stepsCheckout == 0 ? "steps-active" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(0);
          }}
          className={`p-2 cursor-pointer step-text`}>
          1. Products Review
        </div>
      </div>
      <div
        className={`w-1/4 mx-2 text-center text-black relative unselectable ${
          props.misc.stepsCheckout == 1 ? "steps-active" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(1);
          }}
          className={`p-2 cursor-pointer step-text ${
            _orderDetails["shipping"] == null
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          2. Shipping Details
        </div>
      </div>
      <div
        className={`w-1/4 mx-2 text-center text-black relative unselectable ${
          props.misc.stepsCheckout == 2 ? "steps-active" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(2);
          }}
          className={`p-2 cursor-pointer step-text ${
            _orderDetails["billing"] == null
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          3. Billing Address
        </div>
      </div>
      <div
        className={`w-1/4 mx-2 text-center text-black relative unselectable ${
          props.misc.stepsCheckout == 3 ? "steps-active" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(3);
          }}
          className={`p-2 cursor-pointer step-text ${
            _orderDetails["payment"] == null
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          4. Payment
        </div>
      </div>
      <div
        className={`w-1/4 mx-2 text-center text-black relative unselectable ${
          props.misc.stepsCheckout == 4 ? "steps-active" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(4);
          }}
          className={`p-2 cursor-pointer step-text ${
            _orderDetails["confirm"] == null
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          5. Confirmation
        </div>
      </div>
    </div>
  );
};

export default Checkout;
