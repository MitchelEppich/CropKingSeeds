import React from "react"

const Post = props => {
    return (
        <div style={{
            width: "75%",
            boxShadow: "rgba(45, 44, 44, 0.22) 0px 12px 31px",
            display: "flex",
        }} className="mx-auto bg-white relative">
            <div className="w-500 p-4">
                <p className="text-center font-bold mt-2">Instructions</p>
                <h2 className="text-center font-bold text-4xl text-red-dark">Germination</h2>
                <p className="text-justify p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div style={{borderRadius: "5px", width: "100px"}} className="bg-red-dark text-white p-2 flex items-center h-12 mx-auto cursor-pointer">Read More</div>
            </div>
            <div className="absolute pin-r pin-t">
                <img style={{
                    transform: "translateX(55px) translateY(30px)"
                }} src="../static/img/cannbis.jpg" width="400px" />
            </div>
        </div>
    )
}

export default Post