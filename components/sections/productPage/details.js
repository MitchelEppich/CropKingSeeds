const details = props => {
  let _product = props.viewProduct.currentProduct;
  let _genes = _product.og.map((val, index) => {
    return (
      <span key={index} className="font-bold">
        {val}
      </span>
    );
  });

  return (
    <div className="mt-1 p-2">
      <div className="flex mt-6 border-2 border-grey-lightest">
        <div className="flex flex-wrap w-2/3 justify-start">
          <div className="w-1/3  text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Grow Time:
            </p>
            <div className="p-2">{_product.flowerTime}</div>
          </div>
          <div className="w-1/3  text-center leading-tight border-grey-lightest border">
            {" "}
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Yield:
            </p>
            <div className="p-2">
              {_product.yield[0] + " "} / {_product.yield[1]}
            </div>
          </div>
          <div className="w-1/3 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Difficulty:
            </p>
            <div className="p-2">{_product.difficulty}</div>
          </div>
          <div className="w-1/3 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Genes:
            </p>
            {_genes}
          </div>
          <div className="w-1/3 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Country:
            </p>
            <div className="p-2">{_product.country}</div>
          </div>
          <div className="w-1/3 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
              Environment:
            </p>
            <div className="p-2">{_product.env}</div>
          </div>
        </div>
        <div className="w-1/3 text-center leading-tight border-grey-lightest border">
          <p className="mb-1 p-1 font-bold bg-grey-lightest text-grey uppercase">
            Effects:
          </p>
          <ul className="list-reset leading-normal text-left pl-2">
            <li>1- Relax</li>
            <li>2- Relax</li>
            <li>3- Relax</li>
            <li>4- Relax</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default details;
