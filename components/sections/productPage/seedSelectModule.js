import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

const seedSelectModule = props => {
  let _product = props.product || props.viewProduct.currentProduct;

  let showSeedAmounts = () => {
    let _arr = _product.price;
    return _arr.map((price, index) => {
      return (
        <button
          name="seedPackSize"
          key={_product.sotiId + index}
          onClick={() => {
            props.quickAddToCartQty(
              index,
              props.shop.quickAddToCartQty,
              _product._id
            );
          }}
          className={`${
            props.shop.quickAddToCartQty[_product._id] === index
              ? "bg-grey-lightest text-grey w-1/3 md:h-12 h-10 mr-1 text-lg flex flex-wrap text-center justify-center leading-normal uppercase md:flex-col md:justify-center md:items-center font-bold border border-grey-lightest hover:bg-grey-light hover:text-white  "
              : "bg-white text-grey w-1/3 md:h-12 h-10 flex mr-1 text-lg flex-wrap text-center justify-center leading-normal uppercase md:flex-col md:justify-center md:items-center font-bold border border-grey-lightest hover:bg-grey-light hover:text-white"
          } ${
            price == -1 ? "opacity-50 pointer-events-none unselectable" : ""
          }`}
        >
          {[5, 10, 25][index]}
          <span
            className={
              props.shop.quickAddToCartQty === index
                ? "text-sm ml-1 flex items-center md:pt-0 pt-1"
                : "text-sm ml-1 flex items-center md:pt-0 pt-1"
            }
          >
            seeds
          </span>
        </button>
      );
    });
  };

  return (
    <div className="w-full flex flex-wrap content-center my-2">
      <div className="inline-flex w-full">{showSeedAmounts()}</div>
      <div className="w-full h-8 mt-1 flex justify-between border border-grey-lightest">
        <button
          name="decreaseItem"
          aria-label="Decrease Item"
          onClick={() =>
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "MODIFY",
              tag: _product._id,
              quantity: -1,
              max: props.cart.maxPerPackage
            })
          }
          className="w-8 bg-grey-light text-sm text-white rounded hover:bg-red-light"
        >
          <FontAwesomeIcon
            icon={faMinus}
            className="fa-lg text-white cursor-pointer"
          />
        </button>
        <input
          aria-label="modifyCart"
          onBlur={e => {
            let _value = e.target.value;
            if (_value == null || _value == "" || parseInt(_value) < 1) {
              props.modifyPotentialQuantity({
                potentialQuantity: props.cart.potentialQuantity,
                action: "SET",
                tag: _product._id,
                max: props.cart.maxPerPackage,
                quantity: 1
              });
            }
          }}
          onChange={e => {
            let _value = e.target.value;
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "SET",
              tag: _product._id,
              max: props.cart.maxPerPackage,
              quantity: parseInt(_value)
            });
          }}
          value={props.cart.potentialQuantity[_product._id] || ""}
          className="text-lg text-center w-48 lg:w-32 md:w-24 sm:w-24 xl:w-32 border-0 font-bold pt-1 leading-none"
          type="number"
        />
        <button
          aria-label="Increase Item"
          name="increaseItem"
          onClick={() => {
            props.modifyPotentialQuantity({
              potentialQuantity: props.cart.potentialQuantity,
              action: "MODIFY",
              tag: _product._id,
              max: props.cart.maxPerPackage,
              quantity: 1
            });
          }}
          className="w-8 bg-grey-light text-sm text-white rounded hover:bg-red-light"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="fa-lg text-white cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default seedSelectModule;
