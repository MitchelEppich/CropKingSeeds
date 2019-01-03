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
    <div className="w-full h-16 bg-red-dark flex justify-between text-white pt-2 px-12">
        <div className="w-1/2 flex pr-32">
            <div className="flex pt-1 w-1/3">
                <FontAwesomeIcon icon={faSearch} className="fa-lg cursor-pointer mt-2 mr-2" /><input placeholder="Search" className="w-5/6 pl-2 border-0 h-10 bg-transparent text-white"/>
            </div>
            <ul className="list-reset flex w-1/2 text-3xl">
                <Link href="/shop">
                    <li className="mr-8 ml-4 mt-2 cursor-pointer">
                    Shop
                    </li>
                </Link>
                <Link href="/germination">
                    <li className="mx-8 mt-2 cursor-pointer">
                    Germination
                    </li>
                </Link>
                <Link href="/articles">
                    <li className="mx-8 mt-2 cursor-pointer">
                    Articles
                    </li>
                </Link>
            </ul>
        </div>
        <div onClick={() => console.log(props)} className="">
            <img src="../static/img/cropkingseeds.png" className="w-24 mx-auto block absolute" />
        </div>

        <div className="flex justify-between w-1/2 pl-32">
            <ul className="flex list-reset">
                <li className="mx-8 mt-2">
                    <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
                </li>
                <li className="mx-8 mt-2">
                    <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                </li>
                <li className="mx-8 mt-2">
                    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                </li>
            </ul>
            <div className="mx-8 ml-12 mt-4">
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
