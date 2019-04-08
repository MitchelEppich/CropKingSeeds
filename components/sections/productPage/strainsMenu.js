import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faTimes } from "@fortawesome/free-solid-svg-icons";

const strainsMenu = props => {
  let showMenu = props.viewProduct.showStrainsMenu;

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
  if (_strains == null) return null;

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
        <a key={arr} href={`/shop?${genetic}`}>
          <p
            className={`bg-${color} ${
              Object.keys(category).indexOf(genetic) == 0 ? "mt-8 pt-5" : ""
            } p-3 font-bold text-center text-white text-shadow uppercase w-full`}
          >
            {text}
          </p>
        </a>
      );
    };

    let getStrain = (strain, index) => {
      return (
        <Link
          key={strain.sotiId}
          href="/product"
          as={`/product/${strain.name
            .toLowerCase()
            .split(" ")
            .join("-")}`}
        >
          <a>
            <li
              className={`text-black leading-loose cursor-pointer hover:bg-grey-lightest mt-1 w-full list-reset text-left pl-4 font-bold`}
              onClick={e => {
                let strains = props.misc.strains;
                props
                  .getStrain({ sotiId: strain.sotiId, strains })
                  .then(res => {
                    props.setCurrentProduct({ product: res }).then(() => {
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
                    });
                  });
                if (props.misc.mediaSize == "sm") {
                  props.toggleStrainsMenu(false);
                }
              }}
            >
              {strain.name}
            </li>
          </a>
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
  let verticalPosition =
    window.innerHeight < 700
      ? "mt-32 sm:mt-250 h-32 bg-red-darker"
      : "mt-halfScreen h-32 bg-red-darker";
  let verticalOpenPosition =
    window.innerHeight < 700
      ? "mt-48 h-10 bg-red-darker"
      : "mt-48 h-10 bg-red-darker";

  return (
    <div
      style={position}
      className={
        showMenu
          ? "w-250 h-full bg-smoke-grey shadow-md slowish fixed pin-l pin-t pt-32 sm:pt-24 sm:mt-4 z-40 pb-2 list_container"
          : "w-250 h-full bg-smoke-grey shadow-md slowish fixed pin-l pin-t pt-32 sm:pt-24 sm:mt-4 z-40 pb-2"
      }
    >
      <div
        onClick={e => {
          e.stopPropagation();
          props.toggleStrainsMenu(!props.viewProduct.showStrainsMenu);
        }}
        className={`
          w-12 hover:bg-red-light rounded-tr-lg rounded-br-lg pin-t absolute pin-r -mr-12 cursor-pointer ${
            props.viewProduct.showStrainsMenu
              ? verticalOpenPosition
              : verticalPosition
          }
         
        `}
      >
        <p
          style={StrainText}
          className="font-bold text-white w-12 pr-4 mt-2 uppercase pb-1"
        >
          {!props.viewProduct.showStrainsMenu ? (
            <span className="mt-2">Strains</span>
          ) : (
            ""
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
            className="fa-2x cursor-pointer flex justify-center -mt-2 mr-3 py-1 text-white"
          />
        )}
      </div>

      <div className="bg-white text-white relative -ml-1 h-full">
        <p className="bg-red-dark text-white text-center uppercase text-xl p-2 absolute w-full font-bold">
          All Strains
        </p>
        <div className="overflow-y-auto w-full h-full pb-4">
          {showStrainsMenu()}
        </div>
      </div>
    </div>
  );
};
export default strainsMenu;
