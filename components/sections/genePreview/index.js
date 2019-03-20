import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faExternalLinkAlt);

const GenePreview = props => {
  let isSmallMediumDevice = ["sm", "md"].includes(props.misc.mediaSize);
  let types = [
    {
      name: "feminized",
      strainImg: props.misc.CFURL + "/filter/feminized.png",
      packImg: props.misc.CFURL + "/filter/feminizedpack.png",
      background: `url(${props.misc.CFURL}/logos/Red.jpg)`,
      color: "#ff1111"
    },
    {
      name: "autoflower",
      strainImg: props.misc.CFURL + "/filter/autoflower.png",
      packImg: props.misc.CFURL + "/filter/autoflowerpack.png",
      background: `url(${props.misc.CFURL}/logos/Purple.jpg)`,
      color: "#8c00ff"
    },
    {
      name: "cbd",
      strainImg: props.misc.CFURL + "/filter/cbd.png",
      packImg: props.misc.CFURL + "/filter/cbdpack.png",
      background: `url(${props.misc.CFURL}/logos/White.jpg)`,
      color: "#D2C9C9"
    },
    {
      name: "regular",
      strainImg: props.misc.CFURL + "/filter/regular.png",
      packImg: props.misc.CFURL + "/filter/regularpack.png",
      background: `url(${props.misc.CFURL}/logos/Green.jpg)`,
      color: "#1C8B04"
    }
  ];
  let windows = types.map((val, index) => {
    let strainImgStyle = { position: "absolute", bottom: "0" },
      headingStyle,
      screenStyle,
      packStyle = { opacity: 0 };

    if (
      props.misc.geneHoverIndex == index ||
      props.misc.mediaSize == "lg" ||
      props.misc.lowGPUMode
    ) {
      strainImgStyle = {
        ...strainImgStyle,
        transform: "translateY(100%)",
        opacity: 0
      };
      headingStyle = { opacity: 0 };
      screenStyle = { transform: "translateX(-130px) rotate(-90deg)" };
      packStyle = { opacity: 1 };
    }
    return (
      <Link prefetch href="/shop" key={index}>
        <div
          style={{ position: "relative", backgroundImage: val.background }}
          onClick={() => {
            props.toggleFilter({
              filter: props.shop.activeFilters,
              genetic: val.name,
              multiple: true
            });
            window.scroll(0, 0);
          }}
          onMouseEnter={() => {
            if (!isSmallMediumDevice) props.setGeneHoverIndex(index);
          }}
          onMouseLeave={() => {
            if (!isSmallMediumDevice) props.setGeneHoverIndex(index);
          }}
          className="genePreview"
        >
          <img
            alt={val.name + "-strainImage"}
            className="sm:hidden md:hidden absolute w-full slow"
            src={val.strainImg}
            style={strainImgStyle}
          />
          <div
            style={screenStyle}
            className="screenClass bg-almost-black text-white uppercase"
          >
            <img
              alt={val.name + "-packageImage"}
              src={val.packImg}
              style={packStyle}
              className="sm:hidden packClass"
            />
            <p
              style={headingStyle}
              className="sm:w-full sm:pr-12 sm:flex sm:justify-between md:w-full md:pr-12 md:flex md:justify-between headingClass absolute sm:text-3xl md:text-3/5xl lg:text-3xl xl:text-3/5xl xxl:text-3/5xl"
            >
              <span className="sm:w-2/3">{val.name}</span>
              {isSmallMediumDevice ? (
                <span className="sm:w-12 sm:text-right md:w-12 md:text-right">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ color: val.color }}
                    className="p-1"
                  />
                </span>
              ) : null}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="genePreviewContainer flex flex-wrap w-full xl:mb-4  mx-auto relative overflow-hidden">
      {windows}
    </div>
  );
};

export default GenePreview;
