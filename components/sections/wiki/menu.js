import MenuOption from "./menuOption";

const menu = props => {
  let openOptions = props.wiki.openOptions;
  let search = props.wiki.search;
  let menuOptions = Object.entries(props.wiki.sections).map((option, index) => {
    if (search.length > 0) {
      if (
        !JSON.stringify(option)
          .toLowerCase()
          .includes(search)
      ) {
        return null;
      }
    }
    return (
      <MenuOption
        key={index}
        {...props}
        option={option}
        openOptions={openOptions}
      />
    );
  });
  let position = {
    top: "140px"
  };
  return (
    <ul
      style={position}
      className="w-300 h-700 bg-white p-4 list-reset leading-loose sticky z-30 overflow-auto pin-t"
    >
      <li className="my-4 pr-5">
        <input
          onChange={e => {
            let value = e.target.value;
            props.setWikiSearch(value.toLowerCase());
          }}
          value={props.wiki.search}
          type="text"
          className={
            props.wiki.search.length > 0
              ? "p-2 w-full m-0 border-red-lighter"
              : "p-2 w-full m-0 focus:border-red-lighter"
          }
          placeholder="Search..."
        />
      </li>
      {menuOptions}
    </ul>
  );
};

export default menu;
