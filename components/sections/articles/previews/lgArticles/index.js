import React from "react"

const LgArticles = props => {
    return (
        <div className="w-full inline-flex scale-item">
            <div className="w-1/2 relative">
                <img src="../../static/img/LGimage-1.jpg" className="absolute mt-6"/>
            </div>
            <div className="w-1/2 py-2 px-10 mt-4 relative pb-8">
                <h2 className="px-2 text-3/5xl font-black">How to Grow Indica in Winter</h2>
                <h3 className="px-2 text-3xl">Guide to Growing Cannabis off Season</h3>
                <p className="px-2"><small>Jan 19, 2019 Posted in Growing Marijuana</small></p>
                <p className="p-2 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="p-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div style={{marginBottom: "-30px", width: "150px"}} className="bg-red text-white text-center p-3 w-32 mx-auto cursor-pointer absolute pin-b pin-x h-12 pt-4">Read More</div>
            </div>
        </div>
    )
}

export default LgArticles