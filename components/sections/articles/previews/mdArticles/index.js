import React from "react"

const MdArticles = props => {
    return (
        <div className="w-full">
            <div className="w-full relative scale-item">                
                <img src="../../static/img/hemp-seeds.jpg" 
                className="" 
                width="" 
                style={{
                    objectFit: "cover",                    
                    height: "420px",
                    width: "100%",
                    filter: "brightness(0.5)"
                }}/>
                <div className="absolute pin mt-24 text-white ml-8">
                    <h2 className="p-2 font-black text-3/5xl shadow-sm">Cannabis Now Legal 30% Globally</h2>
                    <p className="w-full text-justify p-2 pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="ml-2 text-center p-3 w-32 mt-8 bg-red text-white cursor-pointer">Read More</div>
                </div>
            </div>
        </div>
    )
}

export default MdArticles