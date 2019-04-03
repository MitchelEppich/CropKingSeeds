import React from "react";
import Caroulsel from "../germination/carousel/";
import Tips from "../germination/tips/";

const Germination = props => {
  // let backgroundImg = {
  //   background: "url('../../static/img/bg-germination.jpg') no-repeat",
  //   backgroundSize: "contain",
  //   backgroundPosition: "top",
  //   height: "560px"
  // };
  return (
    <div>
      <h1 className="mt-4 text-grey font-bold text-center text-3/5xl mx-auto w-full text-center mb-8">
        Germination
      </h1>
      <div className="pt-8 w-full germinationBackground mb-24">
        <Caroulsel {...props} />
      </div>
      {/* <div className="w-main mx-auto my-24 sm:mt-32">
        <p className="p-3 bg-red-light mx-auto w-95p font-bold text-white text-center uppercase hover:bg-red-dark shadow-md cursor-pointer">
          More Info
        </p>       
      </div> */}
    </div>
  );
};

export default Germination;
