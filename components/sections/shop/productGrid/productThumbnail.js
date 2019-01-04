
import Link from "next/link";


const propsThumbnail = props => {

  let type;
  if (props.product.type === 0) {
    type = "Sativa";
  } else if (props.product.type === 1) {
    type = "Indica";
  } else {
    type = "Hybrid";
  }
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
  if (props.misc.viewProductExpanded == props.product._id) {
    packageStyle = {
      height: "50%",
      width: "25%",
      position: "relative",
      zIndex: 10,
      transition: "0.6s all ease-in-out",
      backgroundImage: "url(" + props.product.packageImg + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      margin: "100px auto"
    };
    plantStyle = {
      height: "20%",
      position: "absolute",
      top: "15px",
      zIndex: 0,
      transition: "0.6s all ease-in-out",
      transform: "translateX(50px)",
      cursor: "pointer"
    };
    overlayStyle = {
      height: "calc(100vh - 90px)",
      width: "1268px",
      marginTop: "30px",
      paddingBottom: "60px",
      backgroundColor: "#eee",
      transition: "0.6s all ease-in-out",
      color: "rgba(255,255,255,1)",
      position: "absolute",
      left: 0,
      boxShadow:
        "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"
    };
  }
  if (
    props.misc.viewProductExpanded != null &&
    props.misc.viewProductExpanded != props.product._id
  ) {
    return null;
  }
  let tenSeedsButton = "bg-white text-black w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold";
  let tenSeedsButtonWord = "w-full text-red-dark";
  if (props.misc.quickAddToCartQty === 1) {
    tenSeedsButton = "bg-red-dark text-white w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold";
    tenSeedsButtonWord = "w-full text-white";
  }
  if (props.hoverId != null && props.hoverId == props.product._id) {
    if (props.product.price[props.misc.quickAddToCartQty] == -1) {
      tenSeedsButton = "bg-red-dark text-white w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold";
      tenSeedsButtonWord = "w-full text-white";
    }
  }


  return (

    <div style={overlayStyle}>
      <div
        onClick={() => {
          props.expandProduct(props.product._id);
        }}
        style={packageStyle}
        className="px-12 py-2 cursor-pointer"
      />
      <Link
        href={"/props/" + props.product.name.toLowerCase().replace(" ", "-")}
      >
        <img
          onClick={() => props.expandProduct(props.product._id)}
          src={props.product.strainImg}
          style={plantStyle}
        />
      </Link>
      <Link
        href={"/props/" + props.product.name.toLowerCase().replace(" ", "-")}
      >
        <h3
          onClick={() => props.product.expandProduct(props._id)}
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
        Type:<span className="ml-1 text-black">{type}</span>
        <span className="p-2 ml-12 text-2xl">
          $
                {props.product.price[props.misc.quickAddToCartQty] < 1
            ? props.product.price[1]
            : props.product.price[props.misc.quickAddToCartQty]}
        </span>
      </p>
      <div
        className={
          props.hoverId == props.product._id
            ? "flex flex-wrap justify-center px-4"
            : "flex flex-wrap justify-center px-4 opacity-0"
        }
      >
        {props.product.price[0] > 0 ? (
          <button
            onClick={() => props.quickAddToCartQty(0)}
            className={
              props.misc.quickAddToCartQty === 0
                ? "bg-red-dark text-white w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
                : "bg-white text-black w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
            }
          >
            5
                  <span
              className={
                props.misc.quickAddToCartQty === 0
                  ? "w-full text-white"
                  : "w-full text-red-dark"
              }
            >
              seeds
                  </span>
          </button>
        ) : null}
        <button
          onClick={() => props.quickAddToCartQty(1)}
          className={tenSeedsButton}
        >
          10
                <span
            className={
              tenSeedsButtonWord
            }
          >
            seeds
                </span>
        </button>
        <button
          onClick={() => props.quickAddToCartQty(2)}
          className={
            props.misc.quickAddToCartQty === 2
              ? "bg-red-dark text-white w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
              : "bg-white text-black w-16  flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"
          }
        >
          25
                <span
            className={
              props.misc.quickAddToCartQty === 2
                ? "w-full text-white"
                : "w-full text-red-dark"
            }
          >
            seeds
                </span>
        </button>
        <button
          className="bg-red-dark  text-center text-white mx-auto m-4 p-4"
          onClick={() => {
            let _identifier =
              props.product.sotiId +
              (() => {
                switch (props.misc.quickAddToCartQty) {
                  case 0:
                    return "5";
                  case 1:
                    return "10";
                  case 2:
                    return "25";
                }
              })();
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
}

export default propsThumbnail