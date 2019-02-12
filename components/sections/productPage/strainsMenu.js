import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const strainsMenu = props => {
  let category = {
    Regular: "Regular",
    Feminized: "Feminized",
    Autoflower: "Autoflower Feminized",
    Dwarf: "Dwarf Auto-Fem",
    CBD: "CBD Medical",
    Mix: "Mix and Match"
  };
  let headersPlacement = [];
  let showMenu =
    Router.asPath.slice(1).includes("product/") &&
    props.viewProduct.showStrainsMenu;
  let position = showMenu
    ? {
        transform: "translateX(0)",
        overflow: "hidden"
      }
    : {
        transform: "translateX(-255px)"
      };
  let _strains = props.misc.strains;

  if (_strains == null) return <div />;

  _strains = [..._strains];

  let strains = _strains.sort((a, b) => {
    let _category = Object.keys(category);
    let _a = _category.indexOf(a.genetic);
    let _b = _category.indexOf(b.genetic);
    if (_a > _b) return 1;
    if (_a < _b) return -1;
    return 0;
  });

  strains = strains.map((strain, index) => {
    if (index == 0 || strains[index].genetic != strains[index - 1].genetic)
      headersPlacement.push(index);
    return (
      <Link
        key={index}
        href="/product"
        as={strain.name
          .toLowerCase()
          .split(" ")
          .join("-")}
      >
        <li
          className="text-base font-bold text-left border-b-2 text-grey hover:text-white hover:bg-red-light border-grey-lightest pl-4 cursor-pointer"
          onClick={e => {
            let strains = props.misc.strains;
            props.getStrain({ sotiId: strain.sotiId, strains }).then(res => {
              props.setCurrentProduct({ product: res }).then(() => {
                let product = props.viewProduct.currentProduct;
                let _index = 0;
                while (strain.price[_index] == -1) {
                  _index++;
                }
                props.quickAddToCartQty(_index);
              });
            });
          }}
        >
          {strain.name}
        </li>
      </Link>
    );
  });

  let StrainText = {
    writingMode: "vertical-rl",
    textOrientation: "mixed"
  };
  return (
    <div
      onClick={() => props.toggleStrainsMenu(false)}
      style={position}
      className={
        showMenu
          ? "w-250 h-screen bg-smoke-grey shadow-md slowish fixed pin-l pin-t mt-32 z-40 pb-2 list_container"
          : "w-250 h-screen bg-smoke-grey shadow-md slowish fixed pin-l pin-t mt-32 z-40 pb-2 "
      }
    >
      {Router.asPath.slice(1).includes("product/") ? (
        <div
          onClick={e => {
            e.stopPropagation();
            props.toggleStrainsMenu(true);
          }}
          className="w-12 h-32 bg-red-darker hover:bg-red-light rounded-tr-lg rounded-br-lg mt-400 pin-r absolute pin-r -mr-12 cursor-pointer"
        >
          <p
            style={StrainText}
            className="font-bold text-white w-8 h-10 pt-4 uppercase pb-4"
          >
            Strains
          </p>
          <FontAwesomeIcon
            icon={faCannabis}
            style={{ transform: "rotate(90deg)" }}
            className="fa-2x cursor-pointer flex justify-center mt-12 ml-2 py-1 text-white"
          />
        </div>
      ) : null}

      <div className="bg-white text-white relative -ml-1">
        <p className="bg-red-dark text-white text-center uppercase text-xl p-2 absolute w-full font-bold">
          All Strains
        </p>
        <div className="overflow-y-auto h-screen w-full">
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[0]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full mt-10`}
          >
            {category[_strains[headersPlacement[0]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(headersPlacement[0], headersPlacement[1])}
          </ul>
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[1]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {category[_strains[headersPlacement[1]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(headersPlacement[1], headersPlacement[2])}
          </ul>
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[2]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {category[_strains[headersPlacement[2]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(headersPlacement[2], headersPlacement[3])}
          </ul>
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[3]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {category[_strains[headersPlacement[3]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(headersPlacement[3], headersPlacement[4])}
          </ul>
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[4]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {category[_strains[headersPlacement[4]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(headersPlacement[4], headersPlacement[5])}
          </ul>
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[5]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {category[_strains[headersPlacement[5]].genetic]}
          </p>
          <ul className="text-white leading-loose mt-1 pb-10 mb-24 w-full list-reset">
            {strains.slice(headersPlacement[5])}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default strainsMenu;
