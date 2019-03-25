const seedtracker = props => {
  return (
    <div className="w-full my-8 justify-center flex relative mt-2">
      <a href="http://www.seedtracker.com" target="_blank">
        <img src={props.misc.CFURL + "/sidebar/seedtracker.png"} className="" />
      </a>
    </div>
  );
};

export default seedtracker;
