import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const menu = props => {
  let menuStyle = {
    // backgroundImage: "url(../static/img/red.png)",
  };

  return (
    <div
      style={menuStyle}
      className=" w-full bg-red-dark h-20 inline-flex test"
    >
      <div className="w-1/2 inline-flex">
        <div className="p-2 w-1/5 text-center p-3 cursor-pointer text-white bg-red-shopCart">
          <FontAwesomeIcon icon={faSearch} className="fa-2x p-1 mt-3" />
        </div>
        <div className="w-full mt-3">
          <ul className="inline-flex w-full text-white font-bold text-lg pt-2 pl-32">
            <Link href="/shop">
              <li className="px-2 py-1 mx-2 cursor-pointer text-2xl hover:text-red-darker">
                Shop
              </li>
            </Link>
            <Link href="/germination">
              <li className="px-2 py-1 mx-2 cursor-pointer text-2xl hover:text-red-darker">
                Germination
              </li>
            </Link>
            <Link href="/articles">
              <li className="px-2 py-1 mx-2 cursor-pointer text-2xl hover:text-red-darker">
                Articles
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        onClick={() => console.log(props)}
        className="cursor-pointer text-center"
      >
        <img
          src="../static/img/cropkingseeds.png"
          className="w-32 scale-item"
        />
      </div>

      <div className="w-1/2 inline-flex">
        <div className="w-3/5 mt-2">
          <ul className="inline-flex text-white w-full font-bold justify-end text-lg pt-2">
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
              <FontAwesomeIcon icon={faFacebookF} className="fa-2x p-1" />
            </li>
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x p-1" />
            </li>
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-red-darker">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x p-1" />
            </li>
          </ul>
        </div>

        <div className="w-2/5 mt-2 text-center mt-4">
          <p className="text-white p-2 mt-2 text-lg font-extrabold">
            Call: 604-563-0291
          </p>
        </div>
        <div
          onClick={() => {
            props.setVisibleScreen({ input: "viewCart" });
          }}
          className="w-1/5 text-center pt-6 cursor-pointer text-white bg-red-shopCart"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
          <span
            style={{
              height: "28px",
              width: "28px",
              borderRadius: "50%",
              background: "white",
              position: "absolute",
              marginTop: "-10px",
              color: "#cc1f1a",
              fontSize: "20px",
              fontWeight: "bolder",
              textAlign: "center",
              paddingTop: "2px",
              marginTop: "-14px",
              marginLeft: "-5px"
            }}
          >
            {Object.keys(props.cart.items).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default menu;
