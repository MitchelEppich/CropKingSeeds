import Slide from "./slide";

const BannerCarousel = props => {
    let slides = props.misc.bannerSlides.map((val,index) => {
        return (
            <Slide key={index} {...props} position={props.misc.activeBannerSlide} index={index} style={val.style} color={val.color} />
        );
    });

    return (
        <div className="h-500 w-full bg-green-light flex relative overflow-hidden">
           {slides}
        </div>
    );
}

export default BannerCarousel;
