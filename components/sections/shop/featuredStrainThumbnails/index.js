
import Thumbnail from "../productGrid/thumbnail";

const index = props => {

  let hoverIndex = props.misc.hoverIndex;

  let thumbnails = props.misc.strains.map((product, index)=> {
    if(index > 2)return null;
    let packageStyle = hoverIndex == index ? 
    {
      height: "200px", width: "120px", position: "absolute", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
      transform: "translateX(-30px)",
      backgroundImage: "url(" + product.packageImg + ")",
      backgroundPosition: "center",
      backgroundSize: "cover"
    } 
    : 
    {
      height: "200px", width: "120px", position: "absolute", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
      transform: "translateX(0)",
      backgroundImage: "url(" + product.packageImg + ")",
      backgroundPosition: "center",
      backgroundSize: "cover"
    };

    let plantStyle = hoverIndex == index ? 
    {
      height: "200px", position: "absolute", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
      transform: "translateX(30px)"
    } 
    : 
    {
      height: "200px", position: "absolute", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
      transform: "translateX(0)"
    };

    let overlayStyle = hoverIndex == index ? 
    {
      height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)", transition: "0.5s all ease-in-out",
      color: "rgba(255,255,255,1)"
    } 
    : 
    {
      height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0)", transition: "0.5s all ease-in-out",
      color: "rgba(255,255,255,0)"
    };

    return(
      <div key={index} onMouseEnter={() => props.setHoverIndex(index)} onMouseLeave={() => props.setHoverIndex(index)} className="w-64 h-64 m-8 text-white">
        <div style={packageStyle}>
          <div style={overlayStyle}>Overlay words</div>
        </div>
      <img src={product.strainImg} style={plantStyle} />
    </div>
    );
  });

  return (
      <div className="w-full h-screen text-white">
        {thumbnails}
      </div>
  );
}
export default index;