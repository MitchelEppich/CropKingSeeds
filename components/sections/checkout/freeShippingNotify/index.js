import React from "react";

const FreeShippingNotify = props => {
  let currency = props.checkout.viewCurrency;

  let threshold = props.checkout.freeShippingThreshold;
  let toFreeShipping = threshold - props.cart.price;
  let freeShipping = toFreeShipping < 0 || toFreeShipping == threshold;

  if (freeShipping) return null;

  let amount =
    currency != null
      ? `${currency.symbol}${(currency.convert * toFreeShipping).toFixed(2)}`
      : 0;

  return (
    <div className="w-full flex items-center inline-flex lg:flex-col md:flex-col sm:flex-col lg:mt-0 md:mt-0 sm:mt-0 lg:px-6 px-8 xl:mb-8 xxl:mb-8 mb-4">
      <div className="w-full lg:w-full md:w-full sm:w-full text-center sm:mt-3">
        <div className="w-full text-center xl:ml-2 xxl:ml-2">
          {amount != "$0.00" ? (
            <div className="text-center text-md inline-flex items-center flex">
              <p className="text-grey-light uppercase">
                Add only
                <span className="text-red-light text-md pl-2 text-lg font-bold">
                  {amount}
                </span>{" "}
                <span className="uppercase ml-1 text-grey-light">
                  to receive{" "}
                  <span className="font-bold">Free Express Shipping</span>
                </span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FreeShippingNotify;
