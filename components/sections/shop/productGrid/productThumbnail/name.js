import Link from "next/link";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const name = props => {
  let name = props.product.name;
  let nameSizeHover = name.length < 14 ? "text-lg" : "text-base";
  let nameSize = name.length < 14 ? "text-2xl" : "text-xl";
  let titleColorBackground =
    " bg-" + props.detail.geneColor[props.product.genetic.toLowerCase()];

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
      <div style={{ zIndex: "1000", width: "92%" }} className="absolute w-full">
        <h3
          onClick={() => {
            props.setHoverId(null, false);
          }}
          className={
            props.hover
              ? "w-full mt-2 mb-2 text-black font-black text-center cursor-pointer strainTitle--hover " +
                nameSize
              : "text-center sm:text-xs text-grey p-2 font-extrabold z-50 strainTitle " +
                nameSizeHover +
                titleColorBackground
          }
        >
          {name}
          {props.hover ? (
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="cursor-pointer fa-xs text-grey-light absolute z-50 mt-1 ml-2 mr-3"
            />
          ) : null}
        </h3>
      </div>
    </Link>
    // </div>
  );
};
export default name;
