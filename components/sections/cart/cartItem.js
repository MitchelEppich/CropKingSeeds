import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faTimes);

//takes in the strain item as prop
//returns a cart item with the strain thumbnail, name, and quantity (also has buttons to increase or reduce qty)

const cartItem = props => {
  let currency = props.checkout.viewCurrency;
  let _coupon = props.checkout.orderDetails.coupon;
  let showCartProducts = () => {
    let _arr = [];

    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      let _product = _item.product;
      _arr.push(
        <div
          key={item}
          style={{
            background:
              Object.keys(_items).indexOf(item) % 2 == 0 ? "#e6e6e6" : "#f6f6f6"
          }}
          className={`flex justify-between px-4 py-2`}
        >
          <img
            className="h-32 sm:h-24 mx-6"
            src={props.misc.CFURL + _product.packageImg}
          />
          <div className="flex relative flex-wrap justify-between lg:w-250 lg:mr-auto md:w-250 md:mr-auto sm:w-200 sm:mr-auto">
            <Link
              key={item}
              href="/product"
              as={"/product/" + _product.name.toLowerCase().replace(/ /g, "-")}
            >
              <h3
                onClick={() => {
                  let strains = props.misc.strains;
                  props
                    .getStrain({ sotiId: _product.sotiId, strains })
                    .then(res => {
                      props.setCurrentProduct({ product: res }).then(() => {
                        let product = props.viewProduct.currentProduct;
                        let _index = 0;
                        while (product.price[_index] == -1) {
                          _index++;
                        }
                        props.quickAddToCartQty(_index);
                      });
                    });
                }}
                className="cursor-pointer text-black text-xl w-300 sm:w-150 sm:text-base h-16 pr-3 mt-2 scale-item"
              >
                {_product.name}
                <span className="text-base flex text-grey-light">
                  ({_item.amount + " pack"})
                </span>
              </h3>
            </Link>
            <div
              onClick={() => {
                props.modifyCart({
                  items: props.cart.items,
                  action: "REMOVE",
                  max: props.cart.maxPerPackage,
                  productIdentifier: item
                });
              }}
              className="h-10 w-10 cursor-pointer absolute pin-t pin-r pt-1 hover:bg-red-dark hover:text-white text-center text-grey"
            >
              <FontAwesomeIcon icon={faTimes} className="fa-sm" />
            </div>
            <div className="w-100 flex justify-between h-6 items-center sm:mt-2">
              <div className="w-100 flex justify-between h-6 items-center">
                <button
                  name="decreaseItem"
                  onClick={() =>
                    props.modifyCart({
                      items: props.cart.items,
                      action: "MODIFY",
                      max: props.cart.maxPerPackage,
                      productIdentifier: item,
                      product: _product,
                      quantity: -1,
                      coupon: _coupon
                    })
                  }
                  className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white hover:bg-red-light"
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="fa-sm text-white cursor-pointer"
                  />
                </button>
                <input
                  onBlur={e => {
                    let _value = e.target.value;
                    if (_value == "") {
                      props.modifyCart({
                        items: props.cart.items,
                        action: "SET",
                        max: props.cart.maxPerPackage,
                        productIdentifier: item,
                        product: _product,
                        quantity: 1,
                        coupon: _coupon
                      });
                    }
                  }}
                  onChange={e => {
                    let _value = e.target.value;

                    if (_value == null || parseInt(_value) < 1) {
                      _value = 1;
                    }

                    props.modifyCart({
                      items: props.cart.items,
                      action: "SET",
                      max: props.cart.maxPerPackage,
                      productIdentifier: item,
                      product: _product,
                      quantity: parseInt(_value),
                      coupon: _coupon
                    });
                  }}
                  value={_item.quantity || ""}
                  className="text-lg text-center w-12 border-0 font-bold pt-1 leading-none"
                  type="number"
                />
                <button
                  name="decreaseItem"
                  onClick={() =>
                    props.modifyCart({
                      items: props.cart.items,
                      action: "MODIFY",
                      max: props.cart.maxPerPackage,
                      productIdentifier: item,
                      product: _product,
                      quantity: 1,
                      coupon: _coupon
                    })
                  }
                  className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white hover:bg-red-light"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-sm text-white cursor-pointer"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center flex-col">
              {props.checkout.orderDetails.coupon != null ? (
                <p className="text-xl text-red-dark sm:text-base line-through font-bold opacity-50">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert *
                        (_item.quantity * _item.per)
                      ).toFixed(2)}`
                    : ""}
                </p>
              ) : null}
              <p className="text-xl text-grey-light sm:text-base font-bold">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _item.price
                    ).toFixed(2)}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return _arr;
  };
  return <div>{showCartProducts()}</div>;
};

export default cartItem;
