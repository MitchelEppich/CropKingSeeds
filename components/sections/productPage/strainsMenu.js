import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const strainsMenu = props => {
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
  let strains = props.misc.strains
    ? props.misc.strains.map((strain, index) => {
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
                props
                  .getStrain({ sotiId: strain.sotiId, strains })
                  .then(res => {
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
      })
    : null;

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
          ? "w-250 h-screen overflow-y-hidden bg-smoke-grey shadow-md slowish fixed pin-l pin-t mt-32 z-40 pb-2 list_container"
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
        <p className="bg-red-dark text-white text-center uppercase  text-xl p-2 absolute w-full font-bold">
          All Strains
        </p>
        <div className="overflow-y-auto h-screen w-full">
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full mt-8">
            Regular
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(0, 4)}
          </ul>
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full">
            Feminized
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(4, 22)}
          </ul>
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full">
            Auto Flower Feminized
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(22, 33)}
          </ul>
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full">
            Dwarf Auto Feminized
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(32, 33)}
          </ul>
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full">
            CBD Medical
          </p>
          <ul className="text-white leading-loose mt-1 w-full list-reset">
            {strains.slice(33, 35)}
          </ul>
          <p className="bg-grey-lightest p-3 font-bold text-center text-grey uppercase w-full">
            Mix and Match
          </p>
          <ul className="text-white leading-loose mt-1 pb-20 mb-24 w-full list-reset">
            {strains.slice(35)}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default strainsMenu;
