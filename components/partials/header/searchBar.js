import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import Link from "next/link";
import SearchSuggest from "./searchSuggest";

const SearchBar = props => {
    let style = {
        // transform: "translateY(130px)"
    };
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!Router.asPath.includes("/shop")) {
                    Router.push("/shop", "/shop?" + props.misc.searchValue);
                }
            }}
            style={style}
            className="w-600 h-16 mt-20 pt-1 pl-48 xl:pl-48 lg:pl-40 ml-64 xl:ml-48 lg:ml-40 absolute">
            <div className="flex block w-400 xl:w-250 z-40 h-8 mt-1 bg-white border-0 text-grey rounded-lg shadow-md ">
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
