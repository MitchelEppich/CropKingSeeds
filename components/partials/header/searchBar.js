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
      className="w-600 md:w-300 lg:w-300 searchBar xl:w-300 sm:w-full h-16 sm:mt-24 sm:pt-8 sm:mx-0 sm:px-2 mt-20 pt-1 pl-40 ml-64 fixed z-50 sm:z-35 sm:bg-white"
    >
      <div className="flex block w-400 sm:w-full xl:w-225 lg:w-225 md:w-200 z-40 h-8 mt-1 bg-white border-0 text-grey rounded shadow-md overflow-hidden">
        <SearchSuggest {...props} />{" "}
        <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
          <a
            onClick={e => {
              if (Router.asPath.includes("/shop")) e.preventDefault();
            }}
            className="bg-yellow-dark hover:bg-yellow slowish w-12 sm:w-16 border-0 pl-3 leading-loose z-999"
          >
            <FontAwesomeIcon icon={faSearch} className="fa-lg mt-1 ml-1" />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
