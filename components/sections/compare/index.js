import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faPlus,
  faTimes,
  faCheck,
  faMinus,
  faCopy,
  faExternalLinkAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import CompareMenu from "./compareMenu";
import CompareFilters from "./compareFilters";
import SearchCompare from "./searchCompare";

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
      //copy url of product
      let copyEmbedLink = () => {
        const el = document.createElement("textarea");
        el.value =
          window.location.origin +
          "/product/" +
          product.name.toLowerCase().replace(/ /g, "-");
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      };

      let productIdentifier =
        product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty[product._id]];
      let _coupon = props.checkout.orderDetails.coupon;
      arr.push(
        <div key={product._id} className="w-full border border-white">
          <div className="w-full">
            <div
              style={{ height: "165px" }}
              className="w-full justify-center scale-item flex p-4 relative"
            >
              <img
                src={props.misc.CFURL + product.packageImg}
                className="h-40 w-auto absolute z-50 ml-2 shadow"
              />
              <img
                src={props.misc.CFURL + product.strainImg}
                className="h-32 items-baseline pin-b flex w-auto absolute -ml-6"
              />
              <span
                onClick={() => {
                  props.quickAddToCartQty(
                    undefined,
                    props.shop.quickAddToCartQty,
                    product._id
                  );

                  props.modifyPotentialQuantity({
                    potentialQuantity: props.cart.potentialQuantity,
                    action: "CLEAR",
                    tag: product._id
                  });

                  props.compareStrain({
                    strain: product,
                    compareStrains:
                      props.misc.compareStrains != null
                        ? props.misc.compareStrains
                        : [],
                    action: "remove"
                  });
                }}
                className="h-8 w-8 z-999 px-2 justify-center px-1 text-white bg-grey-light absolute pin-r hover:bg-red-light flex -mt-2 mr-1 shadow-md cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="absolute cursor-pointer pin-t fa-lg scale-item mt-1"
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
                  <p className="p-2 font-normal">
                    {product.inStock ? "In Stock" : "Sold Out"}
                  </p>
                </div>
              </div>
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
                  <p className="p-2 font-normal items-center flex justify-center">
                    {product.rating.toFixed(2)}
                    <img
                      src="../../static/img/CrownIcon.svg"
                      class="ml-1 h-4 w-6 crown-icon text-red-dark opacity-50"
                    />
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
              <div className="inline-flex w-full bg-grey-lightest mt-4">
                <div className="w-full text-center hover:bg-grey-lighter cursor-pointer">
                  <p className="p-2 uppercase hover:text-red-light">
                    <a
                      href={
                        "/product/" +
                        product.name.toLowerCase().replace(/ /g, "-")
                      }
                      target="_blank"
                    >
                      See Product{" "}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="fa-lg ml-1"
                      />{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full">
                <div className="w-full text-center cursor-pointer">
                  <p
                    onClick={() => {
                      copyEmbedLink();
                    }}
                    className="p-2 font-bold uppercase hover:text-red-light"
                  >
                    Copy Link{" "}
                    <FontAwesomeIcon icon={faCopy} className="fa-lg ml-1" />{" "}
                  </p>
                </div>
              </div>
              {product.inStock ? (
                <div
                  className={
                    product.inStock
                      ? "w-full"
                      : "unselectable opacity-25 pointer-events-none"
                  }
                >
                  <div className="w-main mx-auto pt-4">
                    <div className="w-full inline-flex">
                      {showSeedAmounts(product)}
                    </div>
                  </div>
                  <div className="w-main mx-auto h-8 mt-1 flex justify-between border border-grey-lightest">
                    <button
                      name="decreaseItem"
                      onClick={() =>
                        props.modifyPotentialQuantity({
                          potentialQuantity: props.cart.potentialQuantity,
                          action: "MODIFY",
                          tag: product._id,
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
                      onBlur={e => {
                        let _value = e.target.value;
                        if (
                          _value == null ||
                          _value == "1" ||
                          parseInt(_value) < 1
                        ) {
                          props.modifyPotentialQuantity({
                            potentialQuantity: props.cart.potentialQuantity,
                            action: "SET",
                            tag: product._id,
                            quantity: 1,
                            max: props.cart.maxPerPackage
                          });
                        }
                      }}
                      onChange={e => {
                        let _value = e.target.value;
                        props.modifyPotentialQuantity({
                          potentialQuantity: props.cart.potentialQuantity,
                          action: "SET",
                          tag: product._id,
                          quantity: parseInt(_value),
                          max: props.cart.maxPerPackage
                        });
                      }}
                      value={props.cart.potentialQuantity[product._id] || ""}
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
                          quantity: 1,
                          max: props.cart.maxPerPackage
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
                      className="bg-red-dark w-main mx-auto text-center text-white p-2 hover:bg-red-light font-bold slowish rounded flex justify-center mt-4 scale-item"
                      onClick={() => {
                        props.modifyCart({
                          items: props.cart.items,
                          action: "APPEND",
                          productIdentifier: productIdentifier,
                          product: product,
                          quantity: props.cart.potentialQuantity[product._id],
                          coupon: _coupon,
                          max: props.cart.maxPerPackage
                        });
                        props.toggleCartAnimation();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full mt-4 h-125 p-3 bg-red-dark rounded opacity-50 flex items-center justify-center">
                  <p className="text-white text-center text-xl">Sold Out</p>
                </div>
              )}
            </div>
          </div>
        </div>
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
        {/* Sidebar */}
        <div className="w-1/5">
          <div className="p-2 bg-grey-lightest rounded">
            <h4 className="font-bold text-xl uppercase text-grey rounded text-center">
              Search Strain
            </h4>
          </div>
          <div className="w-full px-1">
            <SearchCompare {...props} />
          </div>
          <div className="w-full mt-5">
            <div className="p-2 bg-grey-lightest rounded">
              <h4 className="font-bold text-xl uppercase text-grey rounded text-center">
                All Strains
              </h4>
            </div>

            <CompareMenu {...props} />
          </div>

          <div />
        </div>
        {/* Container */}
        <div className="w-4/5 ml-4">
          <div>
            <div className="w-full relative">
              <p className="text-center bg-grey-lightest font-bold text-xl uppercase p-2 my-4 mt-0 font-bold rounded text-base uppercase text-grey">
                Main Filters:
              </p>{" "}
              <p className="absolute cursor-pointer p-2  pt-3 pin-r mr-2 pin-t text-red-dark  font-bold uppercase underline">
                Clear Filters
              </p>
            </div>
            <div>
              <CompareFilters {...props} />
            </div>
          </div>
          <p className="text-center mt-6 bg-grey-lightest p-3 my-4 mt-0 font-bold rounded text-base uppercase text-grey">
            Please, select at least{" "}
            <span className="font-bold underline">2</span> and max{" "}
            <span className="font-bold underline">5</span> strains to compare.
          </p>
          {props.misc.compareStrains != null &&
          props.misc.compareStrains.length != 0 ? (
            <div className="w-full flex justify-end my-4">
              <div
                onClick={() => {
                  props.compareStrain({
                    strain: props.misc.compareStrains,
                    compareStrains:
                      props.misc.compareStrains != null
                        ? []
                        : props.misc.compareStrains,
                    action: "remove"
                  });
                }}
                className="bg-grey-lighter text-grey rounded text-center cursor-pointer hover:bg-red-light hover:text-white p-2 w-200 font-bold scale-item"
              >
                <h4 className="uppercase">Clear Comparison</h4>
              </div>
            </div>
          ) : null}
          <div className="w-full">
            {props.misc.compareStrains != null &&
            props.misc.compareStrains.length != 0 ? (
              <div className="inline-flex flex w-full justify-start">
                <div className="text-sm border border-white">
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
                    <div className="w-full">
                      <p className="p-2 font-bold uppercase">Status:</p>
                    </div>
                  </div>
                  <div className="inline-flex w-full">
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
                      <p className="p-2 font-bold uppercase">Flower Time: </p>
                    </div>
                  </div>
                  <div className="inline-flex w-full">
                    <div className="w-full">
                      <p className="p-2 font-bold uppercase">Average Yield: </p>
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
                  <div
                    style={{ height: "206px" }}
                    className="inline-flex opacity-25 rounded w-full mt-4 bg-grey-lightest py-2 items-center flex"
                  >
                    <div className="w-full">
                      <p className="p-2 font-bold justify-center text-center uppercase">
                        Actions:
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex w-full mt-32 mb-5 bg-red-dark text-white" />
                </div>
                {Products()}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
