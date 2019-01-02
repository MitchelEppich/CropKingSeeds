import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreditCard = props => {
  return (
    <div className="w-full mb-6">
      <div
        onClick={() => {
          props.setVisibleScreen({ input: "creditCard", clearAll: true });
        }}
        style={{
          border: "2px solid #e4e4e4",
          background: "#ffffff",
          color: "#191919"
        }}
        className="h-10 inline-flex w-full cursor-pointer"
      >
        <div className="w-4/5 p-2 flex items-center">
          <p>Pay with Credit Card</p>
        </div>
        <div className="w-1/5 justify-end flex">
          <div className="h-10 w-10 text-center py-2 bg-semi-transparent ">
            <FontAwesomeIcon icon={faAngleDown} className="justify-end fa-lg" />
          </div>
        </div>
      </div>
      {props.misc.visibleScreen.includes("creditCard") ? (
        <div className="w-600 mx-auto p-2">
          <div className="w-full mt-2 text-center opacity-50">
            <p className="text-sm p-2">Cards Accepted:</p>
            <img src="../static/img/cards.png" width="100px" />
          </div>
          <div className="w-full mt-6 text-center">
            <input
              type="number"
              placeholder="Credit Card Number..."
              className="p-2 w-full mt-6"
            />
          </div>
          <div className="w-full inline-flex mt-2">
            <div className="w-1/2 mr-1">
              <select placeholder="" className="p-2 w-full">
                <option value="" disabled selected>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="w-1/2 ml-1">
              <select placeholder="" className="p-2 w-full">
                <option value="" disabled selected>
                  Year
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>
          <div className="w-full inline-flex flex items-center">
            <div className="w-1/3 pt-2 mt-1">
              <select placeholder="" className="p-2 pt-3 w-full">
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
              </select>
            </div>

            <div style={{ width: "170px" }} className="ml-2 mt-2">
              <input
                type="number"
                placeholder="Security Code"
                size="3"
                maxLength="3"
                className="p-2 w-full mt-1 "
              />
            </div>
            <div className="mt-1 ml-2">
              <img
                src="../static/img/securitycode.png"
                width="50px"
                className="opacity-50 pt-1"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreditCard;
