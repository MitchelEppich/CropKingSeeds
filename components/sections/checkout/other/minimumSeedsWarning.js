import React from "react";

const MinimumSeedsWarning = props => {
  return (
    <div>
      {props.checkout.error[103] != null ? (
        <div className="w-full">
          <p className="text-red-dark w-full text-sm text-center font-bold opacity-75">
            ** Due to Shipment Restrictions, it is{" "}
            <span className="font-black">MANDATORY</span> that your cart
            contains at least <span className="font-black">20 seeds</span>{" "}
            before continuing. **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MinimumSeedsWarning;
