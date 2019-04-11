import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import MinimumSeedsWarning from "../other/minimumSeedsWarning";
import MinimumOrderWarning from "../other/minimumOrderWarning";
import FreeShippingNotify from "../freeShippingNotify";

const ProductPreview = props => {
  let imgPack = {
    width: "60%"
  };

  let currency = props.checkout.viewCurrency;
  let _coupon = props.checkout.orderDetails.coupon;

  let _itemscart = Object.keys(props.cart.items);

  let showProducts = () => {
    let _arr = [];

    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      let _product = _item.product;

      let hasSale = _item.sale != null;

      _arr.push(
        <div
          key={item}
          style={{
            borderRadius: "5px",
            overflow: "hidden",
            boxShadow: "0 2px 9px rgba(29, 29, 29, 0.12)"
          }}
          className="relative sm:mx-0 mt-4 bg-white xxl:item-preview xl:item-preview lg:item-preview w-3col xl:w-2col lg:w-2col md:w-full sm:w-full"
        >
          <div className="inline-flex w-full items-center flex bg-red-light text-white">
            <div className="w-full">
              <h3 className="px-2 h-10 w-full text-xl lg:text-lg p-2 font-bold inline-flex sm:text-lg sm:items-center">
                {["sm", "md"].includes(props.misc.mediaSize)
                  ? _product.name.substring(0, 20) + "..."
                  : _product.name}
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
                    max: props.cart.maxPerPackage,
                    productIdentifier: item
                  });
                }}
              />
            </div>
          </div>
          <div className="inline-flex w-full lg:h-175">
            <div className="w-1/3 text-center cursor-pointer p-2">
              <img
                alt={
                  props.misc.CFURL + "/packages/P_" + _product.sotiId + ".png"
                }
                src={
                  props.misc.CFURL + "/packages/P_" + _product.sotiId + ".png"
                }
              />
            </div>
            <div className="mt-1 p-2 lg:p-1 pt-2 w-2/3 relative md:flex md:flex-wrap md:content-start sm:p-1">
              <div className="sm:mt-0 mt-2 md:w-full md:h-6 md:items-start md:mt-0 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  Package:
                </div>
                <div className="px-2 md:px-0 sm:text-right sm:w-full md:w-full md:text-right font-bold w-1/2 text-grey uppercase md:text-base sm:text-base text-sm text-right">
                  {_item.amount} Pack
                </div>
              </div>
              <div className="sm:mt-0 mt-2 md:w-full md:h-6 md:items-start md:mt-0 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  Strain Type:
                </div>
                <div className="px-2 md:px-0 sm:text-right sm:w-full md:w-3/5 md:text-right font-bold w-1/2 text-grey uppercase md:text-base sm:text-base text-sm text-right">
                  {_product.type}
                </div>
              </div>
              <div className="sm:mt-0 mt-2 md:w-full md:h-6 md:items-start md:mt-0 w-full inline-flex items-center flex">
                <div className="font-bold w-1/2 text-grey-light uppercase text-xs">
                  Per pack:
                </div>
                <div
                  className={
                    "px-2 sm:text-right sm:w-full md:w-full md:h-6 md:items-end md:mt-0 md:px-0 md:text-right font-bold w-1/2 text-grey uppercase text-sm text-right md:text-lg sm:text-lg" +
                    (hasSale ? " line-through" : "")
                  }
                >
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert * (_item.per || 0)
                      ).toFixed(2)}`
                    : ""}
                </div>
              </div>
              {hasSale ? (
                <div className="sm:mt-0 mt-2 w-full md:h-6 md:mt-0 md:text-right inline-flex items-center flex">
                  <div className="font-bold w-1/2 text-grey-light uppercase md:text-base text-xs">
                    {" "}
                    Sale Price:
                  </div>
                  <div className="px-2 sm:text-right sm:w-full md:w-full md:text-right font-bold w-1/2 text-red-light uppercase text-sm text-right sm:text-lg">
                    {currency != null
                      ? `${currency.symbol}${(
                          currency.convert * (_item.sale || 0)
                        ).toFixed(2)}`
                      : ""}
                  </div>
                </div>
              ) : null}
              <div className="w-full sm:relative absolute pt-4 z-50 sm:flex-col lg:flex-col pin-l pin-b mb-4 lg:mb-1 p-2 sm:p-1 sm:mb-0 flex items-center inline-flex sm:mt-4">
                <div className="w-full mr-2 sm:mr-0 md:mr-0 lg:w-full">
                  <div className="flex lg:w-full md:justify-start justify-end h-6 w-100 sm:w-full items-center">
                    <button
                      name="decreaseItem"
                      type="button"
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
                      className="px-2 py-1 scale-item bg-almost-black rounded text-xl hover:bg-red-light sm:text-sm text-white"
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="fa-sm text-white cursor-pointer "
                      />
                    </button>
                    <input
                      aria-label="modifyCart"
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
                      className="text-lg text-center w-10 lg:w-8 md:w-8 sm:w-8 border-0 font-bold pt-1 leading-none"
                      type="number"
                    />

                    <button
                      name="increaseItem"
                      type="button"
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
                      className="px-2 py-1 scale-item bg-almost-black rounded text-xl hover:bg-red-light sm:text-sm text-white"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="fa-sm text-white cursor-pointer "
                      />
                    </button>
                  </div>
                </div>
                <div className="text-right w-full lg:mt-2 mt-1 sm:mt-2 md:mt-2 items-center md:text-left">
                  <div className="sm:mt-0 mt-2 md:w-1/2 md:h-6 md:items-start md:mt-0 w-full inline-flex items-center flex">
                    <div className="md:hidden lg:hidden xl:hidden xxl:hidden font-bold w-1/2 text-grey-light uppercase text-xs">
                      Subtotal:
                    </div>
                    <div className="px-2 md:px-0 sm:text-right sm:w-full md:w-full md:text-left font-bold w-1/2 text-grey uppercase md:text-base sm:text-base text-sm text-right">
                      <p
                        className={`font-bold ${
                          hasSale ? "text-red-light" : "text-grey"
                        } text-lg lg:text-xl`}
                      >
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
          </div>
        </div>
      );
    }
    return _arr;
  };

  return (
    <div className="w-full mt-6 mb-2 px-8 lg:px-2 md:px-4 sm:px-4">
      <h2 className="text-3/5xl sm:text-center sm:text-3xl font-extrabold opacity-50 mt-8 mb-4 text-center text-black">
        Shopping Cart
      </h2>
      <FreeShippingNotify {...props} />
      <MinimumSeedsWarning {...props} />
      <MinimumOrderWarning {...props} />
      <div className="w-full inline-flex flex-wrap mb-4 mt-2 justify-around">
        {_itemscart.length > 0 ? (
          showProducts()
        ) : (
          <div className="w-full text-center text-base">
            <p className="text-3xl mb-2 mt-12 font-extrabold">
              Sorry, your cart is empty!
            </p>
            <p>Looks like you have no items in your shopping cart.</p>
            <p>Check back after more shopping.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
