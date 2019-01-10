const data = props => {
    let _product = props.viewProduct.currentProduct;
    let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");
    return (
        <div className="w-5/6 px-2 pb-8 bg-grey-lighter rounded-lg ">
            <div className="flex flex-wrap">
                <p className="w-1/6 font-bold my-1 py-1">THC</p>
                <div className="w-5/6 flex text-white justify-between my-2">
                    <div
                        className={
                            _product.thc == "low"
                                ? "bg-orange mx-1 rounded-lg text-center p-1 text-xs"
                                : "bg-green mx-1 rounded-lg text-center p-1 text-xs"
                        }
                        style={{ width: _product.pthc[1] * 3 + "%" }}>
                        {pthc}
                    </div>
                </div>
                <p className="w-1/6 font-bold my-1 py-1">CBD</p>
                <div className="w-5/6 flex text-white justify-between my-2">
                    <div
                        className={
                            _product.cbd == "low"
                                ? "bg-orange mx-1 rounded-lg text-center p-1 text-xs"
                                : "bg-green mx-1 rounded-lg text-center p-1 text-xs"
                        }
                        style={{ width: _product.pcbd[1] * 50 + "%" }}>
                        {pcbd}
                    </div>
                </div>
                <p className="w-1/6 font-bold my-1 py-1">CBN</p>
                <div className="w-5/6 flex text-white justify-between my-2">
                    {" "}
                    <div
                        className="bg-purple mx-1 rounded-lg text-center p-1 text-xs"
                        style={{ width: _product.pcbn[1] * 10 + "%" }}>
                        {pcbn}
                    </div>
                </div>
            </div>

            <div className="w-full flex text-white justify-between">
                {_product.ruderalis > 0 ? (
                    <div
                        className="bg-orange mx-1 rounded-lg text-center my-2"
                        style={{ width: _product.ruderalis * 100 + "%" }}>
                        {_product.ruderalis * 100}%
                        <span
                            className="text-grey"
                            style={{
                                position: "absolute",
                                transform: "translateX(-50%) translateY(43px) rotate(45deg)"
                            }}>
                            Ruderalis
                        </span>
                    </div>
                ) : null}
                <div
                    className="bg-blue mx-1 rounded-lg text-center my-2"
                    style={{ width: _product.indica * 100 + "%" }}>
                    {_product.indica * 100}%
                    <span
                        className="text-grey"
                        style={{ position: "absolute", transform: "translateX(-50%) translateY(33px) rotate(45deg)" }}>
                        Indica
                    </span>
                </div>{" "}
                <div
                    className="bg-green mx-1 rounded-lg text-center my-2"
                    style={{ width: _product.sativa * 100 + "%" }}>
                    {_product.sativa * 100}%
                    <span
                        className="text-grey"
                        style={{ position: "absolute", transform: "translateX(-50%) translateY(33px) rotate(45deg)" }}>
                        Sativa
                    </span>
                </div>
            </div>
        </div>
    );
};

export default data;
