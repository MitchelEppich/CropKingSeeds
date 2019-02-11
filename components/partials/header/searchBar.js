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
      className="w-full z-50"
    >
      <div className="flex w-400 sm:w-full xl:w-225 lg:w-225 md:w-225 z-40 h-8 mt-1 bg-white border-0 text-grey rounded shadow-md sm:relative">
        <SearchSuggest {...props} />{" "}
        <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
          <a
            onClick={e => {
              if (Router.asPath.includes("/shop")) e.preventDefault();
            }}
            className="bg-yellow-dark hover:bg-yellow slowish w-12 sm:w-20 border-0 pl-1 leading-loose z-999 rounded sm:absolute sm:pin-r"
          >
            <FontAwesomeIcon icon={faSearch} className="fa-lg mt-1 ml-1" />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
