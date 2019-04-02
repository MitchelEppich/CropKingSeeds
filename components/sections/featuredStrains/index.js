import Link from "next/link";

const FeaturedStrains = props => {
  if (props.misc.featuredStrains == null) return;
  let showProducts = () => {
    let rating = props.misc.featuredStrains.rating || 0;
    let showRating = () => {
      let arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(
          <div key={i}>
            <img
              src={props.misc.CFURL + "/icon/crownicon_inv.png"}
              className="w-8"
            />
          </div>
        );
      }
      return arr;
    };
    let arr = [];
    let products = props.misc.featuredStrains;

    if (["md", "sm"].includes(props.misc.mediaSize)) {
      products = products.slice(0, 2);
    }
    if (["lg"].includes(props.misc.mediaSize)) {
      products = products.slice(0, 4);
    }
    if (["xl"].includes(props.misc.mediaSize)) {
      products = products.slice(0, 5);
    }
    for (let product of products) {
      let titleColorBackground =
        " bg-" + props.detail.geneColor[product.genetic.toLowerCase()];
      arr.push(
        <Link
          prefetch
          href="/product"
          as={"/product/" + product.name.toLowerCase().replace(/ /g, "-")}
        >
          <div className="w-200 text-center mx-2 scale-item cursor-pointer mb-6 sm:mx-auto md:mx-auto">
            <img
              alt="featuredStrainPackage"
              src={props.misc.CFURL + product.packageImg}
              className="mt-4 shadow-md w-150"
            />
            <div
              className={`py-3 ${titleColorBackground} strainHome absolute pin-x pin-b mb-12`}
            >
              <p className="font-bold text-base text-white text-shadow">
                {product.name}
              </p>
            </div>
            <div className="mt-4">
              <div className="w-150 relative text-left justify-center flex mx-auto">
                <div
                  className="inline-flex bg-red-dark"
                  style={{
                    width: `${150 * (product.rating / 5)}px`,
                    height: "17px",
                    // width: "100%",
                    marginTop: "2px"
                  }}
                />
                <div
                  className="inline-flex"
                  style={{
                    width: `${150 * ((5 - product.rating) / 5)}px`,
                    height: "17px",
                    marginTop: "2px",
                    background: "#fbb2b2"
                  }}
                />
                <div className="absolute pin-l inline-flex">{showRating()}</div>
                <div className="absolute" />
              </div>
            </div>
          </div>
        </Link>
      );
    }
    return arr;
  };

  return (
    <div className="w-full bg-white">
      <div className="p-2 text-grey w-full">
        <h1 className="text-3xl text-center p-2 text-grey bg-grey-lightest mt-6 uppercase sm:text-xl md:text-2xl">
          Shop Marijuana Seeds Now!
        </h1>
      </div>
      <div className="flex inline-flex justify-around w-full mt-4 pb-4 md:flex-col sm:flex-col md:justify-center sm:justify-center sm:text-center">
        {showProducts()}
      </div>
      <div className="flex justify-center items-center">
        <Link href="/shop">
          <p className="p-2 w-250 text-center bg-red-dark text-white font-bold text-xl cursor-pointer hover:bg-red-light shadow-md uppercase scale-item">
            See all products
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedStrains;
