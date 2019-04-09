import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Coupon = props => {
  let currency = props.checkout.viewCurrency;
  let _orderDetails = props.checkout.orderDetails;
  let pageGroup = "payment";

  let threshold = props.checkout.freeShippingThreshold;
  let toFreeShipping = threshold - props.cart.price;
  let freeShipping = toFreeShipping < 0 || toFreeShipping == threshold;
  let marginBottom = freeShipping ? 4 : 0;

  return (
    <div
      className={`w-full flex items-center inline-flex lg:flex-col md:flex-col sm:flex-col mt-4 lg:mt-0 md:mt-0 sm:mt-0 p-2 sm:px-4 lg:px-6 px-8 xl:mb-${marginBottom *
        2} xxl:mb-${marginBottom * 2} mb-${marginBottom}`}
    >
      <form
        onSubmit={e => {
          e.stopPropagation();
          e.preventDefault();
          let _coupon = _orderDetails.payment.coupon;
          if (_coupon == null) return;
          props.applyCoupon({
            action: "APPEND",
            max: props.cart.maxPerPackage,
            coupon: _coupon.value,
            orderDetails: _orderDetails,
            ip: _orderDetails.cardHolderIp,
            items: props.cart.items
          });
        }}
        className="w-1/2 inline-flex lg:w-full md:w-full sm:w-full sm:flex-col items-center flex"
      >
        <div className="w-1/2 lg:w-full md:w-full sm:w-full">
          <div className="w-full">
            <input
              aria-label="couponCode"
              type="text"
              id="coupon"
              placeholder="Coupon Code"
              className="p-2 w-full"
              onChange={e => {
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value.toUpperCase();
                let _tag = "Coupon";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag,
                  requestUpdateOfGroup: {
                    value: true,
                    group: "payment"
                  }
                });
              }}
            />
          </div>
        </div>
        <div className="w-1/2 lg:w-full md:w-1/3 sm:w-full sm:mt-4 flex items-center">
          <div className="w-200 xl:w-100 lg:w-full lg:ml-2 md:w-full md:ml-2 sm:w-full sm:ml-2 xl:ml-2 xxl:ml-2">
            <button
              type="submit"
              value="Submit"
              className="p-2 px-16 sm:px-4 md:px-4 bg-grey-light text-white font-bold text-center sm:w-full text-lg cursor-pointer hover:bg-grey rounded"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="sm:hidden md:hidden lg:hidden xl:hidden w-1/3 inline-flex items-center flex">
          {_orderDetails.coupon != null &&
          _orderDetails.coupon.error == null ? (
            <div
              className="cursor-pointer text-white flex items-center font-bold bg-red-light p-2 hover:bg-grey-light slowish rounded"
              onClick={() => {
                let _coupon = _orderDetails.coupon;
                if (_coupon == null) return;
                props.applyCoupon({
                  action: "REMOVE",
                  max: props.cart.maxPerPackage,
                  coupon: _coupon,
                  orderDetails: _orderDetails,
                  items: props.cart.items
                });
              }}
            >
              <p>{_orderDetails.coupon.code}</p>
              <FontAwesomeIcon icon={faTimes} className="fa-lg ml-2" />
            </div>
          ) : null}
          {_orderDetails.coupon != null &&
          _orderDetails.coupon.error != null ? (
            <div>
              <p className="font-bold text-red-dark">
                *{_orderDetails.coupon.error}
              </p>
            </div>
          ) : null}
        </div>
      </form>
      <div className="w-1/2 inline-flex lg:w-full md:w-full sm:w-full items-center sm:mt-4 lg:mt-4 md:mt-4 xl:pl-6 flex sm:flex-col">
        <div className="w-1/3 inline-flex items-center sm:w-full  md:w-full sm:justify-end xxl:hidden flex">
          {_orderDetails.coupon != null &&
          _orderDetails.coupon.error == null ? (
            <div
              className="cursor-pointer text-white flex items-center font-bold bg-red-light p-2 hover:bg-grey-light slowish rounded"
              onClick={() => {
                let _coupon = _orderDetails.coupon;
                if (_coupon == null) return;
                props.applyCoupon({
                  action: "REMOVE",
                  max: props.cart.maxPerPackage,
                  coupon: _coupon,
                  orderDetails: _orderDetails,
                  items: props.cart.items
                });
              }}
            >
              <p>{_orderDetails.coupon.code}</p>
              <FontAwesomeIcon icon={faTimes} className="fa-lg ml-2" />
            </div>
          ) : null}
          {_orderDetails.coupon != null &&
          _orderDetails.coupon.error != null ? (
            <div>
              <p className="font-bold text-red-dark">
                *{_orderDetails.coupon.error}
              </p>
            </div>
          ) : null}
        </div>
        <div className="w-2/3 xxl:w-full lg:w-full md:w-full sm:w-full flex justify-end sm:mt-3">
          <div className="w-full text-right xl:ml-2 xxl:ml-2">
            <div className="text-center text-xl md:text-lg md:ml-2 inline-flex items-center flex">
              <p className="text-grey-light font-bold uppercase">Subtotal: </p>
              <p className="text-red-light text-2xl pl-3 font-extrabold">
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
    </div>
  );
};

export default Coupon;
