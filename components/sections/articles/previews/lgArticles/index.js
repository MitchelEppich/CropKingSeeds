import React from "react";

const LgArticles = props => {
    return (
        <div className="xxl:mt-64 xxl:pt-48 xl:mt-12 lg:pt-0 md:pt-0 md:mt-0 lg:mt-12 w-full scale-item flex-wrap flex justify-around ">
            <div className="w-1/2 sm:w-full md:w-full xl:pt-2 relative">
                <img
                    src="../../static/img/LGimage-1.jpg"
                    className="absolute sm:mt-0 sm:w-full sm:relative sm:h-200 md:w-full md:relative md:h-250 lg:h-250 xl:h-300 h-400 lg:mt-0 md:mt-0 mt-6"
                />
            </div>
            <div className="w-1/2 sm:w-full md:w-full py-2 px-10 mt-4 relative pb-8">
                <h2 className="px-2 lg:text-2xl sm:text-2xl text-3/5xl font-black">How to Grow Indica in Winter</h2>
                <h3 className="px-2 text-3xllg:text-lg ">Guide to Growing Cannabis off Season</h3>
                <p className="px-2">
                    <small>Jan 19, 2019 Posted in Growing Marijuana</small>
                </p>
                <p className="p-2 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{" "}
                    <span className="md:hidden">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </span>{" "}
                    <span className="lg:hidden md:hidden sm:hidden ">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </span>
                </p>
                <div
                    style={{ marginBottom: "-30px", width: "150px" }}
                    className="bg-red text-white text-center p-3 w-32 mx-auto cursor-pointer absolute pin-b pin-x h-12 pt-4">
                    Read More
                </div>
            </div>
        </div>
    );
};

export default LgArticles;
