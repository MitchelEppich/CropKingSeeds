import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchCompare = props => {
  return (
    <div className="w-full inline-flex my-4 relative">
      <div className="w-full">
        <input
          onChange={e => {
            let value = e.target.value;
            props.setCompareSearchValue(value.toLowerCase());
          }}
          aria-label="comparePageSearch"
          type="text"
          className="p-2 w-full"
          placeholder="Search..."
        />
      </div>
      <div className="w-12 p-2 bg-yellow-dark text-center absolute pin-r rounded">
        <FontAwesomeIcon icon={faSearch} className="fa-lg" />
      </div>
    </div>
  );
};

export default SearchCompare;
