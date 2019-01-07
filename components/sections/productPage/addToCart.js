import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);



const addToCart = props => {
  let currentProduct = props.viewProduct.currentProduct;
  let tenSeedsButton =
    "bg-white text-black w-75px flex flex-wrap text-2xl uppercase text-center justify-center leading-normal shadow-md mx-2 font-bold my-4";
  let tenSeedsButtonWord = "w-full text-base text-red-dark";
  if (props.shop.quickAddToCartQty === 1) {
    tenSeedsButton =
      "bg-red-dark text-white w-75px flex flex-wrap text-2xl uppercase text-center justify-center leading-normal shadow-md mx-2 font-bold my-4";
    tenSeedsButtonWord = "w-full text-base text-white";
  }
  if (currentProduct.price[props.shop.quickAddToCartQty] == -1) {
    tenSeedsButton =
      "bg-red-dark text-white w-75px flex flex-wrap text-2xl uppercase text-center justify-center leading-normal shadow-md mx-2 font-bold my-4";
    tenSeedsButtonWord = "w-full text-base text-white";
  }


  return (
    <div className="w-2/3 h-300 flex">
      <div className={currentProduct.price[0] > 0 ? "flex flex-wrap justify-between w-300 h-16" : "flex flex-wrap justify-between w-200 h-16"}>
        {/* Prices */}
        {currentProduct.price[0] > 0 ? <p className="w-75px text-center text-2xl text-grey-light mx-2 my-4">${currentProduct.price[0]}</p> : null}
        <p className="w-75px text-center text-2xl text-grey-light mx-2 my-4 ">${currentProduct.price[1]}</p>
        <p className="w-75px text-center text-2xl text-grey-light mx-2 my-4 ">${currentProduct.price[2]}</p>

        {/* Quantity Buttons */}
        {currentProduct.price[0] > 0 ?
          <div className="w-75px flex justify-between mx-2 shadow-md">
            <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
              <FontAwesomeIcon icon={faMinus} className="fa-sm text-white cursor-pointer" />
            </button>
            <p className="text-2xl leading-none mb-1">{props.viewProduct.quantity[0]}</p>
            <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
              <FontAwesomeIcon icon={faPlus} className="fa-sm text-white cursor-pointer" />
            </button>
          </div>
          : null}
        <div className="w-75px flex justify-between mx-2 shadow-md">
          <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
            <FontAwesomeIcon icon={faMinus} className="fa-sm text-white cursor-pointer" />
          </button>
          <p className="text-2xl leading-none mb-1">{props.viewProduct.quantity[1]}</p>
          <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
            <FontAwesomeIcon icon={faPlus} className="fa-sm text-white cursor-pointer" />
          </button>
        </div>
        <div className="w-75px flex justify-between mx-2 shadow-md">
          <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
            <FontAwesomeIcon icon={faMinus} className="fa-sm text-white cursor-pointer" />
          </button>
          <p className="text-2xl leading-none mb-1">{props.viewProduct.quantity[2]}</p>
          <button onClick={() => props.modifyCart({})} className="px-2 bg-grey-light text-sm text-white">
            <FontAwesomeIcon icon={faPlus} className="fa-sm text-white cursor-pointer" />
          </button>
        </div>

        {/* Pack size buttons */}
        {currentProduct.price[0] > 0 ? (
          <button onClick={() => props.quickAddToCartQty(0)} className={props.shop.quickAddToCartQty === 0 ? "bg-red-dark text-white w-75px flex flex-wrap text-2xl uppercase text-center justify-center leading-normal shadow-md mx-2 font-bold my-4" : "bg-white text-black w-75px flex flex-wrap text-2xl uppercase text-center justify-center leading-normal shadow-md mx-2 font-bold my-4"}>
            5
                <span className={props.shop.quickAddToCartQty === 0 ? "w-full text-base text-white" : "w-full text-base text-red-dark"}>
              seeds
                </span>
          </button>
        ) : null}
        <button onClick={() => props.quickAddToCartQty(1)} className={tenSeedsButton}>
          10
              <span className={tenSeedsButtonWord}>seeds</span>
        </button>
        <button onClick={() => props.quickAddToCartQty(2)} className={props.shop.quickAddToCartQty === 2
          ? "bg-red-dark text-white w-75px h-75px text-2xl uppercase flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold my-4"
          : "bg-white text-black w-75px h-75px text-2xl uppercase flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold my-4"}>
          25
          <span
            className={
              props.shop.quickAddToCartQty === 2
                ? "w-full text-base text-white"
                : "w-full text-base text-red-dark"
            }>
            seeds
          </span>
        </button>
      </div>
      <button className="bg-red-dark text-2xl uppercase h-75px text-center text-white mx-auto m-4 mt-25 p-4 px-6" onClick={() => {
        let _identifier = currentProduct.sotiId + (() => {
          switch (props.shop.quickAddToCartQty) {
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
          product: currentProduct,
          quantity: 1
        });
      }}>
        Add to Cart
            </button>
    </div>
  )
}

export default addToCart;