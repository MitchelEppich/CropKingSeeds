import React from "react";

const Genetics = props => {
  return (
    <div className="mt-2 w-container mx-auto">
      <div className="inline-flex">
        <div className="border-red-light bg-red-light rounded p-2 px-2 mr-2 text-white">
          {props.viewProduct.currentProduct.genetic}
        </div>
        <div className="border-red-light bg-red-light rounded p-2 mx-2 text-white">
          {props.viewProduct.currentProduct.type}
        </div>
      </div>
    </div>
  );
};

export default Genetics;
