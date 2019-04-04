import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoaderCheckout from "../loaderCheckout";

import LoaderCheckout from "../loaderCheckout";

const Bitcoin = props => {
  let pageGroup = "payment";
  let paymentType = "Bitcoin";

  // let showBitcoinData = () => {
  //   let _data = props.checkout.bitcoinData;

  //   if (_data == null || Object.keys(_data).length == 0) return null;
  //   return <p>{`${_data.value} ${_data.currency} = ${_data.rate} ₿`}</p>;
  // };

  return (
    <div className="w-full mb-6">
      <div
        onClick={() => {
          props.setVisibleScreen({
            input: paymentType,
            group: "payment"
          });
          // props.getBitcoinData({ value: "1", currency: "USD" });
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
          <p className="">Pay with Bitcoin</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen != null &&
      props.misc.visibleScreen.includes("payment::" + paymentType) ? (
        <div className="w-full p-2">
          <div className="w-full mt-2 text-center">
            <p className="text-sm p-2">
              Proceeding will take you to Bitcoin to log in to your account.
            </p>
            <img
              alt={props.misc.CFURL + "/logos/bitcoin_logo.png"}
              src={props.misc.CFURL + "/logos/bitcoin_logo.png"}
              width="200px"
              className="mt-4 cursor-pointer"
            />
          </div>
          <div className="w-200 p-2 mx-auto mt-6 text-center">
            {/* <button
              name="bitcoinPay"
              type="submit"
              className="w-full font-bold text-white text-center p-2 font-extrabold bg-red-dark text-white text-xl hover:bg-grey-light cursor-pointer rounded"
            >
              Pay Now
            </button> */}
            <p>Bitcoin Payment Services Are Temporarily Disabled</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Bitcoin;
