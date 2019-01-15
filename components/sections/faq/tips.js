import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faShippingFast
} from "@fortawesome/free-solid-svg-icons";
import { height } from "window-size";

const Tips = props => {
  return (
    <div className="w-full p-2">
      <div className="w-full relative shadow">
        <div className="w-full absolute bg-red-dark">
          <h3 className="text-2xl text-white font-bold p-2 pl-6">
            {props.title}{" "}
          </h3>
        </div>
        <div className="h-300 overflow-y-auto w-full pt-12">
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            Who can buy Crop King Seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            How do we package and ship your Crop King Seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            Can you have seeds delivered without the authentic packaging?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            What is the price of shipping? And what are approximate delivery
            times?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            Which payment methods are accepted?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            What currency is used to purchase seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            How do you know we wont keep your money and not send your seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            Where is Crop King Seeds located and is our privacy guaranteed?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            How can my store/company become a distributor of Crop King Seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            Do we have a retail location to buy Crop King Seeds in person?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            What is the best method to germinate Crop King Seeds?
          </p>
          <p className="p-2 px-4 cursor-pointer hover:text-red-dark">
            What is the Crop King Guarantee?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
