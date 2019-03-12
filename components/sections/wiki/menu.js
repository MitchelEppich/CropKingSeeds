import MenuOption from "./menuOption";
const menu = props => {
  let openOptions = props.wiki.openOptions;
  let menuOptions = Object.entries(props.wiki.sections).map((option, index) => {
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
      className="w-300 h-screen bg-white p-4 list-reset leading-loose sticky z-30 overflow-auto pin-t"
    >
      {menuOptions}
    </ul>
  );
};

export default menu;
