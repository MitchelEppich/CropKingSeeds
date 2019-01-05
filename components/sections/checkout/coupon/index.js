import React from "react";

const Coupon = props => {
  return (
    <div className="w-full flex items-center h-10 inline-flex mt-4 p-2 mb-8">
      <div className="w-1/3">
        <div className="w-full">
          <input type="text" placeholder="Coupon Code" className="p-2 w-full" />
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-200 ml-2">
          <div className="p-2 bg-grey-light text-white font-bold text-center cursor-pointer hover:bg-grey ">
            Apply
          </div>
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <div className="w-200 ml-2">
          <div className="p-2 text-grey-light font-bold text-center">
            <h3>
              Subtotal: <span className="text-black">$560</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
