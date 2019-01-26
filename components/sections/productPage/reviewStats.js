import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const ReviewStats = props => {
  let _product = props.viewProduct.currentProduct;
  let _quantities = _product.ratingQuantity;
  let _total = (() => {
    let total = 0;
    for (let amount of _quantities) {
      total += amount;
    }
    return total;
  })();

  let showRatings = () => {
    let filter = props.viewProduct.ratingFilter;
    let arr = [];
    let _index = 1;
    for (let amount of _quantities) {
      let index = _index;
      let percent = _quantities[_index - 1] / _total;
      let rank = (() => {
        let _rank = 0;
        for (let _amount of _quantities) {
          if (amount > _amount) _rank++;
        }
        return _rank;
      })();
      arr.push(
        <div
          className={`inline-flex p-1 items-center flex w-full cursor-pointer scale-item ${
            filter != null && index != filter ? "opacity-50" : ""
          }`}
          onClick={() => {
            props.setReviewRateFilter({
              rating: index == filter ? null : index
            });
          }}
        >
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">{index}</span>
            <div>
        <img src="../../static/img/CrownIcon.svg" className="ml-1 w-6 h-6 crown-icon items-center flex" />
      </div>
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{
                width: `${percent * 100}%`,
                opacity: `${[0.2, 0.4, 0.6, 0.8, 1][rank]}`,
                background: "#358406"
              }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            ({_quantities[index - 1]})
          </div>
        </div>
      );
      _index++;
    }
    return arr.reverse();
  };

  return (
    <div className="w-full">
      <div className="w-full mt-2 py-2 text-red-dark">{showRatings()}</div>
      <div className="text-center w-full mt-2 text-sm font-extrabold underline scale-item text-red-light cursor-pointer"           onClick={() => {
            props.setReviewRateFilter({
              rating: null
            });
          }}><p>Clear Filter</p></div>
    </div>
  );
};

export default ReviewStats;
