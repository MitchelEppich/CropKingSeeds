import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Coupon = props => {
  let currency = props.checkout.viewCurrency;
  let _orderDetails = props.checkout.orderDetails;
  let pageGroup = "payment";

  let threshold = props.checkout.freeShippingThreshold
  let toFreeShipping = threshold - props.cart.price;
  let freeShipping = toFreeShipping < 0 || toFreeShipping == threshold;
  let marginBottom = freeShipping ? 4 : 0

  return (
    <div className={`w-full flex items-center inline-flex lg:flex-col md:flex-col sm:flex-col mt-4 lg:mt-0 md:mt-0 sm:mt-0 p-2 lg:px-6 px-8 xl:mb-${marginBottom * 2} xxl:mb-${marginBottom * 2} mb-${marginBottom}`}>
      <div className="w-1/2 inline-flex lg:w-full md:w-full sm:w-full items-center flex">
        <div className="w-1/2 lg:w-full md:w-full sm:w-full">
          <div className="w-full">
            <input
              type="text"
              id="coupon"
              placeholder="Coupon Code"
              className="p-2 w-full"
              onChange={e => {
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
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
        <div className="w-1/2 lg:w-full md:w-full sm:w-full flex items-center">
          <div className="w-200 xl:w-100 lg:w-full lg:ml-2 md:w-full md:ml-2 sm:w-full sm:ml-2 xl:ml-2 xxl:ml-2">
            <div
              className="p-2 bg-grey-light text-white font-bold text-center text-lg cursor-pointer hover:bg-grey rounded"
              onClick={() => {
                let _coupon = _orderDetails.payment.coupon;
                if (_coupon == null) return;
                props.applyCoupon({
                  action: "APPEND",
                  coupon: _coupon.value,
                  orderDetails: _orderDetails,
                  ip: _orderDetails.cardHolderIp,
                  items: props.cart.items
                });
              }}
            >
              Apply
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 inline-flex lg:w-full md:w-full sm:w-full items-center sm:mt-4 lg:mt-4 md:mt-4 flex sm:flex-col">
        <div className="w-1/3 inline-flex items-center sm:w-full sm:justify-end flex">
          {_orderDetails.coupon != null &&
          _orderDetails.coupon.error == null ? (
            <div
              className="cursor-pointer text-white flex items-center font-bold bg-red-light p-2 hover:bg-grey-light slowish rounded"
              onClick={() => {
                let _coupon = _orderDetails.coupon;
                if (_coupon == null) return;
                props.applyCoupon({
                  action: "REMOVE",
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
        <div className="w-2/3 lg:w-full md:w-full sm:w-full flex justify-end sm:mt-3">
          <div className="w-full text-right xl:ml-2 xxl:ml-2">
            <div className="text-center text-xl inline-flex items-center flex">
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
