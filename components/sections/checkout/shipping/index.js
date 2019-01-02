import React from "react";
import BillingAddress from "./billingAddress";
import ShippingAddress from "./shippingAddress";

const Shipping = props => {
  return (
    <div>
      <BillingAddress {...props} />
      {!props.misc.sameAddress ? <ShippingAddress {...props} /> : null}
    </div>
  );
};

export default Shipping;
