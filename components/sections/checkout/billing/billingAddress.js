import React from "react";

import StringMask from "string-mask";

import data from "../../../../static/data";

const BillingAddress = props => {
  let pageGroup = "billing";

  let phoneFormat = new StringMask("(000) 000-0000");
  let postalFormat = new StringMask("U0U 0U0");
  let stateOrProvinceInput;

  let _orderDetails = props.checkout.orderDetails;

  if (_orderDetails[pageGroup] == null) {
    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: pageGroup,
      key: "readOnly",
      value: true
    });
  } else {
    if (_orderDetails[pageGroup].country != null) {
      stateOrProvinceInput = ["Canada", "United States"].includes(
        _orderDetails[pageGroup].country.value
      );
    } else {
      stateOrProvinceInput = true;
    }
  }

  if (
    _orderDetails[pageGroup] != null &&
    _orderDetails[pageGroup].readOnly &&
    _orderDetails.shipping.updatedAt != _orderDetails[pageGroup].updatedAt
  ) {
    _orderDetails[pageGroup] = {
      ..._orderDetails.billing,
      ..._orderDetails.shipping
    };

    _orderDetails[pageGroup].updatedAt = _orderDetails.shipping.updatedAt;

    props.setOrderDetails({ orderDetails: _orderDetails });
  }

  let showCountries = () => {
    let arr = [
      <option key="default" disabled value="">
        Country...
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
    // if (
    //   _orderDetails[pageGroup] == null &&
    //   _orderDetails[pageGroup].country != null
    // )
    //   return null;
    let _country =
      _orderDetails[pageGroup].country && _orderDetails[pageGroup].country.value
        ? _orderDetails[pageGroup].country
        : "";
    let _data;
    switch (_country.value) {
      case "Canada":
        _data = Object.keys(props.misc.taxes);
        break;
      case "United States":
        _data = data.statesUS;
        break;
      default:
        _data = [...data.statesUS, ...Object.keys(props.misc.taxes)];
    }

    let arr = [
      <option key="default" disabled value="">
        State/Province...
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
    <div className="w-full mt-6 px-8 sm:px-4">
      <h2 className="text-3/5xl font-extrabold opacity-50 mt-8 mb-4 text-black">
        Billing Address
      </h2>
      <div className="pl-2 mt-6 flex items-center inline-flex">
        <label className="font-bold flex items-center cursor-pointer uppercase text-red-light">
          <input
            aria-label="differentBillingAddress"
            type="checkbox"
            className="checkbox cursor-pointer"
            id="readOnly"
            checked={
              _orderDetails[pageGroup] != null
                ? !_orderDetails[pageGroup].readOnly
                : false
            }
            onChange={e => {
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
          _orderDetails[pageGroup].readOnly ? "opacity-50" : ""
        }`}
      >
        <div className="w-full p-2 inline-flex sm:flex-col border-t-2 border-grey-lightest mt-2 pt-4">
          <div className="w-1/2 sm:w-full sm:pl-0 sm:mt-4">
            <input
              aria-label="name"
              type="text"
              name="name"
              id="fullName"
              autoComplete="name"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].fullName != null
                  ? _orderDetails[pageGroup].fullName.value || ""
                  : ""
              }
              onChange={e => {
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
                e.target.setCustomValidity("");
              }}
              onInvalid={e => {
                e.target.setCustomValidity(
                  "First and last name only, separated by a space."
                );
              }}
              placeholder="Full Name"
              className="p-2 w-full"
              required
              pattern="^\S+\s\S+$"
            />
          </div>
          <div className="w-1/2 pl-2 sm:w-full sm:pl-0 sm:mt-4 inline-flex">
            <div
              className={`w-full ${
                _orderDetails[pageGroup].noEmail
                  ? "unselectable opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              <input
                aria-label="email"
                type="email"
                name="email"
                id="email"
                value={
                  _orderDetails[pageGroup] != null &&
                  _orderDetails[pageGroup].email != null
                    ? _orderDetails[pageGroup].email.value || ""
                    : ""
                }
                onChange={e => {
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
                required
              />
            </div>
            {/* <div className="w-1/3 pt-1">
              <label className="cursor-pointer font-bold uppercase items-center flex">
                <input
                  aria-label="noEmail"
                  type="checkbox"
                  id="noEmail"
                  checked={
                    _orderDetails[pageGroup] != null
                      ? _orderDetails[pageGroup].noEmail
                      : false
                  }
                  onChange={e => {
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.checked;

                    props.modifyOrderDetails({
                      orderDetails: _orderDetails,
                      group: pageGroup,
                      key: _key,
                      value: _value
                    });
                  }}
                  className="ml-2 checkbox"
                />{" "}
                No Email
              </label>
            </div> */}
          </div>
        </div>
        <div className="w-full p-2">
          <input
            aria-label="address"
            type="text"
            name="street-address"
            autoComplete="shipping street-address"
            id="address"
            value={
              _orderDetails[pageGroup] != null &&
              _orderDetails[pageGroup].address != null
                ? _orderDetails[pageGroup].address.value || ""
                : ""
            }
            onChange={e => {
              let _target = e.target;
              let _key = _target.id;
              let _value = _target.value;
              let _tag = "Address";

              props.modifyOrderDetails({
                orderDetails: _orderDetails,
                group: pageGroup,
                key: _key,
                value: _value,
                tag: _tag
              });
            }}
            placeholder="Street Address"
            className="p-2 w-full capitalize"
            required
          />
        </div>
        <div className="w-full p-2">
          <input
            aria-label="apartment"
            type="text"
            name="apartment"
            autoComplete="shipping apartment"
            id="apartment"
            value={
              _orderDetails[pageGroup] != null &&
              _orderDetails[pageGroup].apartment != null
                ? _orderDetails[pageGroup].apartment.value || ""
                : ""
            }
            onChange={e => {
              let _target = e.target;
              let _key = _target.id;
              let _value = _target.value;
              let _tag = "Appartment";

              props.modifyOrderDetails({
                orderDetails: _orderDetails,
                group: pageGroup,
                key: _key,
                value: _value,
                tag: _tag
              });
            }}
            placeholder="Apart. / Suite / Other"
            className="p-2 w-full capitalize"
          />
        </div>
        <div className="w-full p-2 sm:flex-col inline-flex">
          <div className="w-1/3 mr-2 sm:w-full sm:px-0 sm:mt-4">
            <input
              aria-label="ship-city"
              type="text"
              name="ship-city"
              autoComplete="shipping locality"
              id="city"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].city != null
                  ? _orderDetails[pageGroup].city.value || ""
                  : ""
              }
              onChange={e => {
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
              className="p-2 w-full capitalize"
              required
            />
          </div>
          <div className="w-1/3 sm:w-full sm:pl-0 mr-2">
            <select
              type="text"
              name="ship-state"
              autoComplete="shipping region"
              required={stateOrProvinceInput ? "required" : null}
              id="state"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].state != null
                  ? _orderDetails[pageGroup].state.value || ""
                  : ""
              }
              onChange={e => {
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
              className={stateOrProvinceInput ? "w-full" : "w-full hidden"}
              style={{ padding: "0.35rem" }}
            >
              {showOptions()}
            </select>
            <input
              aria-label="ship-region"
              type="text"
              name="ship-state"
              autoComplete="shipping region"
              required={stateOrProvinceInput ? "required" : null}
              id="state"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].state != null
                  ? _orderDetails[pageGroup].state.value || ""
                  : ""
              }
              onChange={e => {
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
              placeholder="State or Province (if applicable)"
              className={
                stateOrProvinceInput ? "p-2 w-full hidden" : "p-2 w-full"
              }
            />
          </div>
          <div className="w-1/3 sm:w-full sm:mt-4">
            <select
              id="country"
              name="ship-country"
              autoComplete="shipping country"
              required
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].country != null
                  ? _orderDetails[pageGroup].country.value || ""
                  : ""
              }
              onChange={e => {
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
        <div className="w-full p-2 inline-flex sm:flex-col">
          <div className="w-1/2 sm:w-full mr-2">
            <input
              aria-label="ship-zip"
              type="text"
              name="ship-zip"
              required
              autoComplete="shipping postal-code"
              id="postalZip"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].postalZip != null
                  ? _orderDetails[pageGroup].postalZip.value || ""
                  : ""
              }
              onChange={e => {
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
              required
            />
          </div>

          <div className="w-1/2 pl-2 pb-8 mb-6 sm:w-full sm:pl-0 sm:mt-4">
            <input
              aria-label="tel"
              required={false}
              // required={
              //   props.checkout.orderDetails.shipping.noEmail ? true : false
              // }
              type="text"
              name="phone"
              autoComplete="tel"
              id="phone"
              value={
                _orderDetails[pageGroup] != null &&
                _orderDetails[pageGroup].phone != null
                  ? _orderDetails[pageGroup].phone.value || ""
                  : ""
              }
              onChange={e => {
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
                e.target.setCustomValidity("");
              }}
              onInvalid={e => {
                e.target.setCustomValidity("Must be a valid phone number");
              }}
              maxLength="15"
              pattern={
                // props.checkout.orderDetails.shipping.noEmail ?
                "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
              }
              //     : null
              // }
              placeholder="Phone"
              className="p-2 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
