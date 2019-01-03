import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const menu = props => {
  return (
    <div className="w-full bg-red-dark shadow-lg h-24 inline-flex test">
      <div className="p-2 w-1/2 inline-flex">
        <div className="p-2 ml-6 mt-1 p-3 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="text-white fa-2x py-1" />
        </div>
        <div className="w-full mt-2">
          <ul className="inline-flex w-full text-white font-bold text-2xl pt-2 pl-32">
            <Link href="/shop">
              <li className="px-2 py-1 mx-2 cursor-pointer text-3xl hover:text-white-dark">
                Shop
              </li>
            </Link>
            <Link href="/germination">
              <li className="px-2 py-1 mx-2 cursor-pointer text-3xl hover:text-white-dark">
                Germination
              </li>
            </Link>
            <Link href="/articles">
              <li className="px-2 py-1 mx-2 cursor-pointer text-3xl hover:text-white-dark">
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
        <img src="../static/img/cropkingseeds.png" className="w-24" />
      </div>

      <div className="w-1/2 inline-flex">
        <div className="w-1/5 mt-2">
          <ul className="inline-flex text-white font-bold  justify-around text-lg pt-2">
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-white text-white">
              <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
            </li>
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-white text-white">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </li>
            <li className="px-2 py-1 mx-2 cursor-pointer hover:text-white text-white">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
            </li>
          </ul>
        </div>

        <div className="w-3/5 text-white mt-2 text-center mt-4">
          <p className="p-2 mt-2 text-lg">Call: 604-563-0291</p>
        </div>
        <div
          onClick={() => {
            props.setVisibleScreen({ input: "viewCart" });
          }}
          className="bg-red-dark text-white w-1/5 text-center pt-6 cursor-pointer"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
        </div>
      </div>
    </div>
  );
};

export default menu;
