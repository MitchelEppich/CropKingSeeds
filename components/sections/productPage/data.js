import React from "react";
import { ResponsivePie, ResponsivePieCanvas } from "@nivo/pie";
import Details from "./details";

const data = props => {
  let _product = props.viewProduct.currentProduct;

  let pcbd = _product.pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  let pcbn = _product.pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  let pthc = _product.pthc.map(a => `${a.toFixed(2)}%`).join("-");

  let pcbdWidth, pcbnWidth, pthcWidth;
  // pcbdWidth = _product.pcbd[1] * 50 + "%";
  // pcbnWidth = _product.pcbn[1] * 10 + "%";
  // pthcWidth = _product.pthc[1] * 2 + "%";
  pcbdWidth = (_product.pcbd[0] / 8) * 100 + "%";
  pcbnWidth = (_product.pcbn[0] / 4.2) * 100 + "%";
  pthcWidth = (_product.pthc[0] / 27.5) * 100 + "%";

  // console.log("cdb", pcbdWidth, "cbn", pcbnWidth, "thc", pthcWidth);

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

  // console.log(pthcWidth, _product.pthc);
  return (
    <div className="mt-6 w-full mx-auto bg-grey-lightest flex flex-wrap content-start">
      <div className="w-full bg-white xxl:inline-flex block border border-grey-lightest rounded overflow-hidden">
        <div className="xxl:w-1/3 w-full border-r-2 border-grey-lightest sm:border-0 md:border-0 lg:border-0 xl:border-0">
          <div className="bg-grey-light w-full">
            <h3
              style={{ letterSpacing: "1px" }}
              className="text-white font-bold p-2 text-center uppercase"
            >
              Percentage Type
            </h3>
          </div>
          <div className="w-300 h-250 sm:w-full mx-auto">
            <div className="w-full h-full sm:mx-auto md:mx-auto">
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
                motionStiffness={0}
                motionDamping={15}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 50,
                    itemWidth: 70,
                    itemHeight: 20,
                    textAlign: "center",
                    itemsSpacing: 2,
                    symbolSize: 20,
                    symbolShape: "circle"
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="xxl:w-1/3 w-full bg-white sm:pt-2 sm:mt-3 sm:border-t-4 sm:border-grey-lightest md:pt-2 md:mt-3 md:border-t-4 md:border-grey-lightest relative pb-6">
          <div className="bg-red-light w-full">
            <h3
              style={{ letterSpacing: "1px" }}
              className="text-white font-bold p-2 text-center uppercase"
            >
              Strain Info
            </h3>
          </div>
          <div className="w-full mb-10">
            <div className="w-full p-1 px-4 mt-6 flex text-white justify-start my-1  inline-flex">
              <div className="text-black font-bold my-1 mr-2 w-10 py-1">
                THC:
              </div>
              <div className="relative bg-smoke-grey w-full rounded-lg">
                <div className="inline-flex absolute w-full h-full">
                  <div className="absolute flex w-full h-full justify-end">
                    <p className="text-grey my-auto text-xs font-bold pr-8 sm:pr-1 z-40">
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
                    }}
                  >
                    {" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-1 px-4 flex text-white justify-start my-1  inline-flex">
              <div className="text-black font-bold my-1 mr-2 w-10 py-1">
                CBD:
              </div>
              <div className="relative bg-smoke-grey w-full rounded-lg">
                <div className="inline-flex absolute w-full h-full">
                  <div className="absolute flex w-full h-full justify-end">
                    <p className="text-grey my-auto text-xs font-bold pr-8 sm:pr-1 z-40">
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
                    }}
                  >
                    {" "}
                  </div>
                </div>
              </div>
            </div>

            {_product.pcbn[1] > 0 ? (
              <div className="w-full p-1 px-4 flex text-white justify-start my-1  inline-flex">
                <div className="text-black font-bold my-1 mr-2 w-10 py-1">
                  CBN:
                </div>
                <div className="relative bg-smoke-grey w-full rounded-lg">
                  <div className="inline-flex absolute w-full h-full">
                    <div className="absolute flex w-full h-full justify-end">
                      <p className="text-grey my-auto text-xs font-bold pr-8 sm:pr-1 z-40">
                        {pcbn}
                      </p>
                    </div>
                    <div
                      className={
                        "bg-purple-autoflower h-full pl-2 px-2 text-xs flex items-center absolute"
                      }
                      style={{
                        width: pcbnWidth,
                        borderRadius: "5px",
                        overflow: "hidden"
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-full absolute pin-b h-10 mx-auto font-bold mt-4 items-center flex justify-center mb-1">
            <div className="inline-flex items-center flex mx-3">
              <p className="w-5 h-5 mr-2 mr-2 bg-orange" />
              <p className="items-center flex text-xxs font-light text-orange">
                Average
              </p>
            </div>
            <div className="inline-flex items-center flex mx-3">
              <p className="w-5 h-5 mr-2 ml-2 bg-green" />
              <p className="items-center flex text-xxs font-normal text-green">
                High
              </p>
            </div>
          </div>
        </div>
        <div className="xxl:w-1/3 w-full border-l-2 sm:border-0 md:border-0 lg:border-0 xl:border-0 sm:pt-2 sm:mt-3 sm:border-t-4 sm:border-grey-lightest md:pt-2 md:mt-3 md:border-t-4 border-grey-lightest ">
          {" "}
          <Details {...props} />
        </div>
      </div>
    </div>
  );
};

export default data;
