const email = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">
        Email Address: <span className="text-red">*</span>
      </label>{" "}
      <input
        type="email"
        name="email"
        required="required"
        className="p-2 my-1 w-full"
        onChange={e => {
          e.target.setCustomValidity("");
        }}
        onInvalid={e => {
          e.target.setCustomValidity(
            'Must be valid email and should contain "@"'
          );
        }}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$"
      />
    </div>
  );
};
export default email;
