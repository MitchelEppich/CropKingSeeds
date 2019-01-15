import React from "react";
import TipsBox from "./tips";
import PopUpSection from "./popUpSection";

const FAQ = props => {
  return (
    <div className="w-full p-2">
      <div>
        <h1 className="text-3/5xl font-extrabold mb-6 p-2">
          Frequently Asked Question
        </h1>
      </div>
      <div className="w-full">
        <div className="mt-4 p-4 inline-flex items-center flex w-full">
          <div className="w-7/8">
            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full p-2 ml-1"
              id="search"
              name="search"
            />
          </div>
          <div className="w-1/8 text-white ml-2">
            <div className="text-xl bg-red-dark font-bold p-2 px-8 text-center cursor-pointer hover:bg-grey-light">
              Search
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-extrabold p-2 ml-3 text-3xl">
            Most Popular Questions
          </p>
        </div>
        <div className="w-full p-2 inline-flex">
          <div className="w-1/3 mr-2">
            <TipsBox {...props} title="How to Buy?" />
          </div>
          <div className="w-1/3 mr-2">
            <TipsBox {...props} title="How to Germinate?" />
          </div>
          <div className="w-1/3">
            <TipsBox {...props} title="Delivery" />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <PopUpSection {...props} title="Delivery / Payments" />
        <PopUpSection {...props} title="Security / Policy" />
        <PopUpSection {...props} title="Return / Refunds" />
      </div>
    </div>
  );
};

export default FAQ;
