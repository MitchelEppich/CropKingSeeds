const advertisement = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">Phone:</label>
      <input type="text" name="phone" className="p-2 my-1 mb-6 w-full" />
      <label className="font-bold">
        Company: <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="company"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
      <label className="font-bold">
        Website: <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="website"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
      <label className="font-bold">Date:</label>
      <input type="date" name="date" className="p-2 my-1 mb-6 w-full" />
      <label className="font-bold">
        Cost (estimate, in USD or CAD): <span className="text-red">*</span>
      </label>
      <input
        type="number"
        name="cost"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
      <label className="font-bold">
        Media Kit (URL): <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="mediaKit"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
    </div>
  );
};

export default advertisement;
