import React from "react";
import { ImageZoom } from "react-simple-image-zoom";

const imageCarousel = props => {
  let images = props.viewProduct.currentProduct.images;
  let imageThumbs = images.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() => props.setCurrentImage(index)}
        className="w-16 shadow text-center cursor-pointer my-1">
        <img className="h-20 my-2 mx-auto" src={image} />
      </div>
    );
  });
  let imageZooms = images.map((image, index) => {
    return (
      <ImageZoom
        key={index}
        portalId="portal"
        largeImgSrc={currentImage}
        imageWidth={1080}
        imageHeight={860}
        zoomContainerWidth={540}
        activeClass="my-active"
        portalStyle={Object.assign(
          { ...ImageZoom.defaultPortalStyle },
          {
            top: "0px",
            background: "white",
            borderRadius: "3px",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 22px"
          }
        )}
        zoomScale={1}
        responsive={true}>
        <img src={image} style={{ height: "400px" }} />
      </ImageZoom>
    );
  });

  let currentImage = imageZooms[props.viewProduct.currentImage];

  return (
    <div className="w-full relative">
      <div className="w-full h-400 sm:h-300 inline-flex md:w-400 sm:w-300 justify-center flex">
        <div className="flex flex-wrap content-start w-16">{imageThumbs}</div>
        <div
          style={{
            width: "300px",
            height: "420px",
            textAlign: "center",
            marginLeft: "30px"
          }}
          className="w-3/4 mx-4 z-50 bg-white">
          {currentImage}
        </div>
        <div className="bg-white">
          <div id="portal" className="bg-white rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default imageCarousel;
