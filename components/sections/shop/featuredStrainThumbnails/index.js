
import Thumbnail from "../productGrid/thumbnail";

const index = props => {

  let thumbnails = props.misc.products.map((product, index)=> {
    if(index > 2)return null;
    return(
        <Thumbnail key={index} {...product} {...props}/>
    );
  });

  return (
      <div className="w-full h-screen bg-grey border border-white text-white">
        <h4>Featured Thumbnails</h4>
        {thumbnails}
      </div>
  );
}
export default index;