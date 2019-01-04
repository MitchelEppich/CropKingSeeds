const filters = props => {
  let activeButton =
    "border border-red-dark  p-2 m-1 font-bold slowish bg-red-dark text-white";
  let notActiveButton =
    "text-red-dark border border-red-dark  p-2 m-1 font-bold slowish hover:bg-red-dark hover:text-white";

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
            className={
              props.shop.activeFilters.type == "Sativa"
                ? activeButton
                : notActiveButton
            }
          >
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
            className={
              props.shop.activeFilters.type == "Indica"
                ? activeButton
                : notActiveButton
            }
          >
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
            className={
              props.shop.activeFilters.type == "Hybrid"
                ? activeButton
                : notActiveButton
            }
          >
            Hybrid
          </button>
        </li>
      </ul>
      <hr className="filter__hr" />
      <ul className="leading-loose flex flex-wrap pl-4">
        <li className="text-red-dark font-bold w-full text-2xl">Genetics</li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Autoflower"
              })
            }
            className={
              props.shop.activeFilters.genetic == "Autoflower"
                ? activeButton
                : notActiveButton
            }
          >
            Autoflower
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Feminized"
              })
            }
            className={
              props.shop.activeFilters.genetic == "Feminized"
                ? activeButton
                : notActiveButton
            }
          >
            Feminized
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Regular"
              })
            }
            className={
              props.shop.activeFilters.genetic === "Regular"
                ? activeButton
                : notActiveButton
            }
          >
            Regular
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "CBD"
              })
            }
            className={
              props.shop.activeFilters.genetic === "CBD"
                ? activeButton
                : notActiveButton
            }
          >
            CBD
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Dwarf"
              })
            }
            className={
              props.shop.activeFilters.genetic === "Dwarf"
                ? activeButton
                : notActiveButton
            }
          >
            Dwarf
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: "Mix"
              })
            }
            className={
              props.shop.activeFilters.genetic === "Mix"
                ? activeButton
                : notActiveButton
            }
          >
            Mix
          </button>
        </li>
      </ul>
      <hr className="filter__hr" />
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
            className={
              props.shop.activeFilters.thc === "low"
                ? activeButton
                : notActiveButton
            }
          >
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
            className={
              props.shop.activeFilters.thc === "high"
                ? activeButton
                : notActiveButton
            }
          >
            High
          </button>
        </li>
      </ul>
      <hr className="filter__hr" />
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
            className={
              props.shop.activeFilters.cbd === "low"
                ? activeButton
                : notActiveButton
            }
          >
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
            className={
              props.shop.activeFilters.cbd === "high"
                ? activeButton
                : notActiveButton
            }
          >
            High
          </button>
        </li>
      </ul>
      <hr className="filter__hr" />
      <button
        onClick={() => props.clearFilters()}
        className="text-red-dark border border-red-dark  p-2 w-1/2 m-2 mt-4 mx-auto block font-bold slowish hover:bg-red-dark hover:text-white"
      >
        Clear
      </button>
    </div>
  );
};
export default filters;
