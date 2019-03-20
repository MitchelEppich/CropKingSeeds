const FeaturedStrains = props => {
  let showProducts = () => {
    let rating;
    let showRating = () => {
      rating = props.misc.featuredStrains.rating || 0;

      let arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(
          <div key={i}>
            <img src="../../static/img/CrownIcon_Inv.png" className="w-8" />
          </div>
        );
      }
      return arr;
    };
    let arr = [];
    let products = props.misc.featuredStrains;
    for (let product of products) {
      let titleColorBackground =
        " bg-" + props.detail.geneColor[product.genetic.toLowerCase()];
      arr.push(
        <div className="w-200 text-center mx-2 scale-item cursor-pointer mb-6">
          <img
            alt="featuredStrainPackage"
            src={props.misc.CFURL + product.packageImg}
            className="mt-4 shadow-md"
          />
          {/* <div
            className={`py-3 ${titleColorBackground} strainTitle absolute pin-x pin-b mt-4`}
          >
            <p className="font-bold text-base text-white text-shadow">
              {product.name}
            </p>
          </div> */}
          <div className="mt-4">
            <div className="w-150 relative text-left justify-center flex mx-auto">
              <div
                className="inline-flex bg-red-light"
                style={{
                  width: `${150 * (rating / 5)}px`,
                  height: "17px",
                  marginTop: "2px"
                }}
              />
              <div
                className="inline-flex"
                style={{
                  width: `${150 * ((5 - rating) / 5)}px`,
                  height: "17px",
                  marginTop: "2px",
                  background: "#e00600"
                }}
              />
              <div className="absolute pin-l inline-flex">{showRating()}</div>
              <div className="absolute" />
            </div>
          </div>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="w-full bg-white">
      <div className="p-2 text-grey w-full">
        <h1 className="text-3/5xl text-center p-4 text-grey bg-grey-lightest mt-6">
          Featured Strains
        </h1>
      </div>
      <div className="flex inline-flex justify-around w-full mt-4 pb-24">
        {showProducts()}
      </div>
    </div>
  );
};

export default FeaturedStrains;
