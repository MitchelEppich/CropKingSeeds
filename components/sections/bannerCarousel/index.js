import Slide from "./slide";
import Link from "next/link";
import Carousel from "../germination/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const BannerCarousel = props => {
<<<<<<< HEAD
    let slides = props.misc.banners.map((banner, index) => {
        return <Slide key={index} {...props} {...banner} position={props.misc.activeBannerSlide} index={index} />;
    });
=======
  let banners = props.misc.banners;
>>>>>>> 19f5cf04c60f3c8a95e88de6eeac27783c6089e2

  if (banners == null) return <div />;

  let slides = banners.map((val, index) => {
    return (
<<<<<<< HEAD
        <div className="xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:mt-6 sm:h-250  w-full flex relative overflow-hidden">
            {slides}
            {/* <Link prefetch href="/product" as={props.misc.banners[1]}>
                <button
                    onClick={e => e.stopPropagation()}
                    className="bannerBuyNow sm:block md:hidden lg:hidden xl:hidden xxl:hidden">
                    {Buy Now}
                </button>
            </Link> */}
        </div>
=======
      <Slide
        key={index}
        {...props}
        position={props.misc.activeBannerSlide}
        index={index}
      />
>>>>>>> 19f5cf04c60f3c8a95e88de6eeac27783c6089e2
    );
  });

  let bulletStyle = {
    height: "16px",
    width: "16px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    margin: "0 5px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)"
  };

  let bullets = banners.map((val, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          props.nextBannerSlide();
        }}
        className={`"cursor-pointer scale-item" ${
          props.misc.activeBannerSlide == index ? "bg-red-dark" : "bg-white"
        } `}
        style={bulletStyle}
      />
    );
  });

  return (
    <div className="w-full">
      <div className="xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:mt-6 sm:h-250 w-full flex relative overflow-hidden">
        {slides}

        {/* {props.misc.activeBannerSlide == 2 ? (
        <Link prefetch href="/product" as={banners[1]}>
          <button
            onClick={e => e.stopPropagation()}
            className="bannerBuyNow sm:block md:hidden lg:hidden xl:hidden xxl:hidden"
          >
            Buy Now
          </button>
        </Link>
      ) : null} */}
      </div>
      <div className="w-full block justify-center flex p-3">{bullets}</div>
    </div>
  );
};

export default BannerCarousel;
