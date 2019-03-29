import Router from "next/router";
import Link from "next/link";

const videoSlide = props => {
  let strains =
    props.misc.featuredStrains > 0
      ? props.misc.featuredStrains
      : props.misc.strains;
  let packages = strains.slice(0, 6).map((strain, index) => {
    return (
      <img
        key={index}
        onMouseEnter={() => {
          props.setCurrentProduct({ product: strain }).then(() => {
            let product = props.viewProduct.currentProduct;
            let _index = 0;
            while (product.price[_index] == -1) {
              _index++;
            }
            props.quickAddToCartQty(_index);
          });
        }}
        onClick={e => {
          e.stopPropagation();
          Router.push(
            "/product",
            "/product/" + strain.name.toLowerCase().replace(/ /g, "-")
          );
        }}
        className="xxl:h-40 xxl:mx-6 h-250 lg:h-200 my-2 scale-item"
        src={props.misc.CFURL + "/packages/" + strain.sotiId + ".png"}
        style={{
          zIndex: "30",
          boxShadow: "1px 5px 13px rgba(35, 35, 35, 0.52)"
        }}
      />
    );
  });
  console.log(props.slidePosition);
  return (
    <div
      style={{
        ...props.slidePosition
      }}
      className="flex items-center flex justify-end w-full bg-grey-lightest absolute"
    >
      <div className="w-1/5 z-50 flex flex-wrap sm:hidden md:hidden mb-4 justify-around cursor-pointer pl-8">
        {packages.slice(0, 3)}
      </div>
      <video
        onClick={() => {
          let self = document.querySelector("#video" + props.index);
          self.muted = !self.muted;
        }}
        className="sm:w-full md:w-full md:mr-0 sm:mr-0 w-full lg:w-3/5 shadow-md flex justify-end"
        muted={true}
        loop
        id={"video" + props.index}
        src={props.$url}
      />
      <div className="w-1/5 z-50 flex flex-wrap sm:hidden md:hidden mb-4 justify-around cursor-pointer pr-8">
        {packages.slice(3)}
      </div>
    </div>
  );
};

export default videoSlide;
