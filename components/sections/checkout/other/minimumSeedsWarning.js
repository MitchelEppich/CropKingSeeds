import React from "react";

const MinimumSeedsWarning = props => {
  return (
    <div>
      {props.checkout.error[103] != null ? (
        <div className="w-full my-2">
          <p className="bg-red-light font-bold w-full text-base text-center text-white opacity-100 uppercase p-1">
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
