import Slide from "./slide";
import Link from "next/link";
import Carousel from "../germination/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const BannerCarousel = props => {
  let banners = props.misc.banners;
  if (banners == null) return <div />;

  banners = banners.map((banner, index) => {
    let positionIndex = props.misc.activeBannerSlide + index;
    if (
      props.misc.activeBannerSlide + index >=
      props.misc.bannerSlidePositions.length
    ) {
      positionIndex =
        props.misc.activeBannerSlide +
        index -
        props.misc.bannerSlidePositions.length;
    }
    return (
      <div>
        <div className="w-24 arrowsBanner cursor-pointer ml-4 justify-start flex items-center absolute pin-y pin-l z-999 text-white">
          <FontAwesomeIcon
            onClick={() => {
              props.changeBannerSlide({
                bannersLength: props.misc.banners.length,
                index: props.misc.activeBannerSlide + 1,
                direction: 0
              });
            }}
            icon={faAngleLeft}
            className="fa-4x"
          />
        </div>
        <div className="w-full">
          {" "}
          <Slide
            key={index}
            {...props}
            {...banner}
            position={props.misc.activeBannerSlide}
            index={index}
          />
        </div>
        <div
          onClick={() => {
            props.changeBannerSlide({
              bannersLength: props.misc.banners.length,
              index: props.misc.activeBannerSlide - 1,
              direction: -1
            });
          }}
          className="w-24 arrowsBanner cursor-pointer mr-4 justify-end flex items-center absolute pin-y pin-r z-999 text-white"
        >
          <FontAwesomeIcon icon={faAngleRight} className="fa-4x" />
        </div>
      </div>
    );
  });

  let bulletStyle = {
    height: "16px",
    width: "16px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    margin: "0 5px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)"
  };

  // let bullets = [],
  //     j = 0;
  // for (let i = 7; i > 0; i--) {
  //     bullets.push(
  //         <div
  //             key={j}
  //             onClick={() => {
  //                 props.changeBannerSlide({
  //                     bannersLength: props.misc.banners.length,
  //                     index: j,
  //                     direction: 0
  //                 });
  //             }}
  //             className={`cursor-pointer scale-item ${
  //                 props.misc.activeBannerSlide == j ? "bg-red-dark" : "bg-white"
  //             } `}
  //             style={bulletStyle}
  //         />
  //     );
  //     j++;
  // }
  let bullets = banners.map((val, index) => {
    return (
      <div
        key={index + 1}
        onClick={() => {
          props.changeBannerSlide({
            bannersLength: props.misc.banners.length,
            index: index + 1,
            direction: 0
          });
        }}
        className={`cursor-pointer scale-item ${
          props.misc.activeBannerSlide == index + 1 ? "bg-red-dark" : "bg-white"
        } `}
        style={bulletStyle}
      />
    );
  });
  bullets = [
    ...bullets.slice(bullets.length / 2),
    ...bullets.slice(0, bullets.length / 2)
  ].reverse();

  return (
    <div className="w-full">
      <div className="xxl:h-600 overflow-hidden xl:h-400 lg:h-300 md:h-250 sm:mt-6 sm:h-150 w-full relative  inline-flex">
        <div className="w-full">{banners}</div>
      </div>
      <div className="w-full block justify-center flex p-3 mb-2 opacity-75">
        {bullets}
      </div>
    </div>
  );
};

export default BannerCarousel;
