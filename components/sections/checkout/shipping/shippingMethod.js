const ShippingMethod = props => {
  let methods = props.checkout.shippingMethods;
  console.log(methods);
  let pageGroup = "shipping";

  let currency = props.checkout.viewCurrency;

  let showMethods = () => {
    if (
      props.checkout.orderDetails.shipping.country == null ||
      (props.checkout.orderDetails.shipping.state == null &&
        ["Canada", "United States"].includes(
          props.checkout.orderDetails.shipping.country.value
        ))
    )
      return (
        <div>
          <p className="text-red-dark w-full text-sm font-bold opacity-50 uppercase">
            ** Please select your Shipping Country and State / Province **
          </p>
        </div>
      );

    let arr = [];

    for (let _method of methods) {
      arr.push(
        <div key={arr} className="w-full inline-flex">
          <div className="p-2 w-full">
            <div className="inline-flex items-top sm:flex-col flex w-full border-b-2 pb-4 border-grey-lightest">
              <div className="w-7/8 sm:w-full">
                <label className="items-center flex cursor-pointer inline-flex">
                  <div className="w-6">
                    <input
                      aria-label="method"
                      type="checkbox"
                      className="checkbox"
                      id="method"
                      checked={
                        props.checkout.orderDetails[pageGroup] != null &&
                        props.checkout.orderDetails[pageGroup].shippingCost !=
                          null
                          ? props.checkout.orderDetails[pageGroup].shippingCost
                              .value == _method.price
                          : false
                      }
                      onChange={e => {
                        let _orderDetails = props.checkout.orderDetails;
                        let _target = e.target;
                        let _key = "shippingCost";
                        let _value = _method.price;
                        let _tag = "Shipping";

                        props.modifyOrderDetails({
                          orderDetails: _orderDetails,
                          group: pageGroup,
                          key: _key,
                          value: _value,
                          tag: _tag,
                          requestUpdateOfGroup: {
                            value: true,
                            group: "payment"
                          }
                        });

                        _key = "shippingDetail";
                        _value = _method.tag;
                        _tag = "Shipped_Type";

                        props.modifyOrderDetails({
                          orderDetails: _orderDetails,
                          group: pageGroup,
                          key: _key,
                          value: _value,
                          tag: _tag
                        });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="font-extrabold text-grey hover:text-grey-light text-xl ml-2 sm:text-xl">
                      {_method.type}
                    </h2>
                  </div>
                </label>
                <p className="mt-2 text-sm font-bold ml-10 sm:ml-2 leading-normal text-grey-light">
                  - {_method.description}
                </p>
                <p className="mt-6 text-red-dark w-full ml-8 text-sm font-bold opacity-75 text-center uppercase">{`${
                  _method.note ? "** " + _method.note + " **" : ""
                }`}</p>
              </div>
              <div className="w-1/8 sm:w-full sm:mt-4 sm:flex sm:justify-end">
                <div className="text-2xl text-red-light font-extrabold">
                  {props.checkout.orderDetails.shipping.country == null ||
                  (props.checkout.orderDetails.shipping.state == null &&
                    ["Canada", "United States"].includes(
                      props.checkout.orderDetails.shipping.country.value
                    ))
                    ? ""
                    : _method.price != 0
                    ? currency != null
                      ? `${currency.symbol}${(
                          currency.convert * _method.price
                        ).toFixed(2)}`
                      : ""
                    : "FREE"}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return arr;
  };

  return (
    <div
      className={`w-full px-8 mt-8 mb-4 pb-4 ${
        props.checkout.orderDetails.shipping.country == null ||
        (props.checkout.orderDetails.shipping.state == null &&
          ["Canada", "United States"].includes(
            props.checkout.orderDetails.shipping.country.value
          ))
          ? "opacity-50 pointer-events-none unselectable"
          : ""
      }`}
    >
      <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
        Shipping Method
      </h2>
      {showMethods()}
    </div>
  );
};

export default ShippingMethod;
