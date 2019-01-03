import React from "react";

const ShippingAddress = props => {
  let pageGroup = "shipping";
  console.log(props.checkout.orderDetails[pageGroup]);
  return (
    <div className="w-full mt-6">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">
        Shipping Address
      </h2>
      <form>
        <div className="w-full mt-4">
          <div className="w-full p-2 inline-flex">
            <div className="w-1/2">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].fullName || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sFirstName sLastName";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Full Name"
                className="p-2 w-full"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="email"
                name="email"
                id="email"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].email || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sEmail";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Email Address"
                className="p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <input
              type="text"
              name=""
              id="address"
              value={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].address || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = "sAddress";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
              placeholder="Street Address"
              className="p-2 w-full"
            />
          </div>
          <div className="w-full p-2">
            <input
              type="text"
              name=""
              id="apartment"
              value={
                props.checkout.orderDetails[pageGroup] != null
                  ? props.checkout.orderDetails[pageGroup].apartment || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = "sApartment";

                props.modifyOrderDetails({
                  orderDetails: _orderDetails,
                  group: pageGroup,
                  key: _key,
                  value: _value,
                  tag: _tag
                });
              }}
              placeholder="Apart. / Suite / Other"
              className="p-2 w-full"
            />
          </div>
          <div className="w-full p-2 inline-flex">
            <div className="w-1/3">
              <input
                type="text"
                name=""
                id="postalZip"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].postalZip || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sPostalZip";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="ZIP Code"
                className="p-2 w-full"
              />
            </div>
            <div className="w-1/3 px-2">
              <input
                type="text"
                name=""
                id="city"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].city || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sCity";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="City"
                className="p-2 w-full"
              />
            </div>
            <div className="w-1/3">
              <input
                type="text"
                name=""
                id="country"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].country || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sCountry";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Country"
                className="p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full p-2 inline-flex">
            <div className="w-1/2">
              <input
                type="text"
                name=""
                id="state"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].state || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sState";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Province"
                className="p-2 w-full"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name=""
                id="phone"
                value={
                  props.checkout.orderDetails[pageGroup] != null
                    ? props.checkout.orderDetails[pageGroup].phone || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "sPhone";

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: pageGroup,
                    key: _key,
                    value: _value,
                    tag: _tag
                  });
                }}
                placeholder="Phone"
                className="p-2 w-full"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
