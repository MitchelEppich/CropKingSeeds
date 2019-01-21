import ProductThumbnail from "../shop/productGrid/productThumbnail";

const otherProducts = props => {
    let fbt = props.misc.strains;
    let qty = 3;
    let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(props.misc.mediaSize);
    fbt = fbt.slice(0, qty).map((product, index) => {
        return (
            <div
                key={index}
                onMouseEnter={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, true);
                }}
                onMouseLeave={() => {
                    if (isSmallMediumOrLargeDevice) {
                        return null;
                    }
                    props.setHoverId(product._id, false);
                }}
                className={
                    props.misc.hoverId == product._id
                        ? "w-64 h-64 my-4 text-white relative z-50 slowish"
                        : "w-64 h-64 my-4 text-white relative z-0 slowish"
                }>
                <ProductThumbnail
                    isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
                    hoverId={props.misc.hoverId}
                    product={product}
                    {...props}
                />
            </div>
        );
    });

    return <div className="w-full flex flex-wrap justify-around content-center">{fbt}</div>;
};

export default otherProducts;
