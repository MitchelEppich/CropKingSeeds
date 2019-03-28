import Router from "next/router";

const slide = props => {
  let positionIndex = props.position + props.index;
  if (props.position + props.index >= props.misc.bannerSlidePositions.length) {
    positionIndex =
      props.position + props.index - props.misc.bannerSlidePositions.length;
  }
  let position = props.misc.bannerSlidePositions[positionIndex];
  let protocol = props.url != null ? props.url.includes("http") : false;
  let num = (props.index + 1).toString().padStart(2, "0");
  let $url = props.misc.CFURL + "/land_banner/" + num;

  let strain = props.misc.featuredStrains;
  if (strain == null) return null;

  let featuredStrainImage = props.misc.featuredStrains[0];

  let onClick = e => {
    if (props.url == null) return;
    if (protocol) {
      window.target = "_blank";
      window.open(props.url);
    } else {
      let product = props.viewProduct.currentProduct;
      let _index = 0;
      while (product.price[_index] == -1) {
        _index++;
      }
      props.quickAddToCartQty(_index);
      Router.push(props.url);
    }
  };

  let imageBanner = (
    <div
      onMouseEnter={() => {
        // if (props.sotiId == null) return;
        // let strains = props.misc.strains;
        // props.getStrain({ sotiId: props.sotiId, strains }).then(res => {
        //   props.setCurrentProduct({ product: res }).then(() => {});
        // });
      }}
      onClick={e => onClick(e)}
      style={{
        ...position,
        ...props.style,
        backgroundImage: "url(" + $url + ")",
        backgroundSize: "contain",
        backgroundPosition: "top"
      }}
      className={
        "xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-40 w-full z-0 absolute"
      }
    />
  );

  if (props.type == "video") {
    let self = document.querySelector("#video" + props.index);
    if (self != null) {
      if (props.misc.activeBannerSlide == props.index && self.paused) {
        self.play();
      } else if (props.misc.activeBannerSlide != props.index && !self.paused) {
        self.pause();
        self.muted = true;
      }
    }
  }

  let video = (
    <div
      style={{
        // background: "url(../../static/img/bg-video2.jpg",
        // backgroundSize: "contain",
        ...position
      }}
      className="flex items-center flex justify-end w-full bg-grey-lightest"
    >
      <div className="w-1/3 pin-l z-50 sm:hidden md:hidden absolute p-4 flex flex-wrap justify-center">
        <div className="flex flex-wrap mb-4 w-full justify-center scale-item cursor-pointer">
          <img
            className="xxl:h-275 h-225 lg:h-175 -ml-8 mt-6 xxl:mt-12 xxl:-ml-12"
            src={
              props.misc.CFURL + "/plant/" + featuredStrainImage.sotiId + ".png"
            }
            style={{
              // transform: "translateY(32px) translateX(-50px)",
              position: "absolute"
            }}
          />
          <img
            className="xxl:h-300 h-250 lg:h-200"
            src={
              props.misc.CFURL +
              "/packages/" +
              featuredStrainImage.sotiId +
              ".png"
            }
            style={{
              width: "auto",
              position: "relative",
              zIndex: "30",
              boxShadow: "1px 5px 13px rgba(35, 35, 35, 0.52)"
            }}
          />
        </div>
        <div className="w-full justify-center flex">
          <button
            className="mx-auto h-10 w-200 shadow-md bg-red-dark text-white px-8 py-2 mt-4 text-center hover:bg-red-light cursor-pointer hover:text-white font-bold"
            onClick={() => Router.push("/shop")}
          >
            VISIT SHOP
          </button>
        </div>
      </div>
      <video
        onClick={() => {
          let self = document.querySelector("#video" + props.index);
          self.muted = !self.muted;
        }}
        className="sm:w-full md:w-full md:mr-0 sm:mr-0 w-2/3 lg:w-3/5 shadow-md mr-10 flex justify-end"
        style={{
          ...position,
          backgroundImage: $url,
          backgroundSize: "cover",
          backgroundPosiiton: "top"
        }}
        muted={true}
        loop
        id={"video" + props.index}
        src={$url}
      />
    </div>
  );

  return props.type == "image" ? imageBanner : video;
};

export default slide;
