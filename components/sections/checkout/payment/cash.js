import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cash = props => {
  return (
    <div className="w-full mb-6 ">
      <div
        onClick={() => {
          props.setVisibleScreen({ input: "cash", clearAll: true });
        }}
        style={{
          border: "2px solid #e4e4e4",
          background: "#ffffff",
          color: "#191919"
        }}
        className="h-10 mb-2 inline-flex w-full cursor-pointer"
      >
        <div className="w-4/5 p-2 flex items-center">
          <p>Pay with Cash</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen != null &&
      props.misc.visibleScreen.includes("cash") ? (
        <div className="w-full p-2">
          <div className="w-full mt-2 text-center">
            <p className="text-sm p-2">
              Proceeding will take you to the instructions on how to pay with
              cash.
            </p>
          </div>
          <div className="w-200 p-2 mx-auto mt-6 text-center">
            <p className="text-center p-2 bg-grey text-white hover:bg-grey-light cursor-pointer">
              Pay Now
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cash;
