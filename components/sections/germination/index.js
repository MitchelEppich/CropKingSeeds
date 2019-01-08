import React from "react";
import Caroussel from "./caroussel";
import Tips from "./tips";
import Video from "./video";
import OtherProducts from "../productPage/otherProducts";

const Germination = props => {
  return (
    <div>
      <Caroussel />
      <div className="w-full inline-flex mt-4">
        <div className="w-2/3 inline-flex">
          <div className="w-1/2">
            <Tips />
            <Tips />
            <Tips />
          </div>
          <div className="w-1/2">
            <Tips />
            <Tips />
            <Tips />
          </div>
        </div>
        <div className="w-1/3">
          <Video />
        </div>
      </div>
      <div className="w-full">
        <OtherProducts {...props} />
      </div>
    </div>
  );
};

export default Germination;
