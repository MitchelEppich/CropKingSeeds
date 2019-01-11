import React from "react";
import TipsBox from "./tips";
import PopUpSection from "./popUpSection";

const FAQ = props => {
  return (
    <div className="w-full p-2">
      <div>
        <h1 className="text-3/5xl font-extrabold mb-6 p-2">FAQ</h1>
      </div>
      <div className="w-container mx-auto">
        <p className="font-extrabold p-2 text-2xl">Most Popular Questions</p>
        <div className="w-full p-2 inline-flex">
          <div className="w-1/3 mr-2">
            <TipsBox {...props} />
          </div>
          <div className="w-1/3 mr-2">
            <TipsBox {...props} />
          </div>
          <div className="w-1/3">
            <TipsBox {...props} />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <PopUpSection {...props} />
        <PopUpSection {...props} />
        <PopUpSection {...props} />
        <PopUpSection {...props} />
      </div>
    </div>
  );
};

export default FAQ;
