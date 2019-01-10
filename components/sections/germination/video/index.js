import React from "react";

const Video = props => {
    return (
        <div className="w-1/2">
            <h2 className="p-2 font-extrabold bg-grey-lightest">Check out our germination video:</h2>

            <div className="pt-2 text-center">
                <iframe
                    width="420"
                    height="240"
                    src="https://growreel.com/embed/5bc119ae674e3139208e8047"
                    frameBorder="0"
                    autoplay="false"
                />
            </div>
        </div>
    );
};

export default Video;
