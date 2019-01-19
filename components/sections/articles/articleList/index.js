import React from "react";

const ArticleList = props => {
    return (
        <div className="w-full p-2">
            <h2
                style={{ borderBottom: "1px solid #cecece" }}
                className="p-2 font-black lg:text-xl xl:text-2xl text-3xl xl:mb-1 md:mb-2 sm:mb-2 mb-8">
                Harvesting Cannabis Articles
            </h2>

            <div className="p-2 scale-item cursor-pointer hover:text-red-dark">
                <h3 className="px-2 text-2xl font-extrabold ">Growing the Best Sativas Guide</h3>
                <p className="lg:hidden md:hidden sm:hidden text-black px-2 py-1">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
            <div className="p-2 scale-item cursor-pointer hover:text-red-dark">
                <h3 className="px-2 text-2xl font-extrabold ">Growing the Best Sativas Guide</h3>
                <p className="lg:hidden md:hidden sm:hidden text-black px-2 py-1">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
            <div className="p-2 scale-item cursor-pointer hover:text-red-dark">
                <h3 className="px-2 text-2xl font-extrabold ">Growing the Best Sativas Guide</h3>
                <p className="lg:hidden md:hidden sm:hidden text-black px-2 py-1">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
            <div className="xl:hidden lg:hidden md:hidden sm:hidden p-2 scale-item cursor-pointer hover:text-red-dark">
                <h3 className="px-2 text-2xl font-extrabold ">Growing the Best Sativas Guide</h3>
                <p className="text-black px-2 py-1">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
        </div>
    );
};

export default ArticleList;
