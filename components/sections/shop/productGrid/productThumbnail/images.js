import Link from "next/link";
import PlantImage from "./plantImage";
import PackageImage from "./packageImage";

const images = props => {
  return (
    <Link
      prefetch
      href="/product"
      as={"/product/" + props.product.name.toLowerCase().replace(/ /g, "-")}
    >
      <React.Fragment>
        <PackageImage hover={props.hover} {...props} />
        <PlantImage hover={props.hover} {...props} />
      </React.Fragment>
    </Link>
  );
};

export default images;
