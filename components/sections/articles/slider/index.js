import React from "react";

const ArticleSlider = props => {
  return (
    <div className="w-full pt-0">
      <div className="w-full relative pt-0">
        <img
          src="../../static/img/hemp-seeds.jpg"
          className=""
          width=""
          style={{
            objectFit: "cover",
            height: "600px",
            width: "100%",
            filter: "brightness(0.5)"
          }}
        />
        <div className="absolute pin mt-24 text-white ml-12">
          <h2 className="p-2 font-bolder text-4xl shadow-sm">
            Newest Product Trends for 2019
          </h2>
          <p className="w-2/4 text-justify p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="ml-2 text-center p-3 w-32 bg-red text-white cursor-pointer hover:bg-red-dark">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlider;
