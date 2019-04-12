import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const imageZoom = props => {
  return (
    <div className="bg-black-transparent fixed w-screen h-screen z-999999 pin-t pin-l text-center">
      <div className="w-main mx-auto inline-flex justify-center flex mt-4">
        <div
          onClick={() =>
            props.setCurrentImage({
              max: props.viewProduct.currentProduct.images.length,
              index: props.viewProduct.currentImage - 1
            })
          }
          className="xxl:h-screen xl:h-screen h-400 sm:h-300 md:h-300 lg:h-500 w-24 items-center flex unselectable"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="fa-5x text-white cursor-pointer hover:text-red-light"
          />
        </div>
        <div className="w-600">
          <img
            alt="package cks"
            className="h-600 lg:h-500 md:h-400 sm:h-200 flex mx-auto inline-block mt-8 unselectable"
            src={
              props.misc.CFURL +
              props.viewProduct.currentProduct.images[
                props.viewProduct.currentImage
              ]
            }
          />
        </div>
        <div
          onClick={() =>
            props.setCurrentImage({
              max: props.viewProduct.currentProduct.images.length,
              index: props.viewProduct.currentImage + 1
            })
          }
          className="xxl:h-screen xl:h-screen h-400 sm:h-300 md:h-300 lg:h-500 w-24 items-center flex unselectable justify-end"
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="fa-5x hover:text-red-light text-white cursor-pointer"
          />
        </div>

        <div
          onClick={() => props.toggleImageZoom(false)}
          className="absolute pin-t pin-r mt-4 mr-64 xl:mr-32 lg:mr-10 md:mr-10 sm:mr-4 unselectable"
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="fa-3x text-white hover:text-red-light cursor-pointer scale-item"
          />
        </div>
      </div>
    </div>
  );
};
export default imageZoom;
