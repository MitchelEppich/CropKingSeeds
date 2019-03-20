import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faPlus,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons";

const menu = props => {
  let pages = props.cms.pages.map((page, index) => {
    let options;
    if (page.name == "new article") {
      options = page.options;
      options = page.options.map((option, index) => {
        return (
          <div
            key={index}
            className="px-4 bg-red-light hover:bg-red-dark text-white p-2 shadow mb-1"
          >
            <div
              // onMouseLeave={() => props.removePage(option)}
              onClick={() => {
                props.nextPage(), props.appendPage(option);
              }}
              className="pl-2 flex justify-between leading-loose text-lg font-bold cursor-pointer capitalize"
            >
              {option}
              <span className="w-10 text-right cmsMenuArrows">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="fa-lg pr-1 cmsMenuArrows"
                />
              </span>
            </div>
          </div>
        );
      });
    } else {
      options = page.options.map((option, index) => {
        return (
          <div
            key={index}
            className="px-4 bg-red-light hover:bg-red-dark text-white p-2 shadow mb-1"
          >
            <div
              // onMouseLeave={() => props.removePage(option)}
              onClick={() => {
                props.nextPage(), props.appendPage(option);
              }}
              className="pl-2 flex justify-between leading-loose text-lg font-bold cursor-pointer capitalize"
            >
              {option.name}
              <span className="w-10 text-right cmsMenuArrows">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="fa-lg pr-1 cmsMenuArrows"
                />
              </span>
            </div>
          </div>
        );
      });
    }
    return (
      <div key={index} className="w-340">
        {options}
      </div>
    );
  });

  let menuPosition = {
    transform: "translateX(calc(-340px *" + props.cms.menuPosition + ")"
  };

  let showBackButton = {
    transform:
      props.cms.menuPosition != 0 ? "translate(0px)" : "translate(400px)",
    transition: "transform 0.7s ease"
  };

  return (
    <div className="w-340 h-screen fixed pin-l z-999 pin-t bg-white text-grey pt-12 overflow-x-hidden overflow-y-auto">
      <div className="w-full">
        <div className="w-full text-center">
          <img
            alt="cks-logo-Menu"
            src="../../static/img/cropkingseeds.png"
            className=""
          />
        </div>
        <div className="p-2 text-center">
          <h3 className="text-center text-3/5xl mb-2 cursor-pointer font-bold">
            Crop King Seeds
          </h3>
          <p className="text-center mb-12 text-base font-bold text-grey-light opacity-75 uppercase">
            Content Management System
          </p>
        </div>
      </div>
      <div className="w-full mt-10  p-2">
        <div
          style={showBackButton}
          onClick={() => props.backPage()}
          className="w-10 bg-grey-lightest p-2 cursor-pointer text-right cmsMenuArrows"
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className="fa-2x pr-1 cmsMenuArrows"
          />
        </div>
      </div>
      <div
        style={{ ...menuPosition, transition: "all 0.5s ease-in-out" }}
        className="absolute w-screen slow flex mt-4 w-340"
      >
        {pages}
        {/* <div className="w-340">{options}</div>
                <div className="w-340">{nextOptions}</div> */}
      </div>
    </div>
  );
};

export default menu;
