import Slide from "./slide";

const BannerCarousel = props => {
    let slides = props.misc.bannerSlides.map((val, index) => {
        return (
            <Slide
                key={index}
                {...props}
                position={props.misc.activeBannerSlide}
                index={index}
                style={val.style}
                color={val.color}
            />
        );
    });

    return (
        <div className="xxl:h-600 xl:h-400 lg:h-400 md:h-250 sm:mt-6 sm:h-250  w-full flex relative overflow-hidden">
            {slides}
            {props.misc.activeBannerSlide == 2 ? (
                <button className="bannerBuyNow sm:block md:hidden lg:hidden xl:hidden xxl:hidden">Buy Now</button>
            ) : null}
        </div>
    );
};

export default BannerCarousel;
