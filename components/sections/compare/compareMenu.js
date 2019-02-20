import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faTimes,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const CompareMenu = props => {
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
    Router.asPath.slice(1).includes("compare") &&
    props.viewProduct.showStrainsMenu;
  let position = {
    transform: "translateX(0)",
    overflow: "hidden"
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
    let active =
      props.misc.compareStrains != null
        ? props.misc.compareStrains.indexOf(strain) > -1
        : false;
    return (
      <li
        key={index}
        className={`text-base font-bold text-left border-b-2 text-grey  hover:bg-grey-lightest hover:text-grey border-grey-lightest pl-4 cursor-pointer ${
          active ? "bg-grey-lightest" : "bg-white"
        }`}
        onClick={() => {
          let _index = 0;
          while (strain.price[_index] == -1) {
            _index++;
          }
          props.quickAddToCartQty(
            _index,
            props.shop.quickAddToCartQty,
            strain._id
          );

          props.modifyPotentialQuantity({
            potentialQuantity: props.cart.potentialQuantity,
            action: "SET",
            tag: strain._id,
            quantity: 1
          });

          props.compareStrain({
            strain: strain,
            compareStrains:
              props.misc.compareStrains != null
                ? props.misc.compareStrains
                : [],
            action: active ? "remove" : "add"
          });
        }}
      >
        {strain.name}{" "}
        {active ? (
          <span className="h-8 px-2 justify-center px-1 text-white bg-grey-light absolute pin-r hover:bg-red-light">
            <FontAwesomeIcon icon={faCheck} className="text-right" />
          </span>
        ) : null}
      </li>
    );
  });

  return (
    <div className={"w-full px-1 h-full slowish z-40 pb-2"}>
      <div className="bg-white text-white relative -ml-1 ">
        <div className=" w-full">
          <p
            className={`bg-${
              props.detail.geneColor[
                _strains[headersPlacement[0]].genetic.toLowerCase()
              ]
            } p-3 font-bold text-center text-white text-shadow uppercase w-full mt-1`}
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
          <ul className="text-white leading-loose mt-1 pb-10 mb-2 w-full list-reset">
            {strains.slice(headersPlacement[5])}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CompareMenu;
