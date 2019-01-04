import React from "react";

const ImgHeader = props => {
  let imgHeader = {
    height: "400px",
    width: "100%",
    background: "url('../../static/img/LGimage-1.jpg') no-repeat fixed",
    backgroundSize: "cover",
    boxShadow: "rgba(0, 0, 0, 0.52) 0px 2px 11px"
  };
  return (
    <div className="w-full relative">
      <div className="mb-4 absolute" style={imgHeader} />
    </div>
  );
};

export default ImgHeader;
