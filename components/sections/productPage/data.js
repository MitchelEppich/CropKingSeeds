import React from "react";
import { ResponsivePie, ResponsivePieCanvas } from "@nivo/pie";
import Details from "./details";

const data = props => {
  let _product = props.viewProduct.currentProduct;

  let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");

  let pcbdWidth, pcbnWidth, pthcWidth;
  pcbdWidth = _product.pcbd[1] * 50 + "%";
  pcbnWidth = _product.pcbn[1] * 10 + "%";
  pthcWidth = _product.pthc[1] * 2 + "%";
  // pcbdWidth = _product.pcbd[0] + "%";
  // pcbnWidth = _product.pcbn[0] + "%";
  // pthcWidth = _product.pthc[0] + "%";

  console.log("cdb", pcbdWidth, "cbn", pcbnWidth, "thc", pthcWidth);

  let graphStyle = {
    borderTopLeftRadius: "15px",
    overflow: "hidden",
    borderBottomRightRadius: "15px"
  };

  let _genes = _product.og.map((val, index) => {
    return (
      <span key={index} className="font-bold">
        {val}
      </span>
    );
  });

  const theme = {
    axis: { textColor: "#eee", fontSize: "22px", tickColor: "#eee" },
    grid: { stroke: "#888", strokeWidth: 1 }
  };

  let data = [
    _product.indica != null || _product.indica * 100 > 0 || _product.indica != 0
      ? {
          id: "Indica",
          label: "Indica",
          value: _product.indica * 100,
          color: "hsl(74, 70%, 50%)"
        }
      : null,
    _product.sativa != null || _product.sativa * 100 > 0 || _product.sativa != 0
      ? {
          id: "Sativa",
          label: "Sativa",
          value: _product.sativa * 100,
          color: "hsl(147, 48%, 39%)"
        }
      : null,
    _product.ruderalis != null ||
    _product.ruderalis * 100 > 0 ||
    _product.ruderalis != 0
      ? {
          id: "Ruderalis",
          label: "Ruderalis",
          value: _product.ruderalis * 100,
          color: "hsl(355, 86%, 55%)"
        }
      : null
  ];
  if (_product.ruderalis == 0) {
    data = data.splice(0, 2);
  }

  console.log(pthcWidth, _product.pthc);
  return (
    <div
      style={graphStyle}
      className="w-full xl:w-full lg:w-full md:w-container sm:w-full mx-auto bg-grey-lightest flex flex-wrap content-start shadow border-grey-lighter border">
      <div className="w-full bg-white inline-flex">
        <div className="w-2/5 border-r-2 border-grey-lightest">
          <div className="w-300 h-300 mx-auto">
            <div className="w-full h-full">
              <ResponsivePieCanvas
                data={data}
                pixelRatio={1}
                margin={{ top: 30, right: 60, bottom: 60, left: 60 }}
                sortByValue={false}
                innerRadius={0.6}
                padAngle={2}
                colorBy={function(e) {
                  return e.color;
                }}
                borderWidth={1}
                borderColor="inherit"
                radialLabelsSkipAngle={3}
                radialLabelsTextXOffset={5}
                radialLabelsTextColor="inherit"
                radialLabelsLinkOffset={2}
                radialLabelsLinkDiagonalLength={8}
                radialLabelsLinkHorizontalLength={15}
                radialLabelsLinkStrokeWidth={3}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={1}
                slicesLabelsTextColor="#000000"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 50,
                    itemWidth: 70,
                    itemHeight: 20,
                    itemsSpacing: 2,
                    textAlign: "center",
                    itemsSpacing: 2,
                    symbolSize: 10,
                    symbolShape: "circle"
                  }
                ]}
              />
            </div>

            {/* <p
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
                strokeWidth="5"
                strokeDasharray="100, 100"
              />
              <path
                d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#34945F"
                strokeWidth="5"
                strokeDasharray={
                  _product.sativa * 100 + _product.ruderalis * 100 + ", 100"
                }
              />
              <path
                className="hover:bg-red"
                d="M22.5 6.5
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#ffed4a"
                strokeWidth="5.5"
                strokeDasharray={_product.ruderalis * 100 + ", 100"}
              />
            </svg> */}
          </div>
        </div>
        <div className="w-2/5 bg-white border-r-2 border-grey-lightest relative">
          <div className="bg-grey-lightest w-full">
            <h3 className="text-grey font-bold p-2 text-center uppercase">
              Strain Info
            </h3>
          </div>
          <div className="w-full p-1 px-4 mt-6 flex text-white justify-start my-1  inline-flex">
            <div className="text-black font-bold my-1 mr-2 w-10 py-1">THC:</div>
            <div className="relative bg-smoke-grey w-full rounded-lg">
              <div className="inline-flex absolute w-full h-full">
                <div className="absolute flex w-full h-full justify-end">
                  <p className="text-grey my-auto text-xs font-bold pr-8">
                    {pthc}
                  </p>
                </div>
                <div
                  className={
                    _product.thc == "low"
                      ? "bg-orange h-full pl-2 px-4 text-xs flex items-center absolute"
                      : "bg-green h-full pl-2 px-4 text-xs flex items-center absolute"
                  }
                  style={{
                    width: pthcWidth,
                    borderRadius: "5px",
                    overflow: "hidden"
                  }}>
                  {" "}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-1 px-4 flex text-white justify-start my-1  inline-flex">
            <div className="text-black font-bold my-1 mr-2 w-10 py-1">CBD:</div>
            <div className="relative bg-smoke-grey w-full rounded-lg">
              <div className="inline-flex absolute w-full h-full">
                <div className="absolute flex w-full h-full justify-end">
                  <p className="text-grey my-auto text-xs font-bold pr-8">
                    {pcbd}
                  </p>
                </div>
                <div
                  className={
                    _product.cbd == "low"
                      ? "bg-orange h-full pl-2 px-2 text-xs flex items-center absolute"
                      : "bg-green h-full pl-2 px-2 text-xs flex items-center absolute"
                  }
                  style={{
                    width: pcbdWidth,
                    borderRadius: "5px",
                    overflow: "hidden"
                  }}>
                  {" "}
                </div>
              </div>
            </div>
          </div>

          {_product.pcbn[1] > 0 ? (
            <div className="w-full p-1 px-4 flex text-white justify-start my-1  inline-flex">
              <div className="text-black font-bold my-1 mr-2 w-10 py-1">
                CBD:
              </div>
              <div className="relative bg-smoke-grey w-full rounded-lg">
                <div className="inline-flex absolute w-full h-full">
                  <div className="absolute flex w-full h-full justify-end">
                    <p className="text-grey my-auto text-xs font-bold pr-8">
                      {pcbn}
                    </p>
                  </div>
                  <div
                    className={
                      "bg-purple h-full pl-2 px-2 text-xs flex items-center absolute"
                    }
                    style={{
                      width: pcbnWidth,
                      borderRadius: "5px",
                      overflow: "hidden"
                    }}>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="w-full absolute pin-b h-10 mx-auto font-bold mt-4 bg-smoke-grey items-center flex justify-center">
            <div className="inline-flex items-center flex mx-3">
              <p className="w-4 h-4 mr-2 mr-2 rounded-full bg-orange" />
              <p className="items-center flex uppercase">Average</p>
            </div>
            <div className="inline-flex items-center flex mx-3">
              <p className="w-4 h-4 mr-2 ml-2 rounded-full bg-green" />
              <p className="items-center flex uppercase">High</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-white">
          {" "}
          <Details {...props} />
        </div>
      </div>
    </div>
  );
};

export default data;
