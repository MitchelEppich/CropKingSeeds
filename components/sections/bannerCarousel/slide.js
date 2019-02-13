import Link from "next/link";

const slide = props => {
    let positionIndex = props.position + props.index;
    if (props.position + props.index >= props.misc.bannerSlidePositions.length) {
        positionIndex = props.position + props.index - props.misc.bannerSlidePositions.length;
    }
    let position = props.misc.bannerSlidePositions[positionIndex];
    let protocol = props.url.includes("http");

    let num = (props.index + 1).toString().padStart(2, "0");
    return (
        <div
            onClick={() => {
                props.changeBannerSlide({
                    bannersLength: props.misc.banners.length,
                    index: props.position + 1,
                    direction: 1
                });
            }}
            style={{
                ...position,
                ...props.style,
                backgroundImage: "url(" + props.misc.CFURL + "/land_banner/" + num + ")"
            }}
            className={"xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-44 w-full z-0 absolute"}>
            {protocol ? (
                <a href={props.link} target="_blank">
                    <button
                        onClick={e => {
                            e.stopPropagation();
                        }}
                        className="bannerBuyNow sm:hidden">
                        {props.text.slice(0, props.text.length - 1)}
                    </button>
                </a>
            ) : (
                <Link href="/product" as={props.link}>
                    <button
                        onMouseEnter={() => {
                            let strains = props.misc.strains;
                            props.getStrain({ sotiId: props.sotiId, strains }).then(res => {
                                props.setCurrentProduct({ product: res }).then(() => {});
                            });
                        }}
                        onClick={e => {
                            e.stopPropagation();
                            let product = props.viewProduct.currentProduct;
                            let _index = 0;
                            while (product.price[_index] == -1) {
                                _index++;
                            }
                            props.quickAddToCartQty(_index);
                        }}
                        className="bannerBuyNow sm:hidden">
                        {props.text.slice(0, props.text.length - 1)}
                    </button>
                </Link>
            )}
        </div>
    );
};

export default slide;
