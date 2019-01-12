import React from "react";

const Video = props => {
    return (
        <div className="w-1/2">
            <div className="pt-2 text-center">
                <iframe
                    width="497.78"
                    height="280"
                    src="https://growreel.com/embed/5bc119ae674e3139208e8047"
                    frameBorder="0"
                    autoPlay={false}
                />
            </div>
        </div>
    );
};

export default Video;
