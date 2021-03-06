import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortOptions from "./sortOptions";

import Router from "next/router";
const isClient = typeof document !== "undefined";

const gridHeader = props => {
  let sortOptions = [
    // ["", "Select"],
    ["alpha", "↑ A - Z "],
    ["alphaR", "↓ Z - A"],
    ["thc", "↑ THC"],
    ["thcR", "↓ THC"],
    ["cbd", "↑ CBD"],
    ["cbdR", "↓ CBD"],
    ["yield", "↑ Avg. Yield"],
    ["yieldR", "↓ Avg. Yield"],
    ["time", "↑ Grow Time"],
    ["timeR", "↓ Grow Time"]
  ];

  let activeFilters = Object.keys(props.shop.activeFilters).map(
    (filter, index) => {
      let filtersArr =
        filter == "genetic" || filter == "text"
          ? [...props.shop.activeFilters[filter]]
          : [props.shop.activeFilters[filter]];
      let label =
        filter == "type" || filter == "genetic" || filter == "text"
          ? null
          : filter + " %";
      return filtersArr.map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (!isClient) return;
              props
                .toggleFilter({
                  filter: props.shop.activeFilters,
                  [filter]: value,
                  multiple:
                    filter == "genetic" || filter == "text" ? true : false
                })
                .then(res => {
                  let ext = (() => {
                    let addFilter = (input, filter) => {
                      if (["cbd", "thc"].includes(input)) {
                        return input + filter;
                      } else {
                        return filter;
                      }
                    };

                    let str = "";

                    for (let $filter of Object.keys(res)) {
                      let input = res[$filter];
                      if (typeof input == "object") input = input.join("&");
                      str +=
                        (str.length != 0 ? "&" : "") +
                        addFilter($filter, input);
                    }

                    return str;
                  })();
                  Router.push(
                    "/shop",
                    "/shop" + (ext != null && ext.length != 0 ? "?" + ext : ""),
                    {
                      shallow: true
                    }
                  );
                });
            }}
            className="capitalize text-white border bg-red-light flex justify-center cursor-pointer hover:bg-red-dark hover:text-white items-center rounded-tl-lg rounded-br-lg border-grey-lightest p-2 m-1 font-bold"
          >
            {filter == "text" ? "search: " : ""}
            {label || value}
            <FontAwesomeIcon className="fa-sm ml-2" icon={faTimes} />
          </div>
        );
      });
    }
  );

  return (
    <div
      className={
        props.misc.hoverId != null && props.misc.mediaSize == "sm"
          ? "hidden"
          : "w-full justify-between flex sm:flex-col pt-3 px-2 mt-5 text-grey-light"
      }
    >
      {Object.keys(props.shop.activeFilters).length != 0 ? (
        <div className="flex flex-wrap xxl:w-4/5 xl:w-3/5 w-3/5 sm:w-full bg-white rounded border border-grey-lightest">
          <div className="inline-flex w-full mb-2 pl-2 font-bold p-2 bg-red-light text-white uppercase w-full">
            <p className="text-left w-1/2">Active Filters:</p>
            <p
              onClick={() => {
                if (!isClient) return;
                props.clearFilters();
                Router.push("/shop", "/shop", { shallow: true });
              }}
              className="text-right w-1/2 hover:text-red-darker flex items-center justify-end underline cursor-pointer"
            >
              Clear <FontAwesomeIcon icon={faTimes} className="ml-2 fa-lg" />
            </p>
          </div>
          {activeFilters}
        </div>
      ) : null}
      <div className="z-50 flex absolute w-175 sm:relative sm:mt-4 sm:w-full flex pin-r justify-end">
        <div
          onClick={() => {
            props.setVisibleScreen({
              input: "showSortBy"
            });
          }}
          className="font-bold flex relative items-center w-175 sm:w-175 p-2 bg-red-light justify-center z-50 rounded text-white cursor-pointer hover:bg-red-dark"
        >
          {props.shop.sort == null || props.shop.sort == "" ? (
            <div className="text-base uppercase font-bold">
              Sort by:
              <FontAwesomeIcon icon={faSortAmountDown} className="fa-lg ml-2" />
            </div>
          ) : (
            sortOptions.find(a => {
              if (a[0] == props.shop.sort) return a;
            })[1]
          )}
        </div>
        <SortOptions sortOptions={sortOptions} {...props} />
      </div>
    </div>
  );
};

export default gridHeader;
