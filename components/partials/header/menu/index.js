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
    <div className="w-full h-16 bg-red-dark flex justify-center text-white pt-2">
        <div className="flex mr-12 ">
            <div className="w-1/3 mr-4 flex">
                <input placeholder="Search" className="w-5/6 pl-2 border-b-1 border-r-0 border-l-0 border-t-0 h-10 bg-transparent text-white"/><FontAwesomeIcon icon={faSearch} className="fa-lg cursor-pointer mt-3 ml-2" />
            </div>
            <ul className="list-reset flex w-3/4 text-3xl">
                <Link href="/shop">
                    <li className="mx-4 mt-2">
                    Shop
                    </li>
                </Link>
                <Link href="/germination">
                    <li className="mx-4 mt-2">
                    Germination
                    </li>
                </Link>
                <Link href="/articles">
                    <li className="mx-4 mt-2">
                    Articles
                    </li>
                </Link>
            </ul>
        </div>
        <div onClick={() => console.log(props)} className="w-32">
            <img src="../static/img/cropkingseeds.png" className="w-24 mx-auto block" />
        </div>

        <div className="flex ml-12 ">
            <ul className="flex list-reset">
                <li className="mx-2 mt-2">
                    <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
                </li>
                <li className="mx-2 mt-2">
                    <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                </li>
                <li className="mx-2 mt-2">
                    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                </li>
            </ul>
            <div className="mx-8 mt-4">
                <p className="">Call: 604-563-0291</p>
            </div>
            <div onClick={() => {props.setVisibleScreen({ input: "viewCart" });}} className="ml-12 mt-2">
                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
            </div>
        </div>
    </div>
  );
};

export default menu;
