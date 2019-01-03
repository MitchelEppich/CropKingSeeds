import React from "react";

import StringMask from "string-mask";

const BillingAddress = props => {
  let pageGroup = "billing";

  let phoneFormat = new StringMask("(000) 000-0000");
  let postalFormat = new StringMask("U0U 0U0");

  if (props.checkout.orderDetails[pageGroup] == null) {
    let _orderDetails = props.checkout.orderDetails;

    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: pageGroup,
      key: "readOnly",
      value: true
    });
  }

  if (
    props.checkout.orderDetails[pageGroup] != null &&
    props.checkout.orderDetails[pageGroup].readOnly &&
    props.checkout.orderDetails.shipping.updatedAt !=
      props.checkout.orderDetails[pageGroup].updatedAt
  ) {
    let _orderDetails = props.checkout.orderDetails;
    _orderDetails[pageGroup] = {
      ..._orderDetails.shipping,
      ..._orderDetails.billing
    };

    _orderDetails[pageGroup].updatedAt = _orderDetails.shipping.updatedAt;

    props.setOrderDetails({ orderDetails: _orderDetails });
  }

  return (
    <div className="w-full mt-6 pb-8">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">
        Billing Address
      </h2>
      <form>
        <div className="pl-2 mt-6 flex items-center inline-flex">
          <label className="font-bold flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="checkbox cursor-pointer"
              id="readOnly"
              checked={
                props.checkout.orderDetails[pageGroup] != null
                  ? !props.checkout.orderDetails[pageGroup].readOnly
                  : false
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;

                _orderDetails[pageGroup] = {
                  readOnly: !_target.checked,
                  updatedAt: new Date()
                };

                props.setOrderDetails({ orderDetails: _orderDetails });
              }}
            />
            Different from Shipping Address
          </label>
        </div>

        <div
          className={`w-full mt-4 ${
            props.checkout.orderDetails[pageGroup].readOnly
              ? "opacity-50 pointer-events-none unselectable"
              : ""
          }`}
        >
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
                  let _tag = "bFirstName bLastName";

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
                  let _tag = "bEmail";

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
                let _tag = "bAddress";

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
                let _tag = "bApartment";

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
                  let _tag = "bPostalZip";

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
                  let _tag = "bCity";

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
                  let _tag = "bCountry";

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
                  let _tag = "bState";

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
                  let _tag = "bPhone";

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

export default BillingAddress;
