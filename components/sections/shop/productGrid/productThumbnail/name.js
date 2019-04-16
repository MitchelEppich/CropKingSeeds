import Link from "next/link";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const name = props => {
  let name = props.product.name;
  let nameSizeHover =
    name.length < 20
      ? " text-xl md:text-sm sm:text-base "
      : " text-lg md:text-sm sm:text-sm ";
  let titleColorBackground =
    " bg-" + props.detail.geneColor[props.product.genetic.toLowerCase()];
  let classes;
  if (props.hover) {
    classes =
      "text-center flex justify-center items-center text-white p-2 font-extrabold z-50 strainTitleHover " +
      nameSizeHover +
      titleColorBackground;
  } else {
    if (props.misc.lowGPUMode) {
      classes =
        "text-center flex justify-center items-center text-white p-2 font-extrabold z-50 strainTitleNoAnimation " +
        nameSizeHover +
        titleColorBackground;
    } else {
      classes =
        "text-center flex justify-center items-center text-white p-2 font-extrabold z-50 strainTitle " +
        nameSizeHover +
        titleColorBackground;
    }
  }
  return (
    // <div
    //   className={
    //     props.hover
    //       ? "border-t-2 border-grey-lightest w-main mx-auto pt-1"
    //       : "hidden slow"
    //   }
    // >
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
      <a>
        <span className="absolute w-full z-10 block">
          <h3
            onClick={() => {
              props.setHoverId(null, false);
              window.scrollTo(0, 0);
            }}
            className={classes}
          >
            {props.misc.lowGPUMode ? `${name.substring(0, 16)}...` : name}
            {/* {props.hover ? (
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="cursor-pointer fa-xs text-grey-light absolute z-50 mt-1 ml-2 mr-3"
            />
          ) : null} */}
          </h3>
        </span>
      </a>
    </Link>
    // </div>
  );
};
export default name;
