import React from "react";

const FreeShippingNotify = props => {
  let currency = props.checkout.viewCurrency;

  let threshold = props.checkout.freeShippingThreshold
  let toFreeShipping = threshold - props.cart.price;
  let freeShipping = toFreeShipping < 0 || toFreeShipping == threshold;

  if (freeShipping) return null

  return (
    <div className="w-full flex items-center inline-flex lg:flex-col md:flex-col sm:flex-col lg:mt-0 md:mt-0 sm:mt-0 lg:px-6 px-8 xl:mb-8 xxl:mb-8 mb-4">
      <div className="w-full lg:w-full md:w-full sm:w-full flex justify-end sm:mt-3">
        <div className="w-full text-right xl:ml-2 xxl:ml-2">
          <div className="text-center text-md inline-flex items-center flex">
            <p className="text-grey-light uppercase">Receive Free Shipping:</p>
            <p className="text-red-light text-md pl-3 font-extrabold">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * toFreeShipping
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingNotify;
