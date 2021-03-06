import React from "react";

const MdArticles = props => {
  return (
    <div className="w-full lg:mt-6">
      <div className="w-full relative scale-item xl:pt-6">
        <img
          alt="../../static/img/hemp-seeds.jpg"
          src="../../static/img/hemp-seeds.jpg"
          className="object-cover xxl:h-400 xl:h-300 w-full"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute pin  mt-24 sm:mt-8 lg:mt-10 text-white sm:ml-0 ml-8">
          <h2 className="p-2 font-black shadow-text lg:text-2xl sm:text-xl text-3/5xl shadow-sm">
            Cannabis Now Legal 30% Globally
          </h2>
          <p className="sm:hidden shadow-text w-full text-justify p-2 sm:pr-4 pr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <span className="lg:hidden md:hidden sm:hidden">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
          <div className="ml-2 text-center p-3 w-32 mx-auto bg-red-darker font-bold rounded shadow-md text-white sm:mt-2 mt-8 cursor-pointer">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdArticles;
