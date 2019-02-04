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
      className="w-full h-16 pt-1 absolute mt-32"
    >
      <div className="flex block w-300 pin-r mr-400 mt-5 absolute z-40 h-10 bg-white border-0 text-grey rounded-lg shadow-md">
        <SearchSuggest {...props} />{" "}
        <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
          <a
            onClick={e => {
              if (Router.asPath.includes("/shop")) e.preventDefault();
            }}
            className="bg-yellow w-12 border-0 rounded-tr-lg rounded-br-lg pt-1 pl-3 leading-loose"
          >
            <FontAwesomeIcon icon={faSearch} className="fa-lg mt-1" />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
