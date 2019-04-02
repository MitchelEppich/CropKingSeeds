import React from "react";
import Caroulsel from "../germination/carousel/";
import Tips from "../germination/tips/";

const Germination = props => {
  let backgroundImg = {
    background: "url('../../static/img/bg-germination.jpg') no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "top",
    height: "650px"
  };
  return (
    <div>
      <h1 className="mt-4 text-grey font-bold text-center text-3/5xl mx-auto w-full text-center mb-8">
        Germination
      </h1>
      <div className="pt-8 w-full" style={backgroundImg}>
        <Caroulsel {...props} />
      </div>
      <div className="w-main mx-auto mt-6">
        <Tips {...props} />
      </div>
    </div>
  );
};

export default Germination;
