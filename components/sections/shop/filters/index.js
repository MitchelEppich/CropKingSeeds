import Link from "next/link";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Router from "next/router";
const isClient = typeof document !== "undefined";

const filters = props => {
  let activeButton = "border buttonStyle p-2 m-1 font-bold slowish";
  let notActiveButton =
    "text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 font-bold slowish";

  let buttonStyle = {
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  };

  let { typeColor, geneColor, rateColor, merchColor } = props.detail;

  let showFilter = (filters, input, multiple = false) => {
    let arr = [];
    let color = (() => {
      switch (input) {
        case "type":
          return typeColor;
        case "genetic":
          return geneColor;
        case "cbd":
        case "thc":
          return rateColor;
        case "merchandise":
          return merchColor;
      }
    })();
    for (let filter of filters) {
      arr.push(
        <li
          key={filter}
          href={`/shop?${filter}`}
          onClick={e => e.preventDefault()}
        >
          <a
            key={filter}
            href={`/shop?${filter}`}
            onClick={e => e.preventDefault()}
          >
            <button
              onClick={e => {
                if (!isClient) return;
                if (["cbd", "thc"].includes(input)) {
                  props.setSort({
                    value:
                      props.shop.activeFilters[input] != filter
                        ? `${input}${filter == "low" ? "R" : ""}`
                        : ""
                  });
                }

                props
                  .toggleFilter({
                    filter: props.shop.activeFilters,
                    [input]: filter,
                    multiple: multiple
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
                      "/shop" +
                        (ext != null && ext.length != 0 ? "?" + ext : ""),
                      {
                        shallow: true
                      }
                    );
                  });
              }}
              style={buttonStyle}
              className={
                props.shop.activeFilters[input] == filter ||
                (props.shop.activeFilters[input] != null &&
                  props.shop.activeFilters[input].includes(filter))
                  ? `${activeButton} bg-${color[filter]} text-white border-${
                      color[filter]
                    }`
                  : `${notActiveButton} hover:bg-${
                      color[filter]
                    } hover:text-white`
              }
            >
              {filter == "cbd"
                ? "CBD"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          </a>
        </li>
      );
    }
    return arr;
  };

  let _availableFilters = props.shop.availableFilters;

  return (
    <div
      className={
        props.shop.showFilters
          ? "h-550 lg:h-550 xl:h-550 w-full absolute bg-white rounded z-999 xxl:z-0 xl:z-0 lg:z-0 lg:sticky xl:sticky xxl:sticky text-red-dark border border-grey-lighter cursor-pointer overflow-hidden"
          : "h-10 pb-2 w-full absolute bg-white z-999 overflow-hidden rounded lg:sticky xl:sticky xxl:sticky text-red-dark border-0 border-grey-lighter cursor-pointer"
      }
    >
      <p
        onClick={() => props.toggleShowFilters(!props.shop.showFilters)}
        className="pb-1 px-4 p-2 rounded  text-xl bg-grey-lightest font-bold text-grey font-bold flex justify-between hover:text-white hover:bg-red-light cursor-pointer"
      >
        <span className="">Filters:</span>
        <FontAwesomeIcon className="fa-lg pl-1 -mt-1" icon={faSlidersH} />
      </p>
      <div
        onClick={() => {
          if (props.misc.mediaSize == "sm") {
            props.toggleShowFilters(false);
          }
        }}
        className="leading-loose flex flex-wrap pl-4 pt-2"
      >
        <ul className="p-0 w-full">
          <li className="text-red-dark font-bold w-full text-xl">Type</li>
          <ul className="flex flex-wrap p-0 w-full">
            {showFilter(_availableFilters.type, "type")}
          </ul>
        </ul>
      </div>
      <hr className="hr__filters" />
      <ul
        onClick={() => {
          if (props.misc.mediaSize == "sm") {
            props.toggleShowFilters(false);
          }
        }}
        className="leading-loose flex flex-wrap pl-4"
      >
        <li className="text-red-dark font-bold w-full text-xl">Genetics</li>
        <ul className="flex flex-wrap p-0 w-full">
          {showFilter(_availableFilters.genetic, "genetic", true)}
        </ul>
      </ul>
      <hr className="hr__filters" />
      <ul
        onClick={() => {
          if (props.misc.mediaSize == "sm") {
            props.toggleShowFilters(false);
          }
        }}
        className="leading-loose flex flex-wrap pl-4"
      >
        <li className="text-red-dark font-bold w-full text-xl">
          THC Percentage
        </li>
        <ul className="flex flex-wrap p-0 w-full">
          {showFilter(_availableFilters.thc, "thc")}
        </ul>
      </ul>
      <hr className="hr__filters" />
      <ul
        onClick={() => {
          if (props.misc.mediaSize == "sm") {
            props.toggleShowFilters(false);
          }
        }}
        className="leading-loose flex flex-wrap pl-4"
      >
        <li className="text-red-dark font-bold w-full text-xl">
          CBD Percentage
        </li>
        <ul className="flex flex-wrap p-0 w-full">
          {showFilter(_availableFilters.cbd, "cbd")}
        </ul>
      </ul>

      <hr className="hr__filters" />
      {/* <ul className="leading-loose flex flex-wrap pl-4">
                <li className="text-red-dark font-bold w-full text-xl">Merchandise</li>
                {showFilter(["clothing", "accessories", "all"], "merchandise")}
            </ul>

            <hr className="hr__filters" /> */}

      <button
        style={{ width: "95%" }}
        onClick={() => {
          if (!isClient) return;
          props.clearFilters();
          Router.push("/shop", "/shop", { shallow: true });
        }}
        className="text-white bg-red-dark p-2 m-2 mt-6 mx-auto block font-bold slowish hover:bg-grey hover:text-white text-lg rounded"
      >
        Clear Filters
      </button>
    </div>
  );
};
export default filters;
