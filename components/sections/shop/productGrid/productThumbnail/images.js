import PlantImage from "./plantImage";
import PackageImage from "./packageImage";

const images = props => {
  return (
    <React.Fragment>
      <PackageImage hover={props.hover} {...props} />
      <PlantImage hover={props.hover} {...props} />
    </React.Fragment>
  );
};

export default images;
