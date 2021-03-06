const seedtracker = props => {
  return (
    <div className="w-full my-8 justify-center flex relative mt-2">
      <a
        rel="nofollow noreferrer"
        href="http://www.seedtracker.com"
        target="_blank"
      >
        <img
          alt="seedtracker banner"
          src={props.misc.CFURL + "/sidebar/seedtracker.png"}
          className="w-300"
        />
      </a>
    </div>
  );
};

export default seedtracker;
