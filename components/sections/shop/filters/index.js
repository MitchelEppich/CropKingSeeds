const filters = props => {
  let activeButton = "border buttonStyle p-2 m-1 font-bold slow";
  let notActiveButton =
    "text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 font-bold slow";

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
        <li>
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
            }
          >
            {filter == "cbd"
              ? "CBD"
              : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      );
    }
    return arr;
  };

  return (
    <div className="w-full h-500 pt-12 text-red-dark">
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">Type</li>
        {showFilter(["sativa", "indica", "hybrid"], "type")}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">Genetics</li>
        {showFilter(
          ["autoflower", "feminized", "regular", "cbd", "dwarf", "mix"],
          "genetic",
          true
        )}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">
          THC Percentage
        </li>
        {showFilter(["low", "high"], "thc")}
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">
          CBD Percentage
        </li>
        {showFilter(["low", "high"], "cbd")}
      </ul>
      <hr className="hr__filters" />
      <button
        style={{ width: "90%" }}
        onClick={() => props.clearFilters()}
        className="text-white bg-red-dark p-2 m-2 mt-4 mx-auto block font-bold slowish hover:bg-grey hover:text-white"
      >
        Clear
      </button>
    </div>
  );
};
export default filters;
