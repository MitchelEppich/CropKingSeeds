import React from "react";
import { faAngleDown, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import moment from "moment";

import StringMask from "string-mask";

// let _orderDetails = props.checkout.orderDetails;
// let _target = e.target;
// let _key = _target.id;
// let _value = _target.checked;

// props.modifyOrderDetails({
//   orderDetails: _orderDetails,
//   group: pageGroup,
//   key: _key, // isPrepaid
//   value: _value // True | False
// });

const CreditCard = props => {
  let pageGroup = "payment";
  let paymentType = "Credit Card";
  let orderDetails = props.checkout.orderDetails;

  let ccNumberFormat = new StringMask("0000-0000-0000-0000");

  return (
    <div className="w-full mb-6">
      <div
        onClick={() => {
          props.setVisibleScreen({ input: paymentType, group: "payment" });
          let _orderDetails = props.checkout.orderDetails;
          props.modifyOrderDetails({
            orderDetails: _orderDetails,
            group: pageGroup,
            key: "method",
            value:
              _orderDetails[pageGroup]["method"] != null &&
              _orderDetails[pageGroup]["method"].value == paymentType
                ? undefined
                : {
                    value: paymentType,
                    tag: "Payment_Method"
                  },
            tag: undefined,
            requestUpdateOfGroup: { value: true, group: pageGroup }
          });
        }}
        style={{
          border: "2px solid #e4e4e4",
          background: "#ffffff",
          color: "#191919"
        }}
        className="h-10 inline-flex w-full cursor-pointer"
      >
        <div className="w-4/5 p-2 flex items-center">
          <p className="">Pay with Credit Card</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen.includes("payment::" + paymentType) ? (
        <div className="w-600 sm:w-full mx-auto p-2">
          <div className="w-full mt-2 text-center opacity-75">
            <p className="text-sm p-2">Cards Accepted:</p>
            <img src={props.misc.CFURL + "/logos/cards.png"} width="100px" />
          </div>
          <div className="w-full mt-6">
            <label className="p-2 mb-2 flex items-center">
              <input
                aria-label="prepaidVisa"
                id="isPrepaid"
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.checked ? "Yes" : "No";
                  let _tag = "Prepaidcard";
                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                checked={
                  props.checkout.orderDetails.payment.isPrepaid != null &&
                  props.checkout.orderDetails.payment.isPrepaid.value == "Yes"
                    ? true
                    : false
                }
                type="checkbox"
                className="mr-2"
              />
              Are you using a Prepaid Card?
            </label>

            {/* {props.checkout.orderDetails.payment.isPrepaid != null &&
            props.checkout.orderDetails.payment.isPrepaid.value != "Yes" ? ( */}
            <input
              aria-label="cardHolder"
              type="text"
              id="cardHolder"
              required
              value={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].cardHolder || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = undefined;

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
              placeholder="Card Holder Name ..."
              className="p-2 w-full mt-2"
            />
            {/* ) : null} */}
          </div>
          <div className="w-full mt-2 text-center relative inline-flex">
            <div className="w-full">
              <input
                aria-label="cardNumber"
                type="text"
                id="cardNumber"
                required
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].cardNumber != null
                    ? props.checkout.orderDetails[pageGroup].cardNumber.value ||
                      ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "CreditCardnumber";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                  _key = "type";
                  _value = getCardType(_value);
                  _tag = "Typeofcard";
                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                  e.target.setCustomValidity("");
                }}
                onInvalid={e => {
                  e.target.setCustomValidity("Must be a valid Card Number");
                }}
                placeholder="Credit Card Number ..."
                className="p-2 w-full"
                pattern={
                  "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$"
                }
              />
            </div>
            <div className="absolute pin-r text-grey-light opacity-75">
              <img
                src={`${props.misc.CFURL}/logos/cc${(() => {
                  let _type =
                    props.checkout.orderDetails[pageGroup].type != null &&
                    props.checkout.orderDetails[pageGroup].type.value;
                  switch (_type) {
                    case "Mastercard":
                      return "Mastercard";
                    case "Visa":
                      return "Visa";
                    default:
                      return "Default";
                  }
                })()}.png`}
                width="40px"
                className="mr-1"
                style={{ paddingTop: "5px" }}
              />
            </div>
          </div>
          <div className="w-full inline-flex sm:flex-col sm:mt-0 mt-2">
            <div className="w-1/3 sm:w-full sm:mt-2 mr-1 sm:mx-0 inline-flex">
              <select
                placeholder=""
                className="p-2 w-full"
                id="ccExpireMonth"
                defaultValue=""
                required
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].ccExpireMonth != null
                    ? props.checkout.orderDetails[pageGroup].ccExpireMonth
                        .value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "Expiry_Date-Month";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
              >
                <option value="" disabled>
                  Month
                </option>
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
            <div className="w-1/3 sm:w-full sm:mt-2 ml-1 sm:mx-0 inline-flex">
              <select
                placeholder=""
                className="p-2 w-full"
                id="ccExpireYear"
                defaultValue=""
                required
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].ccExpireYear != null
                    ? props.checkout.orderDetails[pageGroup].ccExpireYear
                        .value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "Expiry_Date-Year";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
              >
                <option value="" disabled selected>
                  Year
                </option>
                {(() => {
                  let arr = [];
                  let startYear = parseInt(moment().format("YYYY"));
                  for (let i = 0; i < 10; i++) {
                    let _year = startYear + i;
                    arr.push(
                      <option key={arr} value={_year.toString().slice(2)}>
                        {_year}
                      </option>
                    );
                  }
                  return arr;
                })()}
              </select>
            </div>
            <div className="w-1/3 sm:w-full sm:mt-2 inline-flex relative">
              <div className="ml-2 sm:ml-0 w-full">
                <input
                  aria-label="securityCode"
                  type="text"
                  placeholder="Security Code"
                  id="cvv"
                  required
                  value={
                    props.checkout.orderDetails[pageGroup] != null &&
                    props.checkout.orderDetails[pageGroup].cvv != null
                      ? props.checkout.orderDetails[pageGroup].cvv.value || ""
                      : undefined
                  }
                  onChange={e => {
                    let _orderDetails = props.checkout.orderDetails;
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.value;
                    let _tag = "CVV_Number";

                    props.modifyOrderDetails({
                      orderDetails: _orderDetails,
                      group: pageGroup,
                      key: _key,
                      value: _value,
                      tag: _tag
                    });
                  }}
                  size="3"
                  maxLength="3"
                  className="p-2 py-3 w-full mt-0 "
                />
              </div>
              <div className="mt-0 ml-2 absolute pin-r">
                <img
                  alt={props.misc.CFURL + "/logos/securitycode.png"}
                  src={props.misc.CFURL + "/logos/securitycode.png"}
                  width="40px"
                  className="opacity-50 pt-2 mr-1"
                />
              </div>
            </div>
          </div>
          <div className="w-200 p-2 mx-auto mt-6 text-center">
            {!props.checkout.processing ? (
              <button
                name="creditPay"
                type="submit"
                className="w-full font-bold text-white text-center p-2 font-extrabold bg-red-dark text-white text-xl hover:bg-grey-light cursor-pointer rounded"
              >
                Pay Now
              </button>
            ) : (
              <p>Processing your order...</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

let getCardType = number => {
  let ccType;
  if (number.match(new RegExp("^4")) != null) {
    ccType = "Visa";
  } else if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      number
    ) ||
    number.match(new RegExp("^5")) != null
  ) {
    ccType = "Mastercard";
  }
  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  // if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)){
  //     ccType = "Mastercard";
  // }
  // AMEX
  // re = new RegExp("^3[47]");
  // if (number.match(re) != null){
  //   ccType = "AMEX";
  // }
  return ccType;
};

export default CreditCard;
