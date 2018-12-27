import React from "react"
import GeneElement from "./geneElement/"


const GenePreview = props => {
    return (
        <div 
        style={{
            width: "75%",
            display: "flex",                          
        }} 
        className="inline-flex w-full mx-auto relative mt-6 mb-6">
        <GeneElement/>
        <GeneElement/>
        <GeneElement/>
        <GeneElement/>
        </div>
    )
}

export default GenePreview