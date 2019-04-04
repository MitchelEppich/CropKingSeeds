import Router from "next/router";
import Link from "next/link";

import { filter } from "../../../store/utilities/filter";

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

  let _strains = props.misc.strains;

  if (_strains == null) return <div />;

  _strains = [..._strains];

  let strains = filter(_strains, {
    text:
      props.misc.compareSearchValue == null
        ? "null"
        : props.misc.compareSearchValue.split(",")
  }).sort((a, b) => {
    let _a = a.name;
    let _b = b.name;
    if (_a > _b) return 1;
    if (_a < _b) return -1;
    return 0;
  });

  let $strains = {};
  for (let strain of strains) {
    if ($strains[strain.genetic] == null) $strains[strain.genetic] = [];
    $strains[strain.genetic].push(strain);
  }

  let showStrainsMenu = () => {
    let arr = [];

    let getHeader = genetic => {
      let color = props.detail.geneColor[genetic.toLowerCase()];
      let text = category[genetic];
      return (
        <a href={`/shop?${genetic}`}>
          <p
            key={text}
            className={`bg-${color} p-3 font-bold text-center text-white text-shadow uppercase w-full mt-1 cursor-pointer`}
          >
            {text}
          </p>
        </a>
      );
    };

    let getStrain = strain => {
      let active =
        props.misc.compareStrains != null
          ? props.misc.compareStrains.indexOf(strain) > -1
          : false;
      return (
        <a
          href={`/product/${strain.name
            .toLowerCase()
            .split(" ")
            .join("-")}`}
        >
          <span
            key={arr}
            className={`block text-base p-2 font-bold text-left border-b-2 text-grey hover:bg-grey-lightest hover:text-grey border-grey-lightest pl-4 cursor-pointer ${
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
                quantity: 1,
                max: props.cart.maxPerPackage
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
              <div className="p-2 w-10 px-2 justify-center -mt-6 text-white items-center flex bg-grey-light absolute pin-r hover:bg-red-light">
                <FontAwesomeIcon icon={faCheck} className="text-right" />
              </div>
            ) : null}
          </span>
        </a>
      );
    };

    for (let category of Object.keys($strains)) {
      arr.push(getHeader(category));
      for (let strain of $strains[category]) {
        arr.push(getStrain(strain));
      }
    }

    return arr;
  };

  return (
    <div className={"w-full px-1 h-full slowish z-40 pb-2"}>
      <div className="bg-white h-screen overflow-y-auto text-white relative -ml-1">
        <div className="w-full">{showStrainsMenu()}</div>
      </div>
    </div>
  );
};
export default CompareMenu;
