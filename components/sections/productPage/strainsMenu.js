import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const strainsMenu = props => {
    let showMenu = Router.asPath.slice(1).includes("product/") && props.viewProduct.showStrainsMenu;
    let position = showMenu
        ? {
              transform: "translateX(0)"
          }
        : {
              transform: "translateX(-300px)"
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
                          .join("-")}>
                      <li
                          className="text-xl text-left uppercase border-b border-white pl-4 cursor-pointer list-direction"
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
                          }}>
                          {strain.name}
                      </li>
                  </Link>
              );
          })
        : null;

    return (
        <div
            onClick={() => props.toggleStrainsMenu(false)}
            style={position}
            className={
                showMenu
                    ? "w-300 h-screen bg-red-darker slowish fixed pin-l pin-t mt-32 z-40  pb-2 list_container"
                    : "w-300 h-screen bg-red-darker slowish fixed pin-l pin-t mt-32 z-40  pb-2 "
            }>
            {Router.asPath.slice(1).includes("product/") ? (
                <div
                    onClick={e => {
                        e.stopPropagation();
                        props.toggleStrainsMenu(true);
                    }}
                    className="w-12 h-32 bg-red-darker rounded-tr-lg rounded-br-lg mt-400 pin-r absolute pin-r -mr-12 cursor-pointer">
                    <FontAwesomeIcon
                        icon={faCannabis}
                        className="fa-2x cursor-pointer flex justify-center mt-10 ml-2 text-white"
                    />
                </div>
            ) : null}
            <ul className="list-reset text-white leading-loose">{strains}</ul>
        </div>
    );
};
export default strainsMenu;
