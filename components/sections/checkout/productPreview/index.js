import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import MinimumSeedsWarning from "../other/minimumSeedsWarning";

const ProductPreview = props => {
  let imgPack = {
    width: "60%"
  };

  let currency = props.checkout.viewCurrency;

  let showProducts = () => {
    let _arr = [];

    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      let _product = _item.product;
      _arr.push(
        <div
          key={item}
          style={{
            borderRadius: "5px",
            overflow: "hidden",
            boxShadow: "0 2px 9px rgba(29, 29, 29, 0.12)"
          }}
          className="relative mx-2 mt-4 bg-white item-preview w-31percent"
        >
          <div className="inline-flex w-full items-center flex bg-red-light text-white">
            <div className="w-full">
              <h3 className="px-2 h-10 w-full text-xl p-2 font-bold inline-flex">
                {_product.name}
              </h3>
            </div>

            <div className="float-right h-10 w-10 items-center flex cursor-pointer hover:text-white hover:bg-red-dark text-center">
              <FontAwesomeIcon
                icon={faTimes}
                className="fa-2x pl-1 ml-1 cursor-pointer"
                onClick={() => {
                  props.modifyCart({
                    items: props.cart.items,
                    action: "REMOVE",
                    productIdentifier: item
                  });
                }}
              />
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/3 text-center cursor-pointer p-2">
              <img src={_product.packageImg} />
            </div>
            <div className="mt-1 p-2 pt-2 w-2/3 relative">
              <div className="mt-2 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  Package:
                </div>{" "}
                <div className="px-2 font-bold w-1/2 text-grey uppercase text-sm text-right">
                  {_item.amount} Packs
                </div>
              </div>
              <div className="mt-2 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  Strain Type:
                </div>{" "}
                <div className="px-2 font-bold w-1/2 text-grey uppercase text-sm text-right">
                  {_product.type}
                </div>
              </div>
              <div className="mt-2 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  {" "}
                  Per pack:
                </div>
                <div className="px-2 font-bold w-1/2 text-grey uppercase text-sm text-right">
                  ${_item.per.toFixed(2)}
                </div>
              </div>
              <div className="w-full p-2 mt-8 flex items-center inline-flex h-12 justify-start">
                <div className="w-full mr-2">
                  <div
                    style={{ width: "90px" }}
                    className="flex justify-end h-6 items-center"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        props.modifyCart({
                          items: props.cart.items,
                          action: "MODIFY",
                          productIdentifier: item,
                          product: _product,
                          quantity: -1
                        })
                      }
                      className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white"
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
                            price: _item.price,
                            productIdentifier: item,
                            product: _product,
                            quantity: 1
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
                          price: _item.price,
                          productIdentifier: item,
                          product: _product,
                          quantity: parseInt(_value)
                        });
                      }}
                      value={_item.quantity || ""}
                      className="text-lg text-center w-10 border-0 font-bold pt-1 leading-none"
                      type="number"
                    />
                    {/* <p className="leading-none font-semibold text-xl">
                    {_item.quantity}
                  </p> */}
                    <button
                      type="button"
                      onClick={() =>
                        props.modifyCart({
                          items: props.cart.items,
                          action: "MODIFY",
                          productIdentifier: item,
                          product: _product,
                          quantity: 1
                        })
                      }
                      className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="fa-sm text-white cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
                <div className="text-right w-full mt-1 items-center">
                  <p className="font-bold text-grey text-lg">
                    {currency != null
                      ? `${currency.symbol}${(
                          currency.convert * (_item.price || 0)
                        ).toFixed(2)}`
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return _arr;
  };

  return (
    <div className="w-full mt-6 mb-8 px-8">
      <h2 className="text-3/5xl font-extrabold mt-12 mb-6 text-black">
        Shopping Cart
      </h2>
      <MinimumSeedsWarning {...props} />

      <div className="w-full inline-flex flex-wrap mb-4 mt-2">
        {showProducts()}
      </div>
    </div>
  );
};

export default ProductPreview;
