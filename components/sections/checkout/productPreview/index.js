import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductPreview = props => {
  let imgPack = {
    height: "100%",
    width: "100%",
    objectFit: "cover"
  };

  // console.log(props);
  let showProducts = () => {
    let _arr = [];

    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      let _product = _item.product;
      _arr.push(
        <div
          key={item}
          style={{ width: "48%" }}
          className="inline-flex relative mx-2 mt-4 item-preview">
          <div className="w-2/5 text-center cursor-pointer p-1">
            <img src={_product.packageImg} style={imgPack} />
          </div>
          <div className="mt-1 p-2 pt-2 w-3/5 relative">
            <div className="inline-flex w-full items-center flex">
              <div className="w-full">
                <h3 className="px-2 h-10 w-full text-2xl font-bold inline">
                  {_product.name}
                </h3>
              </div>

              <div className="inline float-right h-10 w-12 px-3 items-center flex cursor-pointer hover:text-white hover:bg-red-dark text-center p-2s">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="fa-lg ml-1 cursor-pointer"
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
            <p className="px-2 pt-4 font-medium text-grey-light text-md">
              {_item.amount} Packs
            </p>
            <p className="px-2 pt-2 font-medium text-grey-light text-md">
              {_product.type}
            </p>
            <p className="px-2 pt-2 font-medium text-grey-light text-md">
              ${_item.per.toFixed(2)}
            </p>
            <div className="absolute w-full p-2 flex items-center inline-flex mr-2 pin-r h-12 pin-b justify-end">
              <div className="mx-4">
                {/* <input
                  type="number"
                  maxLength="100"
                  size="3"
                  placeholder="XXX"
                  className="p-2"
                  style={{ width: "70px" }}
                /> */}
                <div className="w-100 flex justify-between h-6 items-center">
                  <button
                    onClick={() =>
                      props.modifyCart({
                        items: props.cart.items,
                        action: "MODIFY",
                        productIdentifier: item,
                        product: _product,
                        quantity: -1
                      })
                    }
                    className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="fa-sm text-white cursor-pointer"
                    />
                  </button>
                  <p className="leading-none font-semibold text-xl">
                    {_item.quantity}
                  </p>
                  <button
                    onClick={() =>
                      props.modifyCart({
                        items: props.cart.items,
                        action: "MODIFY",
                        productIdentifier: item,
                        product: _product,
                        quantity: 1
                      })
                    }
                    className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-sm text-white cursor-pointer"
                    />
                  </button>
                </div>
              </div>
              <div
                style={{ borderRadius: "5px" }}
                className="text-grey-light text-center">
                <p className="font-semibold text-2xl">${_item.price}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return _arr;
  };

  return (
    <div className="w-full mt-6 mb-8">
      <h2 className="text-3/5xl font-extrabold mt-12 mb-6 text-black">
        Shopping Cart
      </h2>
      <div className="w-full inline-flex flex-wrap mb-4 mt-2">
        {showProducts()}
      </div>
    </div>
  );
};

export default ProductPreview;
