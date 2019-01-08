import React from "react";

const Video = props => {
  return (
    <div className="w-full">
      <h2 className="p-2 font-extrabold bg-grey-lightest">
        Check it out our video about:
      </h2>

      <div className="pt-2">
        <iframe
          width="420px"
          height="240px"
          src="https://growreel.com/embed/5bc119ae674e3139208e8047"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Video;
