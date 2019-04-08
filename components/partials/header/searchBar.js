import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SearchSuggest from "./searchSuggest";

const SearchBar = props => {
  let setFilters = () => {
    let searchValue = props.misc.searchValue;
    if (searchValue != null) {
      let _activeFilters = {};
      props.setSearch(null);
      let text = [...searchValue.split(",")];
      if (_activeFilters.text != null) text.push(..._activeFilters.text);

      text = [...new Set(text)];
      props.toggleFilter({
        filter: _activeFilters,
        text,
        multiple: false
      });
    }
  };

  let clearSuggestions = () => {
    props.setSuggestions([]);
    props.setHighlightedSuggestion({
      index: null,
      suggestions: props.misc.suggestions
    });
  };

  return (
    <form
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        if (!props.router.asPath.includes("/shop")) {
          props.router.push("/shop", "/shop?" + props.misc.searchValue);
        }
        setFilters();
      }}
      className="w-full z-50"
      // onBlur={() => {
      //   props.setSuggestions([]);
      // }}
    >
      <div className="flex w-400 sm:w-full xl:w-225 lg:w-300 md:w-225 z-40 h-8 mt-1 bg-white border-0 text-grey rounded shadow-md sm:relative">
        <SearchSuggest
          {...props}
          clearSuggestions={clearSuggestions}
          setFilters={setFilters}
        />{" "}
        <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
          <button
            type="submit"
            aria-label="submit-search"
            onClick={e => {
              if (props.router.asPath.includes("/shop")) e.preventDefault();
              clearSuggestions();
              setFilters();
            }}
            className="bg-yellow-dark hover:bg-yellow slowish w-12 lg:w-50 sm:w-12 sm:pr-2 border-0 pl-1 leading-loose z-999 rounded sm:absolute sm:pin-r"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="fa-lg mt-1 ml-1 xl:mx-2"
            />
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
