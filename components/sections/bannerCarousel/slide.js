import Link from "next/link";

const slide = props => {
    let positionIndex = props.position + props.index;
    if (props.position + props.index >= props.misc.bannerSlidePositions.length) {
        positionIndex = props.position + props.index - props.misc.bannerSlidePositions.length;
    }
    let position = props.misc.bannerSlidePositions[positionIndex];
    let num = (props.index + 1).toString().padStart(2, "0");
    let style = {
        backgroundImage: "url(" + props.misc.CFURL + "/land_banner/" + num + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    return (
        <div
            onClick={() => {
                props.nextBannerSlide();
            }}
            style={{ ...position, ...style }}
            className={"xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-44 w-full z-0 absolute"}>
            {props.index == 2 ? (
                <Link prefetch href="/product" as={props.misc.banners[props.index - 1]}>
                    <button className="bannerBuyNow sm:hidden">Buy Now</button>
                </Link>
            ) : null}
        </div>
    );
};

export default slide;
