const name = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label htmlFor="name" className="p-1 font-bold">
        Full Name: <span className="text-red">*</span>
      </label>{" "}
      <input required type="text" name="name" className="p-2 my-1 w-full" />
    </div>
  );
};
export default name;
