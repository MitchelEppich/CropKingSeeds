import FeaturedStrains from "./featuredStrains/";

const StrainsHome = props => {
  return (
    <div>
      <div>
        <FeaturedStrains {...props} />
      </div>
    </div>
  );
};

export default StrainsHome;
