import React from "react";

const Tips = props => {
  return (
    <div className="w-full p-2 mb-1 inline-flex scale-item cursor-pointer">
      <div className="w-1/3">
        <img alt="cannabis" src="../static/img/cannabis.jpg" className="" />
      </div>
      <div className="w-2/3 px-4">
        <h3 className="px-1 font-extrabold">How to increase your yield</h3>
        <p className="text-xs p-1">
          Cillum sint consectetur et ipsum commodo est nisi. Et mollit aliquip
          esse pariatur mollit consequat ex consectetur...
        </p>
      </div>
    </div>
  );
};

export default Tips;
