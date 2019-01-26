import React from "react";

const Privacy = props => {
  return (
    <div className="w-full">
      <div className="w-full relative inline-flex md:flex-col lg:flex-col sm:flex-col">
        <div className="w-full">
          <img
            src="../static/img/privacy.jpg"
            className=""
            // style={{ filter: "opacity(0.6)" }}
          />
        </div>
        <div         
          className="w-800 h-500 lg:w-full md:w-full sm:w-full md:h-400 bg-white lg:pin-t xl:pin xxl:pin absolute md:relative sm:relative lg:relative m-auto xl:shadow xx:shadow">
          <div className="justify-center w-full mt-6 inline-flex items-center flex">
            <div className="">
              <img src="../static/img/cropkingseed2s.png" className="w-24" />
            </div>
            <div>
              <h3 className="pl-2 font-black text-3xl uppercase">
                Privacy Policy
              </h3>
            </div>
          </div>
          <div
            style={{ width: "90%" }}
            className="h-300 mx-auto mt-3 md:h-250 p-2 px-12 overflow-y-auto">
            <p className="py-2">
              Magna proident irure quis consectetur sit elit do esse sunt
              reprehenderit est id irure. Enim officia minim consectetur amet
              adipisicing. Anim cupidatat elit exercitation elit consectetur
              exercitation non proident cillum. Fugiat id ex ex eu sint elit
              eiusmod ea eu adipisicing mollit laboris. Tempor velit sunt
              nostrud laboris eiusmod dolor laboris excepteur reprehenderit
              exercitation tempor fugiat fugiat. Quis aliquip nostrud eiusmod
              commodo commodo laborum veniam fugiat eiusmod adipisicing nostrud
              adipisicing esse nulla. Magna et cupidatat dolor veniam eu
              proident eu officia pariatur nisi officia id mollit.
            </p>
            <h3 className="py-2">Collection Information</h3>
            <p className="py-2">
              Magna proident irure quis consectetur sit elit do esse sunt
              reprehenderit est id irure. Enim officia minim consectetur amet
              adipisicing. Anim cupidatat elit exercitation elit consectetur
              exercitation non proident cillum. Fugiat id ex ex eu sint elit
              eiusmod ea eu adipisicing mollit laboris. Tempor velit sunt
              nostrud laboris eiusmod dolor laboris excepteur reprehenderit
              exercitation tempor fugiat fugiat. Quis aliquip nostrud eiusmod
              commodo commodo laborum veniam fugiat eiusmod adipisicing nostrud
              adipisicing esse nulla. Magna et cupidatat dolor veniam eu
              proident eu officia pariatur nisi officia id mollit.
            </p>
            <h3 className="py-2">Other Informations</h3>
            <p className="py-2">
              Magna proident irure quis consectetur sit elit do esse sunt
              reprehenderit est id irure. Enim officia minim consectetur amet
              adipisicing. Anim cupidatat elit exercitation elit consectetur
              exercitation non proident cillum. Fugiat id ex ex eu sint elit
              eiusmod ea eu adipisicing mollit laboris. Tempor velit sunt
              nostrud laboris eiusmod dolor laboris excepteur reprehenderit
              exercitation tempor fugiat fugiat. Quis aliquip nostrud eiusmod
              commodo commodo laborum veniam fugiat eiusmod adipisicing nostrud
              adipisicing esse nulla. Magna et cupidatat dolor veniam eu
              proident eu officia pariatur nisi officia id mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
