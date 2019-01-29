import React from "react";

const ArticleSlider = props => {
  return (
    <div className="w-full pt-0">
      <div className="w-full relative pt-0">
        <img src="../../static/img/hemp-seeds.jpg" className="articleSlider" />
        <div className="absolute pin mt-24 sm:mt-12 md:mt-8 sm:pr-4 md:ml-4 md:pr-4  lg:mt-10 xl:mt-12 text-white ml-12 sm:ml-6">
          <h2 className="pl-2 font-bolder sm:text-2xl md:text-2xl text-4xl lg:text-3xl xl:text-3xl shadow-text">
            Newest Product Trends for 2019
          </h2>
          <p className="w-1/2 shadow-text sm:w-full md:w-full text-justify px-2 pb-2 my-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <span className="sm:hidden ">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
          <div className="ml-2 text-center p-3 w-32 bg-red-darker font-bold rounded shadow-md text-white cursor-pointer hover:bg-red-dark">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlider;
