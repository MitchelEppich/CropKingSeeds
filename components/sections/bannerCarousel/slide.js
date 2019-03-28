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

  let refs = [];

  let onClick = e => {
    if (props.type == "image") {
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
    } else {
      let ref = document.querySelector("#video" + props.index);
    }
  };

  let imageBanner = (
    <React.Fragment>
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
    </React.Fragment>
  );

  let videoBanner = () => {
    let id = "video" + props.index;
    let video = (
      <video
        id={id}
        onPlaying={() => {
          console.log("Playing");
        }}
        onWaiting={() => {
          console.log("Paused");
        }}
        onStalled={() => {
          console.log("Paused");
        }}
        src={$url}
      />
    );
    refs.push(document.querySelector("#" + id));

    return (
      <React.Fragment>
        <div
          onClick={e => onClick(e)}
          style={{
            ...position,
            ...props.style,
            backgroundImage: $url,
            backgroundSize: "contain",
            backgroundPosiiton: "top"
          }}
          className={
            "xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-48 w-full z-0 absolute"
          }
        >
          {video}
        </div>
      </React.Fragment>
    );
  };

  return <div>{props.type == "image" ? imageBanner : videoBanner()}</div>;
};

export default slide;
