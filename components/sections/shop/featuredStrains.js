import FeaturedStrainThumbnails from "./featuredStrainThumbnails";

const featuredStrains = props => {
  return (
    <div className="border border-grey-lightest mt-8 sm:mt-10 md:mt-20 md:mb-0 rounded overflow-hidden">
      <div className="">
        <h3 className="text-left pl-4 font-bold mx-auto p-2 text-xl w-full bg-grey-lightest font-bold text-grey">
          Featured Strains
        </h3>
      </div>

      <FeaturedStrainThumbnails page={"shop"} initialCount={1} {...props} />
    </div>
  );
};

export default featuredStrains;
