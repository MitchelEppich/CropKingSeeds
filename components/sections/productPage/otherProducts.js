import ProductThumbnail from "../shop/productGrid/productThumbnail";

const otherProducts = props => {
    // console.log(props)

    // let fbt = props.viewProduct.fbt;
    let fbt = props.misc.strains;
    let qty = 3;
    fbt = fbt.slice(0, qty).map((product, index) => {
        return (
            <div
                key={index}
                onMouseEnter={() => {
                    props.setHoverId(product._id);
                }}
                onMouseLeave={() => {
                    props.setHoverId(product._id);
                }}
                className={
                    props.misc.hoverId == product._id
                        ? "w-64 h-64 text-white relative z-50 slowish"
                        : "w-64 h-64 text-white relative z-0 slowish"
                }>
                <ProductThumbnail hoverId={props.misc.hoverId} product={product} {...props} />
            </div>
        );
    });

    return <div className="w-full flex flex-wrap justify-between content-center">{fbt}</div>;
};

export default otherProducts;
