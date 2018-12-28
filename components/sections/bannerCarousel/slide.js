

const slide = props => {

  let positionIndex = props.position + props.index
  if(props.position + props.index >= props.misc.bannerSlides.length){
    positionIndex =  (props.position + props.index) - props.misc.bannerSlides.length
  } 

  let position = props.misc.bannerSlidePositions[positionIndex];

  return (
    <div style={position} className={"h-500 w-full absolute bg-" + props.color}></div>
  );
}

export default slide;