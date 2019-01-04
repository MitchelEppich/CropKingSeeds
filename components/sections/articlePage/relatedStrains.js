import React from "react";

const RelatedStrains = props => {
  return (
    <div>
      <h3 className="text-3xl mt-6 p-2">Related Strains</h3>
      <div className="w-full p-2 inline-flex mt-2 flex-wrap">
        <div className="w-2/5 mx-2 p-2">
          <img
            src="../../static/img/gelato-strain.png"
            className="scale-item cursor-pointer"
          />
        </div>
        <div className="w-2/5 mx-2 p-2">
          <img
            src="../../static/img/gelato-strain.png"
            className="scale-item cursor-pointer"
          />
        </div>
        <div className="w-2/5 mx-2 p-2">
          <img
            src="../../static/img/gelato-strain.png"
            className="scale-item cursor-pointer"
          />
        </div>
        <div className="w-2/5 mx-2 p-2">
          <img
            src="../../static/img/gelato-strain.png"
            className="scale-item cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedStrains;
