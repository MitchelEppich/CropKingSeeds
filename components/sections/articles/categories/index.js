import React from "react";

const CategoriesList = props => {
  return (
    <div className="w-container mx-auto">
      <div className="w-full p-2">
        <h2 className="text-3/5xl font-extrabold p-2 text-center">
          Article Categories
        </h2>
      </div>
      <div className="w-full mt-2 text-center">
        <ul className="inline-flex sm:flex-wrap md:flex-wrap justify-start p-2 mx-2">
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>Growing Cannabis</h3>
          </li>
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>Grow Lights</h3>
          </li>{" "}
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>How To</h3>
          </li>
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>Cannabis Strains</h3>
          </li>
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>Grow Boxes</h3>
          </li>
          <li className="p-1 font-bolder mx-4 md:my-2 md:mx-2 cursor-pointer text-red-dark scale-item">
            <h3>Products Reviews</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
