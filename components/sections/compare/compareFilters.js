const CompareFilters = props => {
  let buttonStyle = {
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  };
  return (
    <div className="p-2 w-full inline-flex justify-around flex">
      <div>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Sleepy
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Happy
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Relaxing
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Medical
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Fast Flowering
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          High THC
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Low THC
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          High CBD
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Low CBD
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Only CBD
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          High Yield
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          Low Yield
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          1:1 Ratio
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          2:1 Ratio
        </button>
        <button
          style={buttonStyle}
          className="text-grey border bg-grey-lightest border-grey-lightest p-2 m-1 mx-2 font-bold hover:bg-red-light hover:text-white"
        >
          20:1 Ratio
        </button>
      </div>
    </div>
  );
};

export default CompareFilters;
