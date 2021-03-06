import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const menuOption = props => {
  let open = props.openOptions.includes(props.option[0]);
  let search = props.wiki.search;
  let angleDirection = open
    ? {
        transform: "rotate(90deg)"
      }
    : {
        transform: "rotate(0deg)"
      };
  let openOption = open
    ? {
        height: "auto",
        transition: "all 0.3s ease-in-out"
      }
    : {
        height: "0",
        transition: "all 0.3s ease-in-out"
      };
  let subheadings = props.option[1].subheadings.map((heading, index) => {
    let searchMatch;
    if (search.length > 0) {
      searchMatch = JSON.stringify(heading)
        .toLowerCase()
        .includes(search);
    }
    return (
      <li
        key={index}
        className={
          searchMatch
            ? "font-normal text-red-lighter scale-item"
            : "font-normal text-grey scale-item"
        }
      >
        <a
          aria-label={heading.name}
          className={
            searchMatch
              ? "text-red-light  menu-option w-full h-full"
              : "menu-option w-full h-full"
          }
          href={
            "#" +
            props.option[0].toLowerCase().replace(/ /g, "") +
            "-" +
            heading.name.toLowerCase().replace(/ /g, "")
          }
        >
          {heading.name}
        </a>
      </li>
    );
  });
  return (
    <li
      // style={openOption}
      className="w-full overflow-hidden text-xl font-bold flex flex-wrap justify-between my-1  cursor-pointer"
    >
      <span
        onClick={() => {
          props.openMenuOption({
            currentOptions: props.openOptions,
            newOption: props.option[0]
          });
        }}
        className="w-4/5 "
      >
        {props.option[0]}
      </span>
      <span
        onClick={() => {
          props.openMenuOption({
            currentOptions: props.openOptions,
            newOption: props.option[0]
          });
        }}
        className="w-1/5 text-center"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          style={angleDirection}
          className="fa-x slowish"
        />
      </span>
      <ul style={openOption}>{subheadings}</ul>
    </li>
  );
};
export default menuOption;
