import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faSortNumericDown,
  faSortNumericUp
} from "@fortawesome/free-solid-svg-icons";

import LoaderSmall from "../loader/loaderSmall";

const THCCharts = props => {
  // ADD TO STATE
  let tag = props.charts.chartTag ? props.charts.chartTag : "pthc";
  let isReversed = props.charts.isReverse;
  let allStrains = props.misc.strains;

  if (allStrains == null)
    return (
      <div className="w-full">
        <div className="xxl:h-600 overflow-hidden xl:h-400 lg:h-300 md:h-250 sm:h-175 w-full relative inline-flex">
          <LoaderSmall />
        </div>
      </div>
    );

  let category = ["Regular", "Feminized", "Autoflower", "Dwarf", "CBD"];

  let arr = {
    thc: "pthc",
    cbd: "pcbd",
    time: "nFlowerTime",
    yield: "avgYield"
  };

  let convertNames = value => {
    switch (props.charts.chartTag) {
      case "pthc":
        return `THC`;
      case "pcbd":
        return `CBD`;
      case "avgYield":
        return `YIELD`;
      case "nFlowerTime":
        return `FLOWER TIME`;
      default:
        return `THC`;
    }
  };

  let buttons = Object.keys(arr).map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          props.setChartTag(Object.values(arr)[index]);
        }}
        className={`w-32 mx-2 cursor-pointer hover:bg-grey-light p-2  rounded text-white text-center font-bold uppercase ${
          tag == Object.values(arr)[index] ? "bg-grey-light" : "bg-red-light"
        }`}
      >
        {item}
      </div>
    );
  });

  let getMax = arr => {
    let max = 0;
    for (let item of arr) {
      let value = getAverage(item);
      if (value > max) max = value;
    }
    return max;
  };

  let charts = (() => {
    let $arr = {};
    for (let item of Object.values(arr)) {
      $arr[item] = {
        sort: (a, b, reversed = isReversed) => {
          return (
            (reversed ? -1 : 1) * (getAverage(b[item]) - getAverage(a[item]))
          );
        },
        tag: item
      };
    }
    return $arr;
  })();

  let formatText = value => {
    switch (tag) {
      case "pthc":
        return `${parseFloat(value).toFixed(2)}%`;
      case "pcbd":
        return `${parseFloat(value).toFixed(2)}%`;
      case "avgYield":
        return `${value}g`;
      case "nFlowerTime":
        return `${value} Weeks`;
    }
  };

  let getAverage = attribute => {
    let num = 0;
    if (typeof attribute == "object") for (let item of attribute) num += item;
    else return attribute;
    return num / attribute.length;
  };

  let step = 5;
  let maxValue = Math.ceil(getMax(allStrains.map(a => a[tag])) / step) * step;

  let createColumns = () => {
    let columns = 5;
    let step = maxValue / columns;
    let arr = [];
    let position = 0;
    while (position <= maxValue) {
      arr.push(
        <div
          className="text-right"
          style={
            {
              // width: `${100 / columns}%`
              // marginLeft: `${100 / (columns + 1)}%`
            }
          }
        >
          {formatText(position)}
        </div>
      );
      position += step;
    }
    return arr;
  };

  let strains = allStrains
    .filter(a => {
      if (a.genetic == "Mix") return false;
      return true;
    })
    .sort(charts[tag].sort)
    .sort((a, b) => {
      let _a = category.indexOf(a.genetic);
      let _b = category.indexOf(b.genetic);
      return _a - _b;
    })
    .map((strain, index) => {
      let color = props.detail.geneColor[strain.genetic.toLowerCase()];
      let value = getAverage(strain[charts[tag].tag]);
      let percent = (value / maxValue) * 100;
      let output = formatText(value);
      return (
        <div key={index} className="w-full inline-flex">
          <div className="w-300 text-right mr-2 bg-smoke-grey p-2">
            <a
              href={"/product/" + strain.name.toLowerCase().replace(/ /g, "-")}
              target="_blank"
              aria-label="view-product"
              className="font-bold p-2 hover:text-red-light hover:underline cursor-pointer"
            >
              {strain.name}
            </a>
          </div>
          <div className="w-4/5 relative inline-flex p-2 items-center flex">
            <div
              style={{
                width: "100%",
                height: "20px",
                background: "white"
              }}
            >
              {" "}
            </div>

            <div
              className={`bg-${color} absolute p-1 shadow-md`}
              style={{
                width: `${percent}%`,
                height: "25px"
              }}
            >
              <div
                className={`justify-end flex text-right absolute font-bold pr-2 pin-r ${
                  value < 1 || (props.charts.chartTag == "pcbd" && value < 20)
                    ? "-mr-20 text-grey"
                    : "text-white text-shadow"
                }`}
              >
                {output}
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="w-full">
      <div>
        <div className="inline-flex w-full my-6 justify-center flex">
          {buttons}
        </div>
        <div className="font-bold text-center my-4 text-lg text-grey inline-flex w-full relative">
          <div className="w-full">
            {" "}
            <p>
              Showing Charts By:{" "}
              <span className="uppercase text-grey-light">
                {convertNames()}
              </span>
            </p>
          </div>
          <div className="w-200 scale-item flex justify-end mr-4 absolute pin-r">
            <p
              onClick={() => {
                props.toggleIsReversed();
              }}
              className="w-full flex text-base justify-end items-center cursor-pointer hover:text-grey"
            >
              Order by:{" "}
              <FontAwesomeIcon
                icon={
                  props.charts.isReverse ? faSortNumericDown : faSortNumericUp
                }
                className="mx-2"
              />{" "}
              {props.charts.isReverse ? "Lowest" : "Highest"}
            </p>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full bg-grey-light text-white p-2 mb-4">
        <div className="w-300 text-right mr-4">
          <p className="-mr-1 font-bold uppercase">Strain</p>
        </div>
        <div className="w-full ml-12 inline-flex justify-between">
          {createColumns()}
        </div>
      </div>
      <div className="w-full">{strains}</div>
    </div>
  );
};

export default THCCharts;
