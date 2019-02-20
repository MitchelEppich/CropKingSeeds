import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faPlus,
  faTimes,
  faCheck,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import CompareMenu from "./compareMenu";

const Compare = props => {
  let allProducts =
    props.misc.compareStrains != null ? props.misc.compareStrains : null;

  let showSeedAmounts = item => {
    let _arr = item.price;
    return _arr.map((price, index) => {
      return (
        <button
          name="seedPackSize"
          key={item.sotiId + index}
          onClick={() =>
            props.quickAddToCartQty(
              index,
              props.shop.quickAddToCartQty,
              item._id
            )
          }
          className={`${
            props.shop.quickAddToCartQty[item._id] === index
              ? "bg-grey-lightest text-xs text-grey w-1/3 p-2 mr-1 flex flex-wrap text-center justify-center leading-normal uppercase font-bold border border-grey-lightest hover:bg-grey-light hover:text-white "
              : "bg-white text-grey text-xs w-1/3 p-2 flex mr-1 flex-wrap text-center justify-center leading-normal uppercase font-bold border border-grey-lightest hover:bg-grey-light hover:text-white"
          } ${
            price == -1 ? "opacity-50 pointer-events-none unselectable" : ""
          }`}
        >
          <div className="w-full text-base">{[5, 10, 25][index]}</div>
          <div
            className={
              props.shop.quickAddToCartQty[item._id] === index
                ? "text-xs h-2 ml-1 flex items-center "
                : "text-xs h-2 ml-1 flex items-center "
            }
          >
            {" "}
            seeds
          </div>
        </button>
      );
    });
  };

  let Products = () => {
    let arr = [];
    if (allProducts == null) return null;
    for (let product of allProducts) {
      let productIdentifier =
        product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty[product._id]];
      let _coupon = props.checkout.orderDetails.coupon;
      arr.push(
        <td key={product._id} className="cursor-pointer w-200">
          <div className="w-full cursor-pointer">
            <div
              style={{ height: "165px" }}
              className="w-full justify-center flex p-4 relative"
            >
              <img
                src={props.misc.CFURL + product.packageImg}
                className="h-40 w-auto absolute z-50 ml-2 shadow"
              />
              <img
                src={props.misc.CFURL + product.strainImg}
                className="h-32 items-baseline pin-b flex w-auto absolute -ml-6"
              />
              <span className="h-8 w-8 z-999 px-2 justify-center px-1 text-white bg-grey-light absolute pin-r hover:bg-red-light flex -mt-2 -mr-1 shadow-md">
                <FontAwesomeIcon
                  onClick={() => {
                    props.compareStrain({
                      strain: product,
                      compareStrains:
                        props.misc.compareStrains != null
                          ? props.misc.compareStrains
                          : [],
                      action: "remove"
                    });
                  }}
                  icon={faTimes}
                  className="absolute pin-t fa-lg scale-item mt-1"
                />
              </span>
            </div>
            <div className="w-full justify-center flex">
              <h4 className="p-2 mt-8 w-full bg-red-light text-sm text-white text-center">
                {product.name.substring(0, 16)}...
              </h4>
            </div>
            <div className="mt-4 text-sm font-bold w-full flex flex-col">
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 bg-grey-lightest font-normal">
                    {product.genetic}
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.type}</p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.flowerTime}</p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.avgYield}g</p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.indica * 100}%</p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.sativa * 100}%</p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">{product.ruderalis * 100}%</p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal capitalize">{product.cbd}</p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal capitalize">{product.thc}</p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">
                    {product.pthc[1] != null ? (
                      <span>{`${product.pthc[0]}% - ${product.pthc[1]}`}</span>
                    ) : (
                      product.pthc
                    )}
                    %
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">
                    {product.pcbd[1] != null ? (
                      <span>{`${product.pcbd[0]}% - ${product.pcbd[1]}`}</span>
                    ) : (
                      product.pcbd
                    )}
                    %
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">
                    {product.pcbn[1] != null ? (
                      <span>{`${product.pcbn[0]}% - ${product.pcbn[1]}`}</span>
                    ) : (
                      product.pcbn
                    )}
                    %
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full bg-grey-lightest">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">
                    {product.rating.toFixed(2)} of 5
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full ">
                <div className="w-full text-center">
                  <p className="p-2 font-normal">
                    ${product.price[0]} / ${product.price[1]} / $
                    {product.price[2]}
                  </p>
                </div>
              </div>
              <div className="inline-flex w-main mx-auto pt-4">
                {showSeedAmounts(product)}
              </div>
              <div className="w-main mx-auto h-8 mt-1 flex justify-between border border-grey-lightest">
                <button
                  name="decreaseItem"
                  onClick={() =>
                    props.modifyPotentialQuantity({
                      potentialQuantity: props.cart.potentialQuantity,
                      action: "MODIFY",
                      tag: product._id,
                      quantity: -1
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
                  onBlur={e => {
                    let _value = e.target.value;
                    if (
                      _value == null ||
                      _value == "" ||
                      parseInt(_value) < 1
                    ) {
                      props.modifyPotentialQuantity({
                        potentialQuantity: props.cart.potentialQuantity,
                        action: "SET",
                        tag: product._id,
                        quantity: 1
                      });
                    }
                  }}
                  onChange={e => {
                    let _value = e.target.value;
                    props.modifyPotentialQuantity({
                      potentialQuantity: props.cart.potentialQuantity,
                      action: "SET",
                      tag: product._id,
                      quantity: parseInt(_value)
                    });
                  }}
                  value={
                    typeof props.cart.potentialQuantity === "number"
                      ? 1
                      : props.cart.potentialQuantity[product._id] == null
                      ? 1
                      : props.cart.potentialQuantity[product._id] == ""
                      ? props.cart.potentialQuantity[product._id]
                      : ""
                  }
                  className="text-lg text-center w-10 border-0 font-bold pt-1 leading-none"
                  type="number"
                />
                <button
                  name="increaseItem"
                  onClick={() =>
                    props.modifyPotentialQuantity({
                      potentialQuantity: props.cart.potentialQuantity,
                      action: "MODIFY",
                      tag: product._id,
                      quantity: 1
                    })
                  }
                  className="w-8 bg-grey-light text-sm text-white rounded hover:bg-red-light"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-lg text-white cursor-pointer"
                  />
                </button>
              </div>

              <div>
                <button
                  className="bg-red-dark w-main mx-auto text-center text-white p-2 hover:bg-red-light slowish rounded flex justify-center mt-4 scale-item"
                  onClick={() => {
                    props.modifyCart({
                      items: props.cart.items,
                      action: "APPEND",
                      productIdentifier: productIdentifier,
                      product: product,
                      quantity: props.cart.potentialQuantity[product._id],
                      coupon: _coupon
                    });
                    props.toggleCartAnimation();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </td>
      );
    }
    if (arr.length > 6) return arr.slice(0, 6);
    return arr;
  };

  return (
    <div className="w-full mt-5">
      <div className="text-center w-full pb-8">
        <h1
          className="mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center"
          onClick={() => console.log(props)}
        >
          Comparing our Strains
        </h1>
      </div>
      <div className="w-full inline-flex">
        <div className="w-1/5">
          <div className="p-2 bg-grey-lightest rounded">
            <h4 className="font-bold text-2xl text-grey rounded text-center">
              Categories
            </h4>
          </div>
          <div className="w-full">
            <CompareMenu {...props} />
          </div>

          <div className="w-full mt-2">
            <div className="bg-red-dark text-white rounded text-center text-xl cursor-pointer hover:bg-red-light p-2 w-full font-bold">
              <h4>Compare</h4>
            </div>
          </div>
          <div />
        </div>
        <div className="w-4/5 ml-4">
          <p className="text-center bg-grey-lightest p-3 my-4 mt-0 font-bold rounded text-base uppercase text-grey">
            Please, select at least{" "}
            <span className="font-bold underline">2</span> and max{" "}
            <span className="font-bold underline">6</span> strains to compare.
          </p>
          <div className="flex flex-wrap w-full justify-start">
            {props.misc.compareStrains != null ? (
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-sm w-200">
                      <div
                        style={{ height: "154px" }}
                        className="w-full justify-center flex p-4 relative"
                      />
                      <div className="w-full justify-center flex mt-10">
                        <h4 className="p-2 w-full bg-red-light text-white mt-1 text-center text-sm">
                          Strain:
                        </h4>
                      </div>
                      <div className="inline-flex w-full mt-4">
                        <div className="w-full bg-grey-lightest">
                          <p className="p-2 font-bold uppercase">Genetic:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Type:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">
                            Flower Time:{" "}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">
                            Average Yield:{" "}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Indica: </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Sativa: </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Ruderalis: </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">CBD Level:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">THC Level: </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">THC %: </p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">CBD %:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">CBN %:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full bg-grey-lightest">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Reviews:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full">
                        <div className="w-full">
                          <p className="p-2 font-bold uppercase">Prices:</p>
                        </div>
                      </div>
                      <div className="inline-flex w-full mt-32 mb-5 bg-red-dark text-white" />
                    </td>
                    {Products()}
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
          {props.misc.compareStrains != null ? (
            <div className="w-full flex justify-end mt-8">
              <div
                onClick={() => {
                  props.compareStrain({
                    strain: props.misc.compareStrains,
                    compareStrains:
                      props.misc.compareStrains != null
                        ? props.misc.compareStrains
                        : [],
                    action: "remove"
                  });
                }}
                className="bg-red-dark text-white rounded text-center text-xl cursor-pointer hover:bg-red-light p-2 w-200 font-bold scale-item"
              >
                <h4>Clear Comparison</h4>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Compare;
