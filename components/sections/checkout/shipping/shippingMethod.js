const ShippingMethod = props => {
  let methods = props.checkout.shippingMethods;

  let pageGroup = "shipping";

  let currency = props.checkout.viewCurrency;

  let showMethods = () => {
    if (
      props.checkout.orderDetails.shipping.country == null ||
      props.checkout.orderDetails.shipping.state == null
    )
      return (
        <div>
          <p className="text-red-dark pb-8 font-bold">
            ** Please select your shipping country and state / province **
          </p>
        </div>
      );

    let arr = [];

    for (let _method of methods) {
      arr.push(
        <div className="w-full inline-flex">
          <div className="p-2 w-full">
            <div className="inline-flex items-top flex w-full border-b-2 pb-4 border-grey-lightest">
              <div className="w-7/8">
                <label className="items-center flex cursor-pointer">
                  <input
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
                        tag: _tag
                      });

                      _key = "shippingDetail";
                      _value = _method.type;
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
                  <h2 className="font-extrabold text-grey hover:text-grey-light ml-2">
                    {_method.type}
                  </h2>
                </label>
                <p className="mt-2 ml-10 leading-normal">
                  - {_method.description}
                </p>
              </div>
              <div className="w-1/8">
                <div className="text-2xl text-red-light font-extrabold">
                  {props.checkout.orderDetails.shipping.country == null ||
                  props.checkout.orderDetails.shipping.state == null
                    ? ""
                    : currency != null
                    ? `${currency.symbol}${(
                        currency.convert * _method.price
                      ).toFixed(2)}`
                    : ""}
                </div>
              </div>
            </div>

            <p className="mt-2 text-center font-extrabold leading-normal uppercase text-sm p-2 text-red-dark">{`${
              _method.note ? "** " + _method.note : ""
            }`}</p>
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
        props.checkout.orderDetails.shipping.state == null
          ? "opacity-50 pointer-events-none unselectable"
          : ""
      }`}>
      <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
        Shipping Method
      </h2>
      {showMethods()}
    </div>
  );
};

export default ShippingMethod;
