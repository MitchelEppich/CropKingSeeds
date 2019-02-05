import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import Link from "next/link";
import SearchSuggest from "./searchSuggest";

const SearchBar = props => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!Router.asPath.includes("/shop")) {
                    Router.push("/shop", "/shop?" + props.misc.searchValue);
                }
            }}
            className="w-600 md:w-300 lg:w-300 sm:w-full h-16 sm:mt-28 sm:mx-0 sm:px-2 mt-20 md:mt-40 md:pl-0 md:ml-16 pt-1 pl-40 xl:pl-40 lg:pl-40 ml-64 xl:ml-48 lg:ml-40 fixed z-50 sm:z-35 md:z-35">
            <div className="flex block w-400 sm:w-full xl:w-225 lg:w-225 md:w-250 z-40 h-8 mt-1 bg-white border-0 text-grey rounded-lg shadow-md ">
                <SearchSuggest {...props} />{" "}
                <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
                    <a
                        onClick={e => {
                            if (Router.asPath.includes("/shop")) e.preventDefault();
                        }}
                        className="bg-yellow w-12 border-0 rounded-tr-lg rounded-br-lg pl-3 leading-loose z-999">
                        <FontAwesomeIcon icon={faSearch} className="fa-lg mt-1" />
                    </a>
                </Link>
            </div>
        </form>
    );
};

export default SearchBar;
