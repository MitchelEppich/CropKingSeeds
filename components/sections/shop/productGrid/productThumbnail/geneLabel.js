const geneLabel = props => {
  return (
    <div className="text-center w-full pt-8">
      <p
        className={
          props.hover
            ? "text-grey my-3 sm:my-0 slow font-extrabold text-sm"
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
