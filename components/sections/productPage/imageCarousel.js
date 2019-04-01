import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import gen from "random-seed";

const imageCarousel = props => {
  let images = props.viewProduct.currentProduct.images;
  let rand = gen.create(props.viewProduct.currentProduct.name);
  let imageThumbs = images.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() =>
          props.setCurrentImage({ max: images.length, index: index })
        }
        className="w-16 shadow text-center cursor-pointer sm:mx-2 md:mx-2 my-1"
      >
        <div
          style={{
            backgroundImage: "url(" + props.misc.CFURL + image + ")",
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
              src={`${props.misc.CFURL}/pins/${rand
                .intBetween(1, 7)
                .toString()
                .padStart(2, "0")}.png`}
            />
          ) : null}
        </div>
      </div>
    );
  });

  let indexImg = props.viewProduct.currentImage;
  let currentImage = props.misc.CFURL + images[indexImg];

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
          <div className="relative">
            <img
              src={currentImage}
              onClick={() => {
                if (props.misc.mediaSize == "sm") {
                  return null;
                }
                props.toggleImageZoom(true);
              }}
              className="cursor-pointer imgCarousel relative"
            />
            {currentImage.includes("package") ? (
              <img
                className="packagePinBig absolute"
                src={`${props.misc.CFURL}/pins/${rand
                  .intBetween(1, 7)
                  .toString()
                  .padStart(2, "0")}.png`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default imageCarousel;
