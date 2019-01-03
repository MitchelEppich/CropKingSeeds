import React from "react"

const Confirmation = props => {
    return (
        <div className="w-full mt-6 text-center">
            <h1 className="text-5xl font-extrabold mt-12 mb-4 text-black">Thank You!</h1>
            <h4 className="font-extrabold mb-8">Order Number, Details and Payment Instructions are Below</h4>
            <img src="../static/img/cks-confirmation.png" className="text-center" width="500px" />
            <h4 className="text-center mt-8 font-extrabold">January, 17, 2019</h4>
            <h2 className="mt-4">Order # 867442129</h2>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Confirmation