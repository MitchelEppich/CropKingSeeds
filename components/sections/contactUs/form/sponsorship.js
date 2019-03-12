const sponsorship = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">Phone:</label>
      <input type="text" name="phone" className="p-2 my-1 mb-6 w-full" />
      <label className="font-bold">
        Event Name: <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="eventName"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
      <label className="font-bold">
        Location: <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="location"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
      <label className="font-bold">Date:</label>
      <input type="date" name="date" className="p-2 my-1 mb-6 w-full" />
      <label className="font-bold">
        Cost (estimate, in USD or CAD): <span className="text-red">*</span>
      </label>
      <input
        type="text"
        name="cost"
        required="required"
        className="p-2 my-1 mb-6 w-full"
      />
    </div>
  );
};

export default sponsorship;
