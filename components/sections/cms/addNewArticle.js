const AddNewArticle = props => {
  return (
    <div className="h-full w-full">
      <div className="pt-8 ">
        <h3 className="font-bold text-3xl">Add New Article</h3>
      </div>
      <div className="w-main mx-auto p-2 mt-16 text-grey">
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Title:
          </label>
          <input type="text" className="p-2 w-full" placeholder="" />
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Category:
          </label>
          <select className="w-full p-2">
            <option className="p-2">New Releases</option>
            <option className="p-2">Events</option>
            <option className="p-2">Tips</option>
            <option className="p-2">Growing</option>
            <option className="p-2">News</option>
          </select>
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Text:
          </label>
          <textarea
            type="textarea"
            rows="10"
            cols="30"
            className="p-2 w-full"
            placeholder=""
          />
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Add Media:
          </label>
          <button className="p-2 bg-grey-lightest rounded text-grey font-bold">
            Click here to Select in your computer...
          </button>
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Keywords:
          </label>
          <button className="p-2 bg-red-light rounded text-white font-bold mr-2">
            Marijuana Seeds
          </button>
          <button className="p-2 bg-red-light rounded text-white font-bold mx-2">
            Purple Kush
          </button>
          <button className="p-2 bg-red-light rounded text-white font-bold ml-2">
            CKS Seeds
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewArticle;
