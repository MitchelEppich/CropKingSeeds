const data = props => {
    let _product = props.viewProduct.currentProduct;
    let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");
    return (
        <div className="w-full px-4">
            <div className="flex">
                <div className="w-1/6">
                    <p className="my-2 font-bold leading-tight">THC</p>
                    <p className="my-2 font-bold leading-tight">CBD</p>
                    <p className="my-2 font-bold leading-tight">CBN</p>
                </div>
                <div className="w-5/6">
                    <div className="w-full flex text-white justify-between my-2">
                        <div
                            className={
                                _product.thc == "low"
                                    ? "bg-orange mx-1 rounded-lg text-center p-1 text-xs"
                                    : "bg-green mx-1 rounded-lg text-center p-1 text-xs"
                            }
                            style={{ width: _product.pthc[1] * 1.5 + "%" }}>
                            {pthc}
                        </div>
                    </div>
                    <div className="w-full flex text-white justify-between my-2">
                        <div
                            className={
                                _product.cbd == "low"
                                    ? "bg-orange mx-1 rounded-lg text-center p-1 text-xs"
                                    : "bg-green mx-1 rounded-lg text-center p-1 text-xs"
                            }
                            style={{ width: _product.pcbd[1] * 100 + "%" }}>
                            {pcbd}
                        </div>
                    </div>
                    <div className="w-full flex text-white justify-between my-2">
                        {" "}
                        <div
                            className="bg-blue mx-1 rounded-lg text-center p-1 text-xs"
                            style={{ width: _product.pcbn[1] * 10 + "%" }}>
                            {pcbn}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex text-white justify-between">
                <div
                    className="bg-orange mx-1 rounded-lg text-center my-2"
                    style={{ width: _product.ruderalis * 100 + "%" }}>
                    {_product.ruderalis}
                    {/* <span
                        className="text-grey"
                        style={{
                            position: "absolute"
                        }}>
                        Ruderalis
                    </span> */}
                </div>{" "}
                <div
                    className="bg-blue mx-1 rounded-lg text-center my-2"
                    style={{ width: _product.indica * 100 + "%" }}>
                    {_product.indica}
                    {/* <span
                        className="text-grey"
                        style={{
                            position: "absolute"
                        }}>
                        Indica
                    </span> */}
                </div>{" "}
                <div
                    className="bg-green mx-1 rounded-lg text-center my-2"
                    style={{ width: _product.sativa * 100 + "%" }}>
                    {_product.sativa}
                    {/* <span
                        className="text-grey"
                        style={{
                            position: "absolute"
                        }}>
                        Sativa
                    </span> */}
                </div>
            </div>
        </div>
    );
};

export default data;
