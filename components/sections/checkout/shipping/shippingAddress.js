import React from "react";

import data from "../../../../static/data";

const ShippingAddress = props => {
  let pageGroup = "shipping";

  if (props.checkout.orderDetails[pageGroup] == null) {
    let _orderDetails = props.checkout.orderDetails;

    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: pageGroup,
      key: undefined,
      value: undefined
    });
  }

  let showCountries = () => {
    let arr = [
      <option key="default" disabled value="">
        Select...
      </option>,
      <option key="_Canada" value="Canada">
        Canada
      </option>,
      <option key="_United States" value="United States">
        United States
      </option>,
      <option key="hr" disabled>
        -------
      </option>
    ];
    for (let country of data.countries) {
      arr.push(
        <option key={country} value={country}>
          {country}
        </option>
      );
    }
    return arr;
  };

  let showOptions = () => {
    if (
      props.checkout.orderDetails[pageGroup] == null &&
      props.checkout.orderDetails[pageGroup].country != null
    )
      return null;
    let _country = props.checkout.orderDetails[pageGroup].country.value;
    let _data;
    switch (_country) {
      case "Canada":
        _data = Object.keys(data.provincesCA);
        break;
      case "United States":
        _data = data.statesUS;
        break;
      default:
        _data = [];
    }

    let arr = [
      <option key="default" disabled value="">
        Select...
      </option>
    ];
    for (let state of _data) {
      arr.push(
        <option key={state} value={state}>
          {state}
        </option>
      );
    }
    return arr;
  };

  return (
    <div className="w-full mt-6">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">
        Shipping Address
      </h2>
      <form>
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
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].fullName != null
                    ? props.checkout.orderDetails[pageGroup].fullName.value ||
                      ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "FirstName LastName";

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
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].email != null
                    ? props.checkout.orderDetails[pageGroup].email.value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "Email";

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
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].address != null
                  ? props.checkout.orderDetails[pageGroup].address.value || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = "Address1";

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
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].apartment != null
                  ? props.checkout.orderDetails[pageGroup].apartment.value || ""
                  : undefined
              }
              onChange={e => {
                let _orderDetails = props.checkout.orderDetails;
                let _target = e.target;
                let _key = _target.id;
                let _value = _target.value;
                let _tag = "Apartment";

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
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].postalZip != null
                    ? props.checkout.orderDetails[pageGroup].postalZip.value ||
                      ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "Postal_Zip_Code";

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
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].city != null
                    ? props.checkout.orderDetails[pageGroup].city.value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "City";

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
              <select
                id="country"
                defaultValue=""
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].country != null
                    ? props.checkout.orderDetails[pageGroup].country.value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "Country";

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
                }}
                placeholder="Country"
                className="w-full"
                style={{ padding: "0.35rem" }}
              >
                {showCountries()}
              </select>
            </div>
          </div>
          <div className="w-full p-2 inline-flex">
            <div className="w-1/2">
              {props.checkout.orderDetails[pageGroup] != null &&
              props.checkout.orderDetails[pageGroup].country != null &&
              ["Canada", "United States"].includes(
                props.checkout.orderDetails[pageGroup].country.value
              ) ? (
                <select
                  type="text"
                  name=""
                  id="state"
                  defaultValue=""
                  value={
                    props.checkout.orderDetails[pageGroup] != null &&
                    props.checkout.orderDetails[pageGroup].state != null
                      ? props.checkout.orderDetails[pageGroup].state.value || ""
                      : undefined
                  }
                  onChange={e => {
                    let _orderDetails = props.checkout.orderDetails;
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.value;
                    let _tag = "State";

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
                  }}
                  placeholder="Province"
                  className="w-full"
                  style={{ padding: "0.35rem" }}
                >
                  {showOptions()}
                </select>
              ) : (
                <input
                  type="text"
                  name=""
                  id="state"
                  value={
                    props.checkout.orderDetails[pageGroup] != null &&
                    props.checkout.orderDetails[pageGroup].state != null
                      ? props.checkout.orderDetails[pageGroup].state.value || ""
                      : undefined
                  }
                  onChange={e => {
                    let _orderDetails = props.checkout.orderDetails;
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.value;
                    let _tag = "State";

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
              )}
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name=""
                id="phone"
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].phone != null
                    ? props.checkout.orderDetails[pageGroup].phone.value || ""
                    : undefined
                }
                onChange={e => {
                  let _orderDetails = props.checkout.orderDetails;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;
                  let _tag = "PhoneNum";

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
