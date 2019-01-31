import ListEvents from "./listEvents";
import { width } from "window-size";

const news = props => {
  let styleImg = {
    height: "460px",
    width: "100%",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "top",
    boxShadow: "0 0px 10px rgba(0, 0, 0, 0.26)"
  };
  return (
    <div className="lg:mt-12 w-full sm:h-300 md:h-300 h-full lg:h-200">
      <div className="p-4 mt-6 w-full">
        <h2 className="text-3/5xl font-bold text-center w-full p-2 bg-red-darker text-white">
          Next Events
        </h2>
      </div>
      <div className="inline-flex w-full p-4">
        <div className="w-1/2">
          <img src="../../static/img/eventBanner.jpg" style={styleImg} />
        </div>
        <div className="w-1/2">
          <ListEvents {...props} />
          <ListEvents {...props} />
          <ListEvents {...props} />
          <ListEvents {...props} />
        </div>
      </div>
    </div>
  );
};

export default news;
