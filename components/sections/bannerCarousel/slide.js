

const slide = props => {

  let positionIndex = props.position + props.index
  if(props.position + props.index >= props.misc.bannerSlides.length){
    positionIndex =  (props.position + props.index) - props.misc.bannerSlides.length
  }
  let position = props.misc.bannerSlidePositions[positionIndex];

  return (
    <div onClick={() => props.nextBannerSlide()} style={{...position, ...props.style}} className={"h-500 w-full z-0 absolute bg-" + props.color}>
    {props.index == 4 ?
      <button className="px-4 py-2 mx-auto text-center text-lg text-white border border-white font-bold bannerBuyNow">Buy Now</button>
    :
    null}
    </div>
  );
}

export default slide;