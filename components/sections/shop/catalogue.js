const catalogue = props => {
  return (
    <div className="w-full scale-item my-8 justify-center flex relative mt-2">
      <a
        href={props.misc.CFURL + "/catalogue/CropKingSeeds-2019-Catalogue.pdf"}
        aria-label="download-catalogue"
      >
        <img
          alt="crown icon cks"
          src={props.misc.CFURL + "/sidebar/downloadcatalogue.png"}
          className=""
        />
      </a>
    </div>
  );
};

export default catalogue;
