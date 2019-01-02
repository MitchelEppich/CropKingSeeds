import React from "react";
import BillingAddress from "./billingAddress";

const Billing = props => {
  return (
    <div>
      <BillingAddress {...props} />
    </div>
  );
};

export default Billing;
