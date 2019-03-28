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
        backgroundPosiiton: "top"
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
        background: "url(../../static/img/bg-video2.jpg",
        backgroundSize: "contain",
        ...position
      }}
      className="flex justify-between items-center w-full"
    >
      <div className="sm:hidden p-4 flex w-1/3 mx-4 flex-wrap justify-center bg-grey shadow-md">
        <div className="flex flex-wrap">
          <img
            src={
              props.misc.CFURL +
              "/plant/P_" +
              featuredStrainImage.sotiId +
              ".jpg"
            }
            className="h-32"
          />
          <div
            style={{
              backgroundImage:
                "url(" +
                props.misc.CFURL +
                "/packages/" +
                featuredStrainImage.sotiId +
                ".png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "10rem",
              width: "auto",
              position: "absolute",
              zIndex: "30"
            }}
          />
        </div>
        <button
          className="mx-auto h-10 bg-white px-8 py-2 mt-4 text-center"
          onClick={() => Router.push("/shop")}
        >
          VISIT SHOP
        </button>
      </div>
      <video
        onClick={() => {
          let self = document.querySelector("#video" + props.index);
          self.muted = !self.muted;
        }}
        className="sm:w-full w-2/3 shadow-md mr-10"
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
