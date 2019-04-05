import Router from "next/router";
import VideoSlide from "./videoSlide";
import Link from "next/link";

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
      Router.push("/product", props.url);
    }
  };

  let imageBanner = (
    <Link href="/product" as={props.url}>
      <a href={props.url}>
        <span
          onMouseEnter={() => {
            if (props.sotiId == null) return;
            let strains = props.misc.strains;
            props.getStrain({ sotiId: props.sotiId, strains }).then(res => {
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
          onClick={e => onClick(e)}
          style={{
            ...position,
            ...props.style,
            backgroundImage: "url(" + $url + ")",
            backgroundPosition: "center"
          }}
          className={
            "xxl:h-600 xl:h-400 lg:h-300 md:h-250 sm:h-175 bg-contain w-full z-0 absolute cursor-pointer"
          }
        />
      </a>
    </Link>
  );

  return props.type == "image" ? (
    imageBanner
  ) : (
    <VideoSlide
      index={props.index}
      $url={$url}
      slidePosition={position}
      {...props}
      type={props.type}
    />
  );
};

export default slide;
