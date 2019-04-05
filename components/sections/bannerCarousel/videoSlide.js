import Router from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeMute,
  faVolumeOff,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";

const videoSlide = props => {
  let strains = props.misc.strains;
  let packages = strains.slice(0, 6).map((strain, index) => {
    return (
      <Link
        href="/product"
        as={"/product/" + strain.name.toLowerCase().replace(/ /g, "-")}
      >
        <img
          key={index}
          onMouseEnter={() => {
            if (props.sotiId == null) return;
            props.getStrain({ sotiId: strain.sotiId, strains }).then(res => {
              props.setCurrentProduct({ product: res }).then(() => {
                let product = props.viewProduct.currentProduct;
                let _index = 0;
                if (product) {
                  while (product.price[_index] == -1) {
                    _index++;
                  }
                  props.quickAddToCartQty(
                    _index,
                    props.shop.quickAddToCartQty,
                    product._id
                  );

                  props.modifyPotentialQuantity({
                    potentialQuantity: props.cart.potentialQuantity,
                    action: "SET",
                    tag: product._id,
                    quantity: 1,
                    max: props.cart.maxPerPackage
                  });
                }
              });
            });
          }}
          onClick={e => {
            e.stopPropagation();
          }}
          className="xxl:h-40 xxl:mx-6 h-250 lg:h-200 my-2 scale-item cursor-pointer"
          src={props.misc.CFURL + "/packages/" + strain.sotiId + ".png"}
          style={{
            zIndex: "30",
            boxShadow: "1px 5px 13px rgba(35, 35, 35, 0.52)"
          }}
        />
      </Link>
    );
  });
  if (props.type == "video") {
    let self = document.querySelector("#video" + props.index);
    if (self != null) {
      if (
        props.misc.activeBannerSlide == 4 ||
        (props.misc.activeBannerSlide == 0 && self.paused)
      ) {
        self.play();
      } else if (props.misc.activeBannerSlide != props.index && !self.paused) {
        self.pause();
        // props.toggleMute();
      }
    }
  }

  let self = document.querySelector("#video" + props.index);
  return (
    <div
      style={{
        ...props.slidePosition
      }}
      className="flex items-center flex justify-end w-full h-full bg-white absolute shadow-md"
    >
      <div className="w-1/5 z-50 flex flex-wrap sm:hidden md:hidden lg:hidden xl:hidden mb-4 justify-around cursor-pointer pl-8">
        {packages.slice(0, 3)}
      </div>
      <div className="w-full relative">
        <video
          className="sm:w-full sm:mx-auto md:w-full md:mr-0 w-full lg:w-4/5 lg:mx-auto xl:w-4/5 xl:mx-auto shadow-md flex justify-end "
          muted={props.misc.muted}
          loop
          id={"video" + props.index}
          src={props.$url}
          playsInline
        />
        <div
          onClick={() => {
            props.toggleMute();
          }}
          className="absolute pin-r pin-b mr-2 sm:mr-12 xl:mr-24 lg:mr-20 mb-2 scale-item"
        >
          <FontAwesomeIcon
            icon={props.misc.muted ? faVolumeMute : faVolumeUp}
            className="text-white text-shadow fa-2x pr-1 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-1/5 z-50 flex flex-wrap sm:hidden md:hidden lg:hidden xl:hidden mb-4 justify-around cursor-pointer pr-8">
        {packages.slice(3)}
      </div>
    </div>
  );
};

export default videoSlide;
