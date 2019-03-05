const message = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">
        Message:<span className="text-red">*</span>
      </label>{" "}
      <textarea
        required
        name="body"
        cols="20"
        row="500"
        maxLength="150"
        className="p-2 my-1 w-full h-40"
      />
    </div>
  );
};

export default message;
