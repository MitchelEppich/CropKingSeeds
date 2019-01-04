import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faTimes);

//takes in the strain item as prop
//returns a cart item with the strain thumbnail, name, and quantity (also has buttons to increase or reduce qty)
const cartItem = props => {
  return (
    <div className="flex justify-between px-4 py-2">
      <img className="h-32" src={props.item.product.packageImg} />
      <div className="flex flex-wrap justify-between">
        <h3 className="text-black text-2xl w-300 h-16 pr-3">
          {props.item.product.name}
          <span className="text-base ml-2">
            ({props.item.amount + " pack)"}
          </span>
        </h3>
        <div className="h-16">
          <FontAwesomeIcon
            icon={faTimes}
            className="fa-sm text-grey-lighter hover:text-grey-light cursor-pointer"
            onClick={() => {
              props.modifyCart({
                items: props.cart.items,
                action: "REMOVE",
                productIdentifier: props.item.productIdentifier
              });
            }}
          />
        </div>
        <div className="w-100 flex justify-between h-6">
          <button
            onClick={() =>
              props.modifyCart({
                items: props.cart.items,
                action: "MODIFY",
                productIdentifier: props.item.productIdentifier,
                product: props.item.product,
                quantity: -1
              })
            }
            className="px-2 bg-red-dark text-sm text-white"
          >
            <FontAwesomeIcon
              icon={faMinus}
              className="fa-sm text-white cursor-pointer"
            />
          </button>
          <p className="text-2xl leading-none">{props.item.quantity}</p>
          <button
            onClick={() =>
              props.modifyCart({
                items: props.cart.items,
                action: "MODIFY",
                productIdentifier: props.item.productIdentifier,
                product: props.item.product,
                quantity: 1
              })
            }
            className="px-2 bg-red-dark text-sm text-white"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="fa-sm text-white cursor-pointer"
            />
          </button>
        </div>
        <p>${props.item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default cartItem;
