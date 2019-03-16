const CompareFilters = props => {
  let buttonStyle = {
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  };
  let filters = props.compare.filters.map((filter, index) => {
    return (
      <button
        style={buttonStyle}
        className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
      >
        {filter.name}
      </button>
    );
  });
  return (
    <div className="p-2 w-full inline-flex justify-around flex">
      <div>{filters}</div>
    </div>
  );
};

export default CompareFilters;
