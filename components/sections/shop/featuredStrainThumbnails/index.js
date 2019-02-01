import ProductThumbnail from "../productGrid/productThumbnail";

const index = props => {
    let hoverId = props.misc.hoverId;
    let products = props.misc.featuredStrains;
    let isSmallMediumOrLargeDevice = ["sm", "md"].includes(props.misc.mediaSize);

    products = products.map((product, index) => {
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
        <div className="flex bg-grey-lightest flex-wrap w-full py-6 pb-12 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-around sm:overflow-hidden">
            {isSmallMediumOrLargeDevice ? products.slice(0, 2) : products.slice(0, 8)}
        </div>
    );
};

export default index;
