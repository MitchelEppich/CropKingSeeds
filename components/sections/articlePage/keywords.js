import React from "react";

const Keywords = props => {
    return (
        <div className="w-full p-2 px-6 border-t-2 border-grey-lightest">
            <h4 className="text-red-dark font-extrabold py-2 mx-1">Keywords:</h4>
            <div className="text-sm w-full text-left">
                <ul className="inline-flex cursor-pointer ml-0 pl-0">
                    <li className="step-text mx-1">Cannabis,</li>
                    <li className="step-text mx-1">Growing,</li>
                    <li className="step-text mx-1">How To,</li>
                    <li className="step-text mx-1">Marijuana Seeds</li>
                </ul>
            </div>
        </div>
    );
};

export default Keywords;
