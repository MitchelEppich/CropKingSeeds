import ProductThumbnail from "../productGrid/productThumbnail";
import Router from "next/router";

const index = props => {
    let hoverId = props.misc.hoverId;
    let products = props.misc.featuredStrains;
    let route = Router.asPath.slice(0);
    let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(props.misc.mediaSize);
    let count = props.count ? props.count : 8;
    count = isSmallMediumOrLargeDevice ? 2 : count;

    products = products.map((product, index) => {
        // console.log(product);
        return (
            <div
                key={index}
                onMouseEnter={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, true);
                    let _index = 0;
                    while (product.price[_index] == -1) {
                        _index++;
                    }
                    props.quickAddToCartQty(_index);
                    props.modifyPotentialQuantity({
                        potentialQuantity: props.cart.potentialQuantity,
                        action: "SET",
                        quantity: 1
                    });
                }}
                onMouseLeave={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, false);
                }}
                onClick={e => {
                    if (isSmallMediumOrLargeDevice) {
                        Router.push(
                            "/product/" +
                                product.name
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")
                        );
                    }
                }}
                className={
                    hoverId == product._id
                        ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                        : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                }>
                <ProductThumbnail
                    isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
                    hoverId={hoverId}
                    index={index}
                    product={product}
                    {...props}
                />
            </div>
        );
    });
    return (
        <div className="flex bg-grey-lightest flex-wrap w-full py-6 pb-12 sm:justify-center md:justify-center lg:justify-center xl:justify-center xxl:justify-around sm:overflow-hidden">
            {products.slice(0, count)}
        </div>
    );
};

export default index;
