import Slide from "./slide";
import Link from "next/link";
import Carousel from "../germination/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const BannerCarousel = props => {
  let banners = props.misc.banners.map((banner, index) => {
    return (
      <Slide
        key={index}
        {...props}
        {...banner}
        position={props.misc.activeBannerSlide}
        index={index}
      />
    );
  });

  if (banners == null) return <div />;

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
          props.changeBannerSlide({
            bannersLength: props.misc.banners.length,
            index: index,
            direction: 0
          });
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
        {banners}

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
