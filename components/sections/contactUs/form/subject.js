const subject = props => {
  let options = [
    "Shipping / Delivery",
    "Payments",
    "Ordering Online",
    "Account Information",
    "Privacy / Security",
    "Advertisement",
    "Event Sponsorship",
    "Report a Bug / Issue",
    "Other"
  ];

  options = options.map((option, index) => {
    return (
      <option key={index} className="p-2" value={option}>
        {option}
      </option>
    );
  });
  return (
    <div className="w-main sm:w-full md:w-full mt-3 p-1">
      <label className="font-bold">Subject:</label>
      <select
        onChange={e => props.setSubject(e.target.value)}
        className="p-2 w-full my-1"
        name="subject"
      >
        {options}
      </select>
    </div>
  );
};

export default subject;
