import React from "react";
import { faAngleDown, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import moment from "moment";

import StringMask from "string-mask";

const PrepaidCard = props => {
  let pageGroup = "payment";
  let paymentType = "Credit Card";

  let ccNumberFormat = new StringMask("0000-0000-0000-0000");

  return (
    <div className="w-full mb-6">
      <div
        onClick={() => {
          props.setVisibleScreen({ input: "prepaidCard", group: "payment" });
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
          <p className="">Pay with a Prepaid Card</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen.includes("payment::prepaidCard") ? (
        <div className="w-600 sm:w-full mx-auto p-2">
          {/* <div className="w-full mt-2 text-center opacity-75">
            <p className="text-sm p-2">Cards Accepted:</p>
            <img src="../static/img/cards.png" width="100px" />
          </div> */}
          <div className="w-full mt-2 text-center relative inline-flex">
            <div className="w-full">
              <input
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
                }}
                placeholder="Prepaid Card Number ..."
                className="p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full inline-flex mt-2 sm:flex-col">
            <div className="w-1/3 mr-1 inline-flex sm:w-full sm:mx-0">
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
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="w-1/3 ml-1 inline-flex sm:mx-0 sm:mt-2 sm:w-full">
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
                      <option value={_year.toString().slice(2)}>{_year}</option>
                    );
                  }
                  return arr;
                })()}
              </select>
            </div>
            <div className="w-1/3 inline-flex sm:w-full sm:mt-2 relative">
              <div className="ml-2 sm:ml-0 w-full">
                <input
                  type="text"
                  placeholder="Security Code"
                  id="cvv"
                  value={
                    props.checkout.orderDetails[pageGroup] != null &&
                    props.checkout.orderDetails[pageGroup].cvv != null
                      ? props.checkout.orderDetails[pageGroup].cvv.value || ""
                      : undefined
                  }
                  required
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
            <p className="text-center p-2 font-extrabold bg-red-dark text-white hover:bg-grey-light cursor-pointer rounded">
              <button
                name="prepaidCreditPay"
                type="submit"
                className="font-bold text-white"
              >
                Pay Now
              </button>
            </p>
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

export default PrepaidCard;
