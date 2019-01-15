const ShippingMethod = props => {
  let methods = props.checkout.shippingMethods;

  let pageGroup = "shipping";

  let currency = props.checkout.viewCurrency;

  let showMethods = () => {
    let arr = [];

    for (let _method of methods) {
      arr.push(
        <div className="w-full inline-flex">
          <div className="p-2">
            <div className="inline-flex items-center flex">
              <label className="items-center flex cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="method"
                  checked={
                    props.checkout.orderDetails[pageGroup] != null &&
                    props.checkout.orderDetails[pageGroup].shippingCost != null
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
              <span className="text-3xl text-grey-light ml-10">
                {" "}
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _method.price
                    ).toFixed(2)}`
                  : ""}
              </span>
            </div>
            <p className="mt-2 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      );
    }

    return arr;
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-extrabold mt-4 mb-6 text-black">
        Shipping Method
      </h2>
      {showMethods()}
    </div>
  );
};

export default ShippingMethod;
