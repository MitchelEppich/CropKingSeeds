import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import ReactImageMagnify from "react-image-magnify";

import gen from "random-seed";

const imageCarousel = props => {
  let images = props.viewProduct.currentProduct.images;

  let rand = gen.create(props.viewProduct.currentProduct.name);

  let imageThumbs = images.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() => props.setCurrentImage(index)}
        className="w-16 shadow text-center cursor-pointer my-1"
      >
        {/* <img className="h-20 my-2 mx-auto" src={image} />*/}
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "5rem",
            margin: "0.5rem auto",
            padding: "2.0rem 0rem 0rem 2.3rem"
          }}
        >
          {image.includes("package") ? (
            <img
              className="package-pins--product"
              src={`../static/img/strains/pins/${rand
                .intBetween(1, 7)
                .toString()
                .padStart(2, "0")}.png`}
            />
          ) : null}
        </div>
      </div>
    );
  });

  let imageZooms = images.map((image, index) => {
    return (
      <div className="w-full h-full mx-auto flex justify-center">
        <div
          className="w-500 h-full mx-auto flex justify-center"
          id="zoomedImg"
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                src: image,
                width: 260,
                height: 420
              },
              className: "imgCarousel",
              imageClassName: "imgCarousel",
              largeImage: {
                src: image,
                width: 800,
                height: 1400
              },
              lensStyle: {
                backgroundColor: "rgba(226, 226, 226, 0.09)"
              },
              enlargedImageContainerStyle: {
                backgroundColor: "#ffffff",
                marginLeft: "26px"
              },
              enlargedImageContainerDimensions: {
                width: "140%",
                height: "100%"
              },

              isHintEnabled: true
            }}
          />
          {image.includes("package") && window.innerWidth > 390 ? (
            <img
              className="package-pins--productZoom"
              src={`../static/img/strains/pins/${rand
                .intBetween(1, 7)
                .toString()
                .padStart(2, "0")}.png`}
            />
          ) : null}
        </div>
      </div>
    );
  });

  let currentImage = imageZooms[props.viewProduct.currentImage];

  return (
    <div className="w-full relative">
      <div className="w-full inline-flex justify-center flex">
        <div className="flex flex-wrap content-start w-16">{imageThumbs}</div>
        <div
          style={{
            textAlign: "center",
            marginLeft: "30px"
          }}
          className="w-3/4 mx-4 z-50 bg-white flex my-auto lg:my-0 md:my-0 sm:my-0"
        >
          {/* <div className="text-xs bg-almost-white shadow flex pin-b pin-r rounded absolute text-black p-1 mr-4 mb-6 opacity-75 md:hidden sm:hidden">
            <FontAwesomeIcon icon={faSearchPlus} className="mr-1" />
            Zoom
          </div> */}
          {currentImage}
        </div>
        <div className="bg-white md:hidden sm:hidden">
          <div id="portal" className="bg-white rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default imageCarousel;
