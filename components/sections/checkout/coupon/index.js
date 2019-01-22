import React from "react";

const Coupon = props => {
  let currency = props.checkout.viewCurrency;

  let pageGroup = "payment";

  return (
    <div className="w-full flex items-center inline-flex mt-4 p-2 px-8 mb-8">
      <div className="w-1/3">
        <div className="w-full">
          <input
            type="text"
            id="coupon"
            placeholder="COUPON CODE"
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
      <div className="w-1/3">
        <div className="w-200 ml-2">
          <div className="p-3 bg-grey-light text-white font-bold text-center cursor-pointer hover:bg-grey uppercase">
            Apply
          </div>
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <div className="w-full text-right ml-2">
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
