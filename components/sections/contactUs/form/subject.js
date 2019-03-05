const subject = props => {
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">Subject:</label>
      <select className="p-2 w-full my-1" name="subject">
        <option className="p-2" value="Shipping/Delivery">
          Shipping/Delivery
        </option>
        <option className="p-2" value="Payments">
          Payments
        </option>
        <option className="p-2" value="Ordering Online">
          Ordering Online
        </option>
        <option className="p-2" value="Account Information">
          Account Information
        </option>
        <option className="p-2" value="Privacy/Security">
          Privacy/Security
        </option>
        <option className="p-2" value="Other">
          Other
        </option>
      </select>
    </div>
  );
};

export default subject;
