import React from "react";
import THCCharts from "./thc";

const Charts = props => {
  return (
    <div>
      <div className="text-center w-full pb-8">
        <h1 className="mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center">
          Strain Charts
        </h1>
      </div>

      <div className="mt-2 w-full">
        <THCCharts {...props} />
      </div>
    </div>
  );
};

export default Charts;
