const details = props => {
    let _product = props.viewProduct.currentProduct;
    let _genes = _product.og.map((val, index) => {
        return (
            <span key={index} className="font-bold">
                {val}
            </span>
        );
    });

    return (
        <div className=" mt-8">
            {props.viewProduct.showFullDescription ? (
                <p>
                    {_product.description}
                    <span onClick={() => props.toggleFullDescription()} className="text-red-dark cursor-pointer ml-1">
                        show less
                    </span>
                </p>
            ) : (
                <p>
                    {_product.description.substring(0, 250) + "..."}
                    <span onClick={() => props.toggleFullDescription()} className="text-red-dark cursor-pointer">
                        show more
                    </span>
                </p>
            )}
            <div className="flex mt-8">
                <div className="flex flex-wrap w-2/3 justify-start">
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        <p className="mb-1">Grow Time:</p>
                        <span className="font-bold text-lg">{_product.flowerTime}</span>
                    </div>
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        {" "}
                        <p className="mb-1">Yield:</p>
                        <span className="font-bold text-lg">{_product.yield[0] + " /"}</span>
                        <br />
                        <span className="font-bold text-lg">{_product.yield[1]}</span>
                    </div>
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        <p className="mb-1">Difficulty:</p>
                        <span className="font-bold text-lg">{_product.difficulty}</span>
                    </div>
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        <p>Genes:</p>
                        {_genes}
                    </div>
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        <p className="mb-1">Country:</p>
                        <span className="font-bold text-lg">{_product.country}</span>
                    </div>
                    <div className="w-1/3 p-2 text-center leading-tight shadow">
                        <p className="mb-1">Environment:</p>
                        <span className="font-bold text-lg">{_product.env}</span>
                    </div>
                </div>
                <ul className="list-reset leading-normal p-4 shadow w-1/3">
                    <li>Effects</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    );
};

export default details;
