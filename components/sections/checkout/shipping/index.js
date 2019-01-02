<<<<<<< HEAD
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
=======
import React from "react"
import ShippingAddress from "./shippingAddress";

const Shipping = props => {
    return (
        <div>                       
            <ShippingAddress {...props} />          
        </div>
    )
}
>>>>>>> 4ddfa01bd291b2e65d1839626d8d4c4d2dc14789

export default Shipping;
