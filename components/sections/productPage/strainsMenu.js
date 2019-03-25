import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faTimes } from "@fortawesome/free-solid-svg-icons";

const strainsMenu = props => {
  let showMenu =
    // Router.asPath.slice(1).includes("product/") &&
    props.viewProduct.showStrainsMenu;
  let position = showMenu
    ? {
        transform: "translateX(0)"
      }
    : {
        transform: "translateX(-255px)"
      };

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

  let strains = _strains.sort((a, b) => {
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
        <p
          key={arr}
          className={`bg-${color} ${
            Object.keys(category).indexOf(genetic) == 0 ? "mt-10" : ""
          } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
        >
          {text}
        </p>
      );
    };

    let getStrain = (strain, index) => {
      return (
        <Link
          key={strain.sotiId}
          href="/product"
          as={strain.name
            .toLowerCase()
            .split(" ")
            .join("-")}
        >
          <li
            className={`text-black leading-loose cursor-pointer hover:bg-grey-lightest mt-1 w-full list-reset text-left pl-4 font-bold`}
            onClick={e => {
              let strains = props.misc.strains;
              props.getStrain({ sotiId: strain.sotiId, strains }).then(res => {
                props.setCurrentProduct({ product: res }).then(() => {
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
    };

    let index = 0;
    for (let category of Object.keys($strains)) {
      arr.push(getHeader(category));
      for (let strain of $strains[category]) {
        arr.push(getStrain(strain, index));
        index++;
      }
    }

    return arr;
  };

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
          ? "w-250 h-full bg-smoke-grey shadow-md slowish fixed pin-l pin-t pt-32 sm:pt-24 sm:mt-4 z-40 pb-2 list_container"
          : "w-250 h-full bg-smoke-grey shadow-md slowish fixed pin-l pin-t pt-32 sm:pt-24 sm:mt-4 z-40 pb-2"
      }
    >
      {/* {Router.asPath.slice(1).includes("product/") ? ( */}
      <div
        onClick={e => {
          e.stopPropagation();
          props.toggleStrainsMenu(!props.viewProduct.showStrainsMenu);
        }}
        className="w-12 h-32 bg-red-darker hover:bg-red-light rounded-tr-lg rounded-br-lg mt-halfScreen pin-t absolute pin-r -mr-12 cursor-pointer"
      >
        <p
          style={StrainText}
          className="font-bold text-white w-12 pr-4 mt-2 uppercase pb-1"
        >
          {!props.viewProduct.showStrainsMenu ? (
            <span className="mt-2">Strains</span>
          ) : (
            "Close Tab"
          )}
        </p>

        {!props.viewProduct.showStrainsMenu ? (
          <FontAwesomeIcon
            icon={faCannabis}
            style={{ transform: "rotate(90deg)" }}
            className="fa-2x cursor-pointer flex justify-center mt-0 ml-2 py-1 text-white"
          />
        ) : (
          <FontAwesomeIcon
            icon={faTimes}
            style={{ transform: "rotate(90deg)" }}
            className="fa-2x cursor-pointer flex justify-center mt-0 mr-3 py-1 text-white"
          />
        )}
      </div>
      {/* ) : null} */}

      <div className="bg-white text-white relative -ml-1 h-full">
        <p className="bg-red-dark text-white text-center uppercase text-xl p-2 absolute w-full font-bold">
          All Strains
        </p>
        <div className="overflow-y-auto w-full h-full">{showStrainsMenu()}</div>
      </div>
    </div>
  );
};
export default strainsMenu;
