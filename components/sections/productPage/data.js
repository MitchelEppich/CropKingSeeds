const data = props => {
    let _product = props.viewProduct.currentProduct;
    let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");
    let activeBorder = {
        position: "relative",
        textAlign: "center",
        width: "110px",
        height: "110px",
        borderRadius: "100%",
        backgroundColor: "#39b4cc",
        backgroundImage:
            "linear-gradient(250deg, transparent 50%, #FFF 50%), linear-gradient(0deg, #FFF 50%, transparent 50%)"
    };
    let activeBorder2 = {
        position: "relative",
        textAlign: "center",
        width: "110px",
        height: "110px",
        borderRadius: "100%",
        backgroundColor: "#39b4cc",
        backgroundImage:
            "linear-gradient(0deg, transparent 50%, #000 50%), linear-gradient(0deg, #000 50%, transparent 50%)"
    };
    return (
        <div className="w-5/6 px-2 pb-8 bg-grey-lightest flex flex-wrap">
            <div className="w-full text-white">
                <div id="activeBorder" style={activeBorder}>
                    <div id="activeBorder2" style={activeBorder2}>
                        {/* <div id="circle" className="circle">
                            <span class="prec 270" id="prec">
                                20%
                            </span>
                        </div> */}
                    </div>
                </div>
                {/* {_product.ruderalis > 0 ? (
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
                </div> */}
            </div>
            <div className="w-full">
                <div className="w-full h-8 flex text-white justify-start my-2">
                    <p className="text-black font-bold my-1 mr-2  py-1">THC</p>
                    <div
                        className={
                            _product.thc == "low"
                                ? "bg-orange mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                                : "bg-green mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                        }
                        style={{ width: _product.pthc[1] * 3 + "%" }}>
                        {pthc}
                    </div>
                </div>

                <div className="w-full h-8 flex text-white justify-start my-2">
                    <p className="text-black font-bold my-1 mr-2  py-1">CBD</p>
                    <div
                        className={
                            _product.cbd == "low"
                                ? "bg-orange mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                                : "bg-green mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                        }
                        style={{ width: _product.pcbd[1] * 50 + "%" }}>
                        {pcbd}
                    </div>
                </div>

                <div className="w-full h-8 flex text-white justify-start my-2">
                    <p className="text-black font-bold my-1 mr-2  py-1">CBN</p>{" "}
                    <div
                        className="bg-purple mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                        style={{ width: _product.pcbn[1] * 10 + "%" }}>
                        {pcbn}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default data;
