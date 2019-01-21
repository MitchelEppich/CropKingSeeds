import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBalanceScale,
  faSortAmoutUp,
  faDna,
  faGlobeAmericas,
  faSeedling,
  faChartLine,
  faTree
} from "@fortawesome/free-solid-svg-icons";

const Details = props => {
  let _product = props.viewProduct.currentProduct;
  let _genes = _product.og.map((val, index) => {
    return (
      <span key={index} className="font-bold">
        {val}
      </span>
    );
  });

  return (
    <div className="bg-smoke-grey">
      <div
        style={{ background: "#128671" }}
        className="w-full border-b-8 border-white">
        <h3 className="text-white font-bold p-2 text-center uppercase">Info</h3>
      </div>
      <div className="flex xl:block lg:block md:block sm:block mt-1 pt-1">
        <div className="w-full">
          <div className="w-full inline-flex items-center flex pl-6 bg-white mb-1">
            <div className="w-16 inline-flex">
              <div
                style={{ background: "#128671" }}
                className="p-1 text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faClock} className="fa-2x p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
              {/* Grow Time: */}
              {/* </p> */}
            </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">
                {_product.flowerTime}
              </p>
            </div>
          </div>
          <div className="w-full inline-flex items-center flex pl-6 bg-white mb-1">
            <div className="w-16 inline-flex items-center flex">
              <div
                style={{ background: "#086554" }}
                className="p-1 text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faTree} className="fa-2x ml-1 p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
              {/* Yield: */}
              {/* </p> */}
            </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">
                {" "}
                {_product.yield[0] + " "} / {_product.yield[1]}
              </p>
            </div>
          </div>

          <div className="w-full inline-flex items-center flex pl-6 bg-white mb-1">
            <div className="w-16 inline-flex items-center flex">
              <div
                style={{ background: "#158442" }}
                className="p-1 text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faChartLine} className="fa-2x p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
              {/* Difficulty: */}
              {/* </p> */}
            </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">
                {_product.difficulty}
              </p>
            </div>
          </div>

          {/* <div className="w-full inline-flex items-center flex pl-6">
            <div className="w-16 inline-flex items-center flex">
              <div className="p-1 bg-green text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faDna} className="fa-2x p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
          {/* Genes: */}
          {/* </p> */}
          {/* </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">
                {_product.genetic}
              </p>
            </div>
          </div> */}

          <div className="w-full inline-flex items-center flex pl-6 bg-white mb-1">
            <div className="w-16 inline-flex items-center flex">
              <div
                style={{ background: "#1cb058" }}
                className="p-1 text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faGlobeAmericas} className="fa-2x p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
              {/* Country: */}
              {/* </p> */}
            </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">
                {_product.country}
              </p>
            </div>
          </div>

          <div className="w-full inline-flex items-center flex pl-6 bg-white mb-1">
            <div className="w-16 inline-flex items-center flex">
              <div
                style={{ background: "#23dc6e" }}
                className="p-1 text-white w-10 h-10 ml-2 m-1">
                <FontAwesomeIcon icon={faSeedling} className="fa-2x p-1" />
              </div>
              {/* <p className="p-2 font-bold text-grey uppercase text-sm"> */}
              {/* Environment: */}
              {/* </p> */}
            </div>
            <div className="w-full p-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm">
              <p className="font-bold text-sm pl-6 uppercase">{_product.env}</p>
            </div>
          </div>
          {/* <div className="w-full text-center leading-tight xl:block lg:block xl:w-full lg:w-full md:block md:w-full sm:block sm:w-full">
            <p className="mb-1 p-1 font-bold bg-smoke-grey text-grey uppercase">
              Effects:
            </p>
            <ul className="list-reset leading-normal text-left pl-2">
              <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">
                1- Relax
              </li>
              <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">
                2- Relax
              </li>
              <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">
                3- Relax
              </li>
              <li className="xl:text-sm lg:text-sm md:text-sm sm:text-sm">
                4- Relax
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
