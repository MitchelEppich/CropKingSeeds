import React from "react";

const SmArticles = props => {
    return (
        <div
            style={{ boxShadow: "rgba(16, 16, 16, 0.17) 0px 0px 10px" }}
            className="xl:w-300 sm:w-200 md:w-250 md:mb-12 lg:w-250 text-center mx-6 my-4 relative scale-item">
            <div className="bg-white sm:h-250 md:h-250 lg:h-250 h-500 xl:h-300 ">
                <img
                    className="h-250 sm:h-125 md:h-125 lg:h-125 xl:h-150 w-full object-cover"
                    src={`../../static/img/${props.src}`}
                />
                <h2 className="text-red font-extrabold p-2 sm:text-lg sm:px-4 ">How to Grow Cannabis</h2>

                <h4 className="sm:text-sm">Instructions</h4>
                <p className="xl:hidden lg:hidden md:hidden sm:hidden mt-4 p-2 text-justify px-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div
                style={{ marginBottom: "-20px" }}
                className=" p-3 bg-red text-white text-center absolute-center ml-32 pin-b w-32 h-10 cursor-pointer">
                Read More
            </div>
        </div>
    );
};

export default SmArticles;
