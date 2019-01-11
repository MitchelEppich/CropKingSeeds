import React from "react";

const filters = props => {
    let activeButton = "border buttonStyle p-2 m-1 font-bold slowish";
    let notActiveButton = "text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 font-bold slowish";

    let buttonStyle = {
        borderTopLeftRadius: "10px",
        borderBottomRightRadius: "10px"
    };

    let { typeColor, geneColor, rateColor } = props.detail;

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
            }
        })();
        for (let filter of filters) {
            arr.push(
                <li key={filter}>
                    <button
                        onClick={() =>
                            props.toggleFilter({
                                filter: props.shop.activeFilters,
                                [input]: filter,
                                multiple: multiple
                            })
                        }
                        
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
            }>
            {filter == "cbd"
              ? "CBD"
              : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      );
    }
    return arr;
  };

  let filtersActive = props.shop.activeFilters;

  let showFilterActives = (filters, input, multiple = false) => {
    if (filtersActive.genetic == null) return;
    let arr = [];
    for (let filter of filtersActive.genetic) {
      arr.push(
        <button
          onClick={() => {
            console.log("AQUI", filter);
            console.log({
              filter: { filtersActive },
              genetic: filter,
              multiple: [
                "autoflower",
                "feminized",
                "regular",
                "cbd",
                "dwarf",
                "mix"
              ].includes(filter)
            });
            props.toggleFilter({
              filter: filtersActive,
              genetic: filter,
              multiple: [
                "autoflower",
                "feminized",
                "regular",
                "cbd",
                "dwarf",
                "mix"
              ].includes(filter)
            });
          }}
          style={buttonStyle}
          className="p-2 px-4 capitalize font-bold m-1 bg-grey-lightest hover:bg-grey-light hover:text-white">
          {filter}
        </button>
      );
    }
    return arr;
  };

  return (
    <div className="w-full pt-12 text-red-dark">
      <div className="pt-2">
        <p className="pl-4 text-lg font-medium text-grey-light">Filter:</p>
      </div>
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-xl">Type</li>
        {showFilter(["sativa", "indica", "hybrid"], "type")}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-xl">Genetics</li>
        {showFilter(
          ["autoflower", "feminized", "regular", "cbd", "dwarf", "mix"],
          "genetic",
          true
        )}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-xl">
          THC Percentage
        </li>
        {showFilter(["low", "high"], "thc")}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-xl">
          CBD Percentage
        </li>
        {showFilter(["low", "high"], "cbd")}
      </ul>

      <hr className="hr__filters" />

      <div className="text-grey p-2 mt-4">
        <p className="p-2 text-red-dark font-bold text-xl">Active Filters:</p>
        {filtersActive.genetic != null || filtersActive != null ? (
          <div>
            {filtersActive.type != null ? (
              <p className="p-2 inline-flex">
                Type: {showFilter(["low", "high"], "cbd")}
              </p>
            ) : null}

            <p className="p-2">
              Genetics:{" "}
              <span className="font-bold capitalize">
                {showFilterActives()}
              </span>
            </p>

            {filtersActive.thc != null ? (
              <p className="p-2">
                THC Percentage:{" "}
                <button
                  className="font-bold p-2 mx-2 capitalize bg-grey-lightest hover:bg-grey-light hover:text-white"
                  style={buttonStyle}>
                  {filtersActive.thc}
                </button>
              </p>
            ) : null}
            {filtersActive.cbd != null ? (
              <p className="p-2">
                CBD Percentage:{" "}
                <button
                  className="font-bold p-2 mx-2 capitalize bg-grey-lightest    hover:bg-grey-light hover:text-white"
                  style={buttonStyle}>
                  {filtersActive.cbd}
                </button>
              </p>
            ) : null}
          </div>
        ) : (
          <div className="text-grey p-2 w-full h-10">
            <p className="font-bold">None</p>
          </div>
        )}
      </div>

      <button
        style={{ width: "95%" }}
        onClick={() => props.clearFilters()}
        className="text-white bg-red-dark p-2 m-2 mt-4 mx-auto block font-bold slowish hover:bg-grey hover:text-white">
        Clear Filters
      </button>
    </div>
  );
>>>>>>> 65fea9e5d56c0092595f490eea61ab9184f5f82a
};
export default filters;
