const FilterArticles = props => {
  return (
    <div className="w-full p-4 justify-end flex inline-flex">
      <div className="inline-flex items-center flex">
        <p className="font-bold mx-2 text-grey-light opacity-50">Sort By:</p>
        <select className="p-2 w-300">
          <option className="" value="Title">
            Title
          </option>
          <option className="" value="Category">
            Category
          </option>
          <option className="" value="Date">
            Date
          </option>
          <option className="" value="Type">
            Type
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterArticles;
