const catalogue = props => {
  return (
    <div className="w-full my-8 justify-center flex relative mt-2">
      <a
        href={
          props.misc.CFURL + "/catalogue/CropKingSeeds-2019-Catalogue.pdf"
        }
        target="_blank"
      >
        <img
          src={props.misc.CFURL + "/sidebar/downloadcatalogue.png"}
          className=""
        />
      </a>
    </div>
  );
};

export default catalogue;