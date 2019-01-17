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
      <div className="flex xl:block lg:block md:block sm:block mt-6">
        <div className="flex flex-wrap w-2/3 justify-start xl:w-full lg:w-full md:w-full sm:w-full">
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Grow Time:
            </p>
            <div className="p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">{_product.flowerTime}</div>
          </div>
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            {" "}
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Yield:
            </p>
            <div className="p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              {_product.yield[0] + " "} / {_product.yield[1]}
            </div>
          </div>
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Difficulty:
            </p>
            <div className="p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">{_product.difficulty}</div>
          </div>
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Genes:
            </p>
            {_genes}
          </div>
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Country:
            </p>
            <div className="p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">{_product.country}</div>
          </div>
          <div className="w-1/3 sm:w-1/2 text-center leading-tight border-grey-lightest border">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Environment:
            </p>
            <div className="p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">{_product.env}</div>
          </div>
        </div>
        <div className="w-1/3 text-center leading-tight border-grey-lightest border xl:block lg:block xl:w-full lg:w-full md:block md:w-full sm:block sm:w-full">
          <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
            Effects:
          </p>
          <ul className="list-reset leading-normal text-left pl-2">
            <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">1- Relax</li>
            <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">2- Relax</li>
            <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">3- Relax</li>
            <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">4- Relax</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default details;
