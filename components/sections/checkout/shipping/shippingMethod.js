const ShippingMethod = props => {
  let methods = [
    {
      type: "Regular Shipping",
      price: 10
    },
    {
      type: "Express Registered with Tracking",
      price: 30
    }
  ];

  let pageGroup = "shipping";

  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-extrabold mt-4 mb-6 text-black">
        Shipping Method
      </h2>
      <div className="w-full inline-flex">
        <div className="p-2">
          <div className="inline-flex items-center flex">
            <input
              type="checkbox"
              className="checkbox"
              id="method"
              checked={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].method == 0
                  : false
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = 0;
                let _tag = undefined;

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });

                let _method = methods[_value];

                _key = "shippingCost";
                _value = _method.price;
                _tag = "sShipping";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });

                _key = "shippingDetail";
                _value = _method.type;
                _tag = "sType";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
            />
            <h2 className="font-extrabold text-grey ml-2">Regular Shipping</h2>
            <span className="text-3xl text-grey-light ml-10">$10</span>
          </div>
          <p className="mt-2 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="w-full inline-flex mt-6 mb-12">
        <div className="p-2">
          <div className="inline-flex items-center flex">
            <input
              type="checkbox"
              className="checkbox"
              id="method"
              checked={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].method == 1
                  : false
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = 1;
                let _tag = undefined;

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });

                let _method = methods[_value];

                _key = "shippingCost";
                _value = _method.price;
                _tag = "sShipping";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });

                _key = "shippingDetail";
                _value = _method.type;
                _tag = "sType";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
            />
            <h2 className="font-extrabold text-grey ml-2">Express Shipping</h2>
            <span className="text-3xl text-grey-light ml-10">$32</span>
          </div>
          <p className="mt-2 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
