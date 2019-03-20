import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <button
              name="bitcoinPay"
              type="submit"
              className="w-full font-bold text-white text-center p-2 font-extrabold bg-red-dark text-white text-xl hover:bg-grey-light cursor-pointer rounded"
            >
              Pay Now
            </button>
          </div>
          <div className="w-main mx-auto mt-4">
            <p
              onClick={() => {
                props.setVisibleScreen({ input: "bitcoinPaymentInstructions" });
              }}
              className="underline font-bold w-full text-center p-2 text-grey-light cursor-pointer hover:text-red-light"
            >
              How to Pay using Bitcoin - Payment Instructions
            </p>
            {props.misc.visibleScreen.includes("bitcoinPaymentInstructions") ? (
              <div className="mt-2 px-2">
                <p className="text-justify">
                  Incididunt velit eiusmod cupidatat consectetur sit velit eu
                  irure velit. Excepteur qui nostrud excepteur reprehenderit
                  sint incididunt. Enim sunt non irure consequat commodo mollit
                  commodo cupidatat ullamco eu consequat. Eiusmod Lorem
                  voluptate proident non excepteur ex aliqua culpa est eu.
                  Aliqua incididunt dolore esse non sunt labore et. Aliquip sunt
                  sunt laboris fugiat aute excepteur laboris consectetur aliqua
                  cillum ullamco est nulla. Fugiat qui minim adipisicing non
                  consequat ea in anim. Enim esse occaecat fugiat fugiat eiusmod
                  ut.
                </p>
                <p>
                  Non aliquip minim reprehenderit ad. Nulla commodo nostrud
                  exercitation occaecat ad excepteur. Nostrud elit ea voluptate
                  duis officia sunt Lorem. Laborum Lorem magna magna do nulla
                  tempor qui aute elit mollit. Consectetur Lorem esse cillum
                  voluptate eiusmod ea ex veniam duis reprehenderit. Ad quis
                  amet deserunt laborum qui dolor Lorem deserunt. Aute aliqua
                  minim aute laborum sint dolor eiusmod ullamco officia do ea
                  laborum commodo sint. Consectetur reprehenderit Lorem laboris
                  consectetur ipsum. Fugiat mollit sint ex in ad ut veniam
                  tempor qui.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Bitcoin;
