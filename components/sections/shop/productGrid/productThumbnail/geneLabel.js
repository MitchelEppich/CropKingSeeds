const geneLabel = props => {
  return (
    <div className="text-center w-full">
      <p
        className={
          props.hover
            ? "text-grey my-3 sm:my-0 slow font-bold text-sm"
            : props.misc.lowGPUMode
            ? "text-grey mt-3 font-bold text-sm"
            : "hidden slow"
        }
      >
        <span className="p-2 ml-1 text-grey font-bolder uppercase text-grey">
          {props.product.genetic} {props.product.type}
        </span>
      </p>
    </div>
  );
};

export default geneLabel;
