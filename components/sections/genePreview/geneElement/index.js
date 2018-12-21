import React from "react"

const GeneElement = props => {
    return (
        <div style={{ 
            backgroundImage: "url(../static/img/CBD_preview.png)",
            width: "360px",
            height: "450px",
            }}
        className="relative">
            <div className="absolute pin-b w-full text-center font-bold">
            <h3 style={{fontSize: "35px", textShadow: "1px 2px 15px #272727"}} className="text-white">Sativa</h3></div>
        </div>
    )
}

export default GeneElement