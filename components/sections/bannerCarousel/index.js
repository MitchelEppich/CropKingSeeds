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

    return <div className="bg-green h-500 sm:h-200 w-full flex relative overflow-hidden">{slides}</div>;
};

export default BannerCarousel;
