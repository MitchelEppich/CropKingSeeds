import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import ReactImageMagnify from "react-image-magnify";
import Lightbox from "react-images";

const imageCarousel = props => {
  let images = props.viewProduct.currentProduct.images;

  let imageThumbs = images.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() => props.setCurrentImage(index)}
        className="w-16 shadow text-center cursor-pointer sm:mx-2 md:mx-2 my-1"
      >
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
              src="../static/img/strains/pins/OrangeCrown_150.png"
            />
          ) : null}
        </div>
      </div>
    );
  });

  let indexImg = props.viewProduct.currentImage;
  let currentImages = images[indexImg];

  return (
    <div className="w-full relative">
      <div className="w-full inline-flex justify-center flex md:flex-col-reverse sm:flex-col-reverse">
        <div className="flex flex-wrap content-start w-16 sm:w-full md:w-full sm:inline-flex md:inline-flex sm:justify-center md:justify-center lg:ml-20 md:pt-6 sm:pt-6">
          {imageThumbs}
        </div>
        <div
          style={{
            textAlign: "center"
          }}
          className="w-3/4 mx-4 z-50 bg-white flex my-auto justify-center lg:justify-center lg:my-0 md:my-0 sm:my-0 sm:w-full md:w-full sm:mx-0 md:mx-0 md:justify-center sm:justify-center"
        >
          {/* <div className="text-xs bg-almost-white shadow flex pin-b pin-r rounded absolute text-black p-1 mr-4 mb-6 opacity-75 md:hidden sm:hidden">
            <FontAwesomeIcon icon={faSearchPlus} className="mr-1" />
            Zoom
          </div> */}
          <div className="relative">
            <img
              src={currentImages}
              onClick={() => {
                props.toggleStateLightbox();
              }}
              className="cursor-pointer imgCarousel relative"
            />
            {currentImages.includes("package") ? (
              <img
                className="packagePinBig absolute"
                src="../static/img/strains/pins/OrangeCrown_150.png"
              />
            ) : null}
          </div>
        </div>
        <div className="bg-white md:hidden sm:hidden">
          <div className="bg-white rounded-lg shadow-lg">
            <Lightbox
              showImageCount={false}
              backdropClosesModal={true}
              images={[
                {
                  src: images[indexImg]
                },
                {
                  src: images[indexImg]
                }
              ]}
              srcSet={`${images[0]} ", " ${images[1]}`}
              isOpen={props.viewProduct.isOpenLightbox}
              onClickPrev={() => {
                if (indexImg > 0) {
                  props.setCurrentImage(indexImg - 1);
                } else {
                  props.setCurrentImage(0);
                }
              }}
              onClickNext={() => {
                if (indexImg < 1) {
                  props.setCurrentImage(indexImg + 1);
                } else {
                  props.setCurrentImage(0);
                }
              }}
              onClose={() => {
                props.toggleStateLightbox();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default imageCarousel;
