const data = props => {
  let _product = props.viewProduct.currentProduct;
  let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");

  let pcbdWidth, pcbnWidth, pthcWidth;
  pcbdWidth = _product.pcbd[1] * 50 + "%";
  pcbnWidth = _product.pcbn[1] * 10 + "%";
  pthcWidth = _product.pthc[1] * 2 + "%";

  let graphStyle = {
    borderTopLeftRadius: "15px",
    overflow: "hidden",
    borderBottomRightRadius: "15px"
  };

  return (
    <div
      style={graphStyle}
      className="w-3/5 xl:w-full lg:w-full md:w-container sm:w-full mx-auto bg-grey-lightest flex flex-wrap content-start shadow border-grey-lighter border">
      <div className="w-full text-white bg-white">
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
              strokeWidth="4"
              strokeDasharray="100, 100"
            />
            <path
              d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#34945F"
              strokeWidth="4"
              strokeDasharray={
                _product.sativa * 100 + _product.ruderalis * 100 + ", 100"
              }
            />
            <path
              d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#ffed4a"
              strokeWidth="4.5"
              strokeDasharray={_product.ruderalis * 100 + ", 100"}
            />
          </svg>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full items-center bg-grey-lightest p-1 pl-3 flex text-white justify-start my-1 border-b border-t border-grey-lighter">
          <p className="text-black font-bold my-1 mr-2  py-1">THC</p>
          <div
            className={
              _product.thc == "low"
                ? "bg-orange h-8 pl-2 px-4 text-xs flex items-center"
                : "bg-green h-8 pl-2 px-4 text-xs flex items-center"
            }
            style={{
              width: pthcWidth,
              borderTopRightRadius: "5px",
              overflow: "hidden",
              borderBottomRightRadius: "5px"
            }}>
            {pthc}
          </div>
        </div>

        <div className="w-full items-center bg-grey-lightest p-1 pl-3 flex text-white justify-start my-1 border-b border-grey-lighter">
          <p className="text-black font-bold my-1 mr-2  py-1">CBD</p>
          <div
            className={
              _product.cbd == "low"
                ? "bg-orange h-8 pl-2 px-2 text-xs flex items-center"
                : "bg-green h-8 pl-2 px-2 text-xs flex items-center"
            }
            style={{
              width: pcbdWidth,
              borderTopRightRadius: "5px",
              overflow: "hidden",
              borderBottomRightRadius: "5px"
            }}>
            {pcbd}
          </div>
        </div>
        {_product.pcbn[1] > 0 ? (
          <div className="w-full items-center bg-grey-lightest p-1 pl-3 flex text-white justify-start my-1 border-b border-grey-lighter">
            <p className="text-black font-bold my-1 mr-2  py-1">CBN</p>{" "}
            <div
              className="bg-purple h-8 pl-2 px-4 text-xs flex items-center"
              style={{
                width: pcbnWidth,
                borderTopRightRadius: "5px",
                overflow: "hidden",
                borderBottomRightRadius: "5px"
              }}>
              {pcbn}
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-full bg-white h-8 pt-2 mx-auto font-bold flex justify-center">
        <p className="w-2 h-2 mt-1 mr-2 rounded-full bg-green" />
        <p>High</p>
        <p className="w-2 h-2 mt-1 ml-4 mr-2 rounded-full bg-orange" />
        <p>Average</p>
      </div>
    </div>
  );
};

export default data;
