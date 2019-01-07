import Link from "next/link";

const productThumbnail = props => {
  let packageStyle =
    props.hoverId == props.product._id
      ? {
          height: "50%",
          width: "50%",
          position: "relative",
          zIndex: 10,
          transition: "0.6s all ease-in-out",
          backgroundImage: "url(" + props.product.packageImg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }
      : {
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 10,
          transition: "0.6s all ease-in-out",
          backgroundImage: "url(" + props.product.packageImg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover"
        };

  let plantStyle =
    props.hoverId == props.product._id
      ? {
          height: "40%",
          position: "absolute",
          top: "15px",
          zIndex: 0,
          transition: "0.6s all ease-in-out",
          transform: "translateX(50px)",
          cursor: "pointer"
        }
      : {
          height: "90%",
          position: "absolute",
          top: "15px",
          zIndex: 0,
          transition: "0.6s all ease-in-out",
          cursor: "pointer"
        };

  let overlayStyle =
    props.hoverId == props.product._id
      ? {
          height: "180%",
          width: "110%",
          paddingBottom: "60px",
          backgroundColor: "#eee",
          transition: "0.6s all ease-in-out",
          color: "rgba(255,255,255,1)",
          position: "absolute",
          boxShadow:
            "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"
        }
      : {
          height: "100%",
          width: "100%",
          backgroundColor: "#eee",
          transition: "0.6s all ease-in-out",
          color: "rgba(255,255,255,0)",
          position: "relative",
          zIndex: "0",
          overflow: "visible"
        };

  let showSeedAmounts = () => {
    let _product = props.product;
    let _arr = _product.price;
    return _arr.map((price, index) => {
      return (
        <button
          key={_product.sotiId + index}
          onClick={() => props.quickAddToCartQty(index)}
          className={`${
            props.shop.quickAddToCartQty === index
              ? "bg-red-dark text-white w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
              : "bg-white text-black w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
          } ${
            price == -1 ? "opacity-50 pointer-events-none unselectable" : ""
          }`}
        >
          {[5, 10, 25][index]}
          <span
            className={
              props.shop.quickAddToCartQty === index
                ? "w-full text-white"
                : "w-full text-red-dark"
            }
          >
            seeds
          </span>
        </button>
      );
    });
  };

  return (
    <div style={overlayStyle}>
      <Link
        href="/viewProduct"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
      >
        <div style={packageStyle} className="px-12 py-2 cursor-pointer" />
      </Link>
      <Link
        href="/viewProduct"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
      >
        <img src={props.product.strainImg} style={plantStyle} />
      </Link>
      <Link
        href="/viewProduct"
        as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
      >
        <h3
          className={
            props.hoverId == props.product._id
              ? "w-full mt-2 text-black font-black text-2xl text-center cursor-pointer"
              : "opacity-0 slow"
          }
        >
          {props.product.name.substring(0, props.product.name.length - 15)}
        </h3>
      </Link>
      <p
        className={
          props.hoverId == props.product._id
            ? "text-grey pl-4 my-4 slow"
            : "opacity-0 slow"
        }
      >
        Type:<span className="ml-1 text-black">{props.product.type}</span>
        <span className="p-2 ml-12 text-2xl">
          ${" "}
          {props.product.price[props.shop.quickAddToCartQty] < 1
            ? props.product.price[1]
            : props.product.price[props.shop.quickAddToCartQty]}
        </span>
      </p>
      <div
        className={
          props.hoverId == props.product._id
            ? "flex flex-wrap justify-center px-4"
            : "flex flex-wrap justify-center px-4 opacity-0"
        }
      >
        {showSeedAmounts()}
        <button
          className="bg-red-dark  text-center text-white mx-auto m-4 p-4"
          onClick={() => {
            let _identifier =
              props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];
            props.modifyCart({
              items: props.cart.items,
              action: "APPEND",
              productIdentifier: _identifier,
              product: props.product,
              quantity: 1
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default productThumbnail;
