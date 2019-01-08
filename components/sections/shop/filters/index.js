const filters = props => {
  let activeButton =
    "border border-red-dark buttonStyle p-2 m-1 font-bold slow bg-red-dark text-white";
  let notActiveButton =
    "text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 font-bold slow hover:bg-red-dark hover:text-white";

  let buttonStyle = {
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  };

  return (
    <div className="w-full h-500 pt-12 text-red-dark">
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">Type</li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                type: "Sativa"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.type == "Sativa"
                ? activeButton
                : notActiveButton
            }>
            Sativa
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                type: "Indica"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.type == "Indica"
                ? activeButton
                : notActiveButton
            }>
            Indica
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                type: "Hybrid"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.type == "Hybrid"
                ? activeButton
                : notActiveButton
            }>
            Hybrid
          </button>
        </li>
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">Genetics</li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Autoflower",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("Autoflower")
                ? activeButton
                : notActiveButton
            }>
            Autoflower
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Feminized",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("Feminized")
                ? activeButton
                : notActiveButton
            }>
            Feminized
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Regular",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("Regular")
                ? activeButton
                : notActiveButton
            }>
            Regular
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "CBD",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("CBD")
                ? activeButton
                : notActiveButton
            }>
            CBD
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Dwarf",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("Dwarf")
                ? activeButton
                : notActiveButton
            }>
            Dwarf
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Mix",
                multiple: true
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.genetic != null &&
              props.shop.activeFilters.genetic.includes("Mix")
                ? activeButton
                : notActiveButton
            }>
            Mix
          </button>
        </li>
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">
          THC Percentage
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                thc: "low"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.thc == "low"
                ? activeButton
                : notActiveButton
            }>
            Low
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                thc: "high"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.thc == "high"
                ? activeButton
                : notActiveButton
            }>
            High
          </button>
        </li>
      </ul>
      <hr className="hr__filters" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">
          CBD Percentage
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                cbd: "low"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.cbd == "low"
                ? activeButton
                : notActiveButton
            }>
            Low
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                cbd: "high"
              })
            }
            style={buttonStyle}
            className={
              props.shop.activeFilters.cbd == "high"
                ? activeButton
                : notActiveButton
            }>
            High
          </button>
        </li>
      </ul>
      <hr className="hr__filters" />
      <button
        style={{ width: "90%" }}
        onClick={() => props.clearFilters()}
        className="text-white bg-red-dark p-2 m-2 mt-4 mx-auto block font-bold slowish hover:bg-grey hover:text-white">
        Clear
      </button>
    </div>
  );
};
export default filters;
