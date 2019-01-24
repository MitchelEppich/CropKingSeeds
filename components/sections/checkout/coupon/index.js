import React from "react";

const Coupon = props => {
  let currency = props.checkout.viewCurrency;

  let pageGroup = "payment";

  return (
    <div className="w-full flex items-center inline-flex lg:flex-col md:flex-col sm:flex-col mt-4 lg:mt-0 md:mt-0 sm:mt-0 p-2 lg:px-6 px-8 xl:mb-8 xxl:mb-8 mb-4">
      <div className="w-1/3 lg:w-full md:w-full sm:w-full">
        <div className="w-full">
          <input
            type="text"
            id="coupon"
            placeholder="Coupon Code"
            className="p-3 w-full"
            onChange={e => {
              let _orderDetails = props.checkout.orderDetails;
              let _target = e.target;
              let _key = _target.id;
              let _value = _target.value;
              let _tag = "Coupon";

              props.modifyOrderDetails({
                orderDetails: _orderDetails,
                group: pageGroup,
                key: _key,
                value: _value,
                tag: _tag
              });
            }}
          />
        </div>
      </div>
      <div className="w-1/3 lg:w-full md:w-full sm:w-full">
        <div className="w-200 w-200 lg:w-full lg:mt-4 md:w-full md:mt-4 sm:w-full sm:mt-4 xl:ml-2 xxl:ml-2">
          <div className="p-2 xxl:p-3 xl:p-3 bg-grey-light text-white font-bold text-center text-lg cursor-pointer hover:bg-grey ">
            Apply
          </div>
        </div>
      </div>
      <div className="w-1/3 lg:w-full md:w-full sm:w-full flex justify-end">
        <div className="w-full text-right  xl:ml-2 xxl:ml-2">
          <div className="p-2 text-center text-xl inline-flex items-center flex">
            <p className="text-grey-light p-2 font-bold uppercase">
              Subtotal:{" "}
            </p>
            <p className="text-red-light text-2xl p-2 pt-1 font-extrabold">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * props.cart.price
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
