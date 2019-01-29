import React from "react";

const MinimumSeedsWarning = props => {
  return (
    <div>
      {props.checkout.error[103] != null ? (
        <div className="w-full">
          <p className="text-red-dark w-full text-sm text-center font-bold opacity-50 uppercase">
            ** Due to Shipment Restrictions, it is{" "}
            <span className="underline">MANDATORY</span> that your cart contains
            at least <span className="underline">20 seeds</span> before
            continuing. **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MinimumSeedsWarning;
