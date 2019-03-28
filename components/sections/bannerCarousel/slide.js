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
        if (props.sotiId == null) return;
        let strains = props.misc.strains;
        props.getStrain({ sotiId: props.sotiId, strains }).then(res => {
          props.setCurrentProduct({ product: res }).then(() => {});
        });
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
        "xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-48 w-full z-0 absolute"
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

  let videoBanner = () => {
    let video = (
      <video
        onClick={() => {
          let self = document.querySelector("#video" + props.index);
          self.muted = !self.muted;
        }}
        style={{
          ...position,
          backgroundImage: $url,
          backgroundSize: "cover",
          backgroundPosiiton: "top"
        }}
        muted={true}
        className={"w-full z-0 absolute"}
        loop
        id={"video" + props.index}
        src={$url}
      />
    );

    return video;
  };

  return props.type == "image" ? imageBanner : videoBanner();
};

export default slide;
