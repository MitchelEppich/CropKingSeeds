const data = props => {
    let _product = props.viewProduct.currentProduct;
    let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");

    let pcbdWidth, pcbnWidth, pthcWidth;
    pcbdWidth = _product.pcbd[1] * 50 + "%";
    pcbnWidth = _product.pcbn[1] * 10 + "%";
    pthcWidth = _product.pthc[1] * 2 + "%";
    return (
        <div className="w-5/6 bg-blue-lightest flex flex-wrap content-start p-4 shadow-md border-blue-lighter border">
            <div className="w-full h-150 text-white">
                <div className="w-150 h-150 mx-auto">
                    <p
                        className={
                            _product.ruderalis * 100 > 0
                                ? "mt-10 absolute pt-2 mx-auto text-xs text-center w-150 text-black font-black"
                                : "mt-12 absolute pt-2 mx-auto text-xs text-center w-150 text-black font-black"
                        }>
                        {_product.indica * 100}% Indica
                    </p>{" "}
                    <p
                        className={
                            _product.ruderalis * 100 > 0
                                ? "absolute mt-16 pt-1 mx-auto text-xs text-center w-150 text-black font-black"
                                : "absolute mt-20 pt-1 mx-auto text-xs text-center w-150 text-black font-black"
                        }>
                        {_product.sativa * 100}% Sativa
                    </p>
                    {_product.ruderalis * 100 > 0 ? (
                        <p className="absolute mt-20 pt-2 mx-auto text-xs text-center w-150 text-black font-black">
                            {_product.ruderalis * 100}% Ruderalis
                        </p>
                    ) : null}
                    <svg viewBox="0 0 45 45" width="150" height="150">
                        <path
                            d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#2286E5"
                            strokeWidth="3.2"
                            strokeDasharray="100, 100"
                        />
                        <path
                            d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#34945F"
                            strokeWidth="3.2"
                            strokeDasharray={_product.sativa * 100 + _product.ruderalis * 100 + ", 100"}
                        />
                        <path
                            d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#ffed4a"
                            strokeWidth="3.5"
                            strokeDasharray={_product.ruderalis * 100 + ", 100"}
                        />
                    </svg>
                </div>
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
                        style={{ width: pthcWidth }}>
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
                        style={{ width: pcbdWidth }}>
                        {pcbd}
                    </div>
                </div>
                {_product.pcbn[1] > 0 ? (
                    <div className="w-full h-8 flex text-white justify-start my-2">
                        <p className="text-black font-bold my-1 mr-2  py-1">CBN</p>{" "}
                        <div
                            className="bg-purple mx-1 rounded-lg text-left pl-2 py-3 text-xs"
                            style={{ width: pcbnWidth }}>
                            {pcbn}
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="w-1/2 h-8 pt-2 mx-auto flex justify-center">
                <p className="w-2 h-2 mt-1 mr-2 rounded-full bg-green" />
                <p>High</p>
                <p className="w-2 h-2 mt-1 ml-4 mr-2 rounded-full bg-orange" />
                <p>Average</p>
            </div>
        </div>
    );
};

export default data;
