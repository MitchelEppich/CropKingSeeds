const LoaderSmall = props => {
  return (
    <div className="loader h-20 mx-auto text-center">
      <div className="lds-mini-ring w-200 flex justify-center">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoaderSmall;
