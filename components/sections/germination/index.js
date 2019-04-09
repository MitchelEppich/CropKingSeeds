import React from "react";
import Caroulsel from "../germination/carousel/";
import ExtraInfo from "./extraInfo";

const Germination = props => {
  return (
    <div>
      <h1 className="mt-4 text-grey font-bold text-center text-3/5xl mx-auto w-full text-center mb-8">
        Germination
      </h1>
      <div className="germinationBackground">
        <p className="w-main mx-auto xxl:w-full text-center sm:bg-white md:bg-white font-bold text-lg text-grey-light uppercase my-4">
          By following these steps we guarantee a germination rate of over 80%
          on our seeds.
        </p>

        <div className="pt-1 w-full mb-16">
          <Caroulsel {...props} />
        </div>
        <div className="w-full mx-auto h-full">
          <ExtraInfo {...props} />
        </div>
      </div>
    </div>
  );
};

export default Germination;
