import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import Link from "next/link";

const SearchBar = props => {
  let style = {
    transform: "translateY(130px)"
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
      className="w-full h-16 mx-auto pt-1"
    >
      <div className="mx-auto flex block w-400 h-10 bg-white pl-4 border-0 text-grey rounded shadow-md overflow-hidden">
        <input
          className="w-full h-full bg-white pl-4 border-0 text-grey font-normal"
          placeholder="What are you looking for?"
          onChange={e => props.setSearch(e.target.value)}
          defaultValue={
            props.misc.searchValue != null ? props.misc.searchValue : ""
          }
        />
        <Link href="/shop" as={"/shop?" + props.misc.searchValue}>
          <a
            onClick={e => {
              if (Router.asPath.includes("/shop")) e.preventDefault();
            }}
            className="bg-yellow-dark w-12 border-0 pt-1 pl-3 leading-loose"
          >
            <FontAwesomeIcon icon={faSearch} className="fa-lg mt-1" />
          </a>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
