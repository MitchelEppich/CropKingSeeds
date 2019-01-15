const slide = props => {
    let positionIndex = props.position + props.index;
    if (props.position + props.index >= props.misc.bannerSlides.length) {
        positionIndex = props.position + props.index - props.misc.bannerSlides.length;
    }
    let position = props.misc.bannerSlidePositions[positionIndex];

    return (
        <div
            onClick={() => {
                props.nextBannerSlide();
            }}
            style={{ ...position, ...props.style }}
            className={"xxl:h-600 xl:h-400 lg:h-400 md:h-250 sm:h-full w-full z-0 absolute bg-" + props.color}>
            {props.index == 2 ? <button className="bannerBuyNow sm:hidden">Buy Now</button> : null}
        </div>
    );
};

export default slide;
