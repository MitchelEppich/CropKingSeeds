import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const menu = props => {
    let pages = props.cms.pages.map((page, index) => {
        let options;
        if (page.name == "new article") {
            console.log(page.options);
            options = page.options;
        } else {
            options = page.options.map((option, index) => {
                return (
                    <div key={index} className="px-4">
                        <div
                            onMouseEnter={() => props.appendPage(option)}
                            // onMouseLeave={() => props.removePage(option)}
                            onClick={() => props.nextPage()}
                            className="my-4 text-xl flex justify-between leading-loose cursor-pointer">
                            {option.name}
                            <span className="w-1/2 text-right cmsMenuArrows">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="fa-sm pr-1 hover:text-red-dark cmsMenuArrows"
                                />
                            </span>
                        </div>
                        <hr className="hr__cms" />
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

    return (
        <div className="w-340 h-screen fixed pin-l z-999 pin-t bg-white text-red-light pt-32 overflow-x-hidden overflow-y-auto">
            <h3 onClick={() => console.log(props)} className="text-center text-2xl mb-2 cursor-pointer">
                Crop King Seeds
            </h3>
            <p className="text-center mb-12 text-sm">content management system</p>
            <div
                style={{ ...menuPosition, transition: "all 0.5s ease-in-out" }}
                className="absolute w-screen slow flex">
                {pages}
                {/* <div className="w-340">{options}</div>
                <div className="w-340">{nextOptions}</div> */}
            </div>
        </div>
    );
};

export default menu;
