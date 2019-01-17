import React from "react";

const Description = props => {
  let _product = props.viewProduct.currentProduct;
  let _genes = _product.og.map((val, index) => {
    return (
      <span key={index} className="font-bold">
        {val}
      </span>
    );
  });
  return (
    <div>
      {/* <p className="p-2 text-justify">{_product.description}</p> */}
      {props.viewProduct.showFullDescription ? (
        <p className="p-2">
          {_product.description}
          <span
            onClick={() => props.toggleFullDescription()}
            className="text-red-dark cursor-pointer ml-1  hover:text-grey font-extrabold">
            Show Less
          </span>
        </p>
      ) : (
        <p className="p-2">
          {_product.description.substring(0, 350) + "..."}
          <span
            onClick={() => props.toggleFullDescription()}
            className="text-red-dark cursor-pointer  hover:text-grey font-extrabold">
            Show More
          </span>
        </p>
      )}
    </div>
  );
};

export default Description;
