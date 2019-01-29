import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  return (
    <div className="w-full inline-flex relative h-10 overflow-hidden rounded">
      <div className="w-full">
        <input
          type="text"
          className="p-2 w-full h-10"
          placeholder="How can we help you?"
          id="searchBar"
          name="searchBar"
          onChange={e => {
            let input = e.target.value;
            console.log(input);
          }}
        />
      </div>
      <div className="p-2 flex justify-end absolute pin-r bg-red-dark text-white cursor-pointer w-16 h-12 slowish hover:bg-grey-light content-center">
        <div className="justify-center flex w-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="fa-2x pl-1 pr-1 pb-1 text-center items-center flex"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
