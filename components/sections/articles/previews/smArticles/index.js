import React from "react"

const SmArticles = props => {
    return (
        <div 
        style={{
            boxShadow: "rgba(16, 16, 16, 0.17) 0px 0px 10px"
            }} 
        className="w-full text-center mx-6 relative scale-item">
            <div className="bg-white h-500">
                <img 
                    style={{
                        objectFit: "cover",
                        height: "260px",
                        width: "100%",                       
                    }}
                    src={`../../static/img/${props.src}`} />
                    <h4 className="mt-2">Instructions</h4>
                    <h2 className="text-red font-extrabold p-2">How to Grow Cannabis</h2>
                    <p className="mt-4 p-2 text-justify w-4/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div style={{
                marginBottom: "-20px"
            }} className="p-3 bg-red text-white text-center absolute-center pin-b w-32 h-10 cursor-pointer">
                Read More
            </div>
        </div>
    )
}

export default SmArticles