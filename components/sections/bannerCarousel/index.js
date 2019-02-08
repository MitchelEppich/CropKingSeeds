import Slide from "./slide";
import Link from "next/link";

const BannerCarousel = props => {
    let slides = props.misc.banners.map((val, index) => {
        return <Slide key={index} {...props} position={props.misc.activeBannerSlide} index={index} />;
    });

    return (
        <div className="xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:mt-6 sm:h-250  w-full flex relative overflow-hidden">
            {slides}
            {props.misc.activeBannerSlide == 2 ? (
                <Link prefetch href="/product" as={props.misc.banners[1]}>
                    <button className="bannerBuyNow sm:block md:hidden lg:hidden xl:hidden xxl:hidden">Buy Now</button>
                </Link>
            ) : null}
        </div>
    );
};

export default BannerCarousel;
