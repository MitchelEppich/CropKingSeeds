import data from "../../../../static/data";
import MinimumSeedsWarning from "../other/minimumSeedsWarning";

const ShippingAddress = props => {
  let pageGroup = "shipping";
  let stateOrProvinceInput;
  if (props.checkout.orderDetails[pageGroup] == null) {
    let _orderDetails = props.checkout.orderDetails;
    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: pageGroup,
      key: undefined,
      value: undefined
    });
  } else {
    if (props.checkout.orderDetails[pageGroup].country != null) {
      stateOrProvinceInput = ["Canada", "United States"].includes(
        props.checkout.orderDetails[pageGroup].country.value
      );
    } else {
      stateOrProvinceInput = true;
    }
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
    // if (props.checkout.orderDetails[pageGroup] == null || props.checkout.orderDetails[pageGroup].country == null)
    //     return null;
    let _country =
      props.checkout.orderDetails[pageGroup].country &&
      props.checkout.orderDetails[pageGroup].country.value
        ? props.checkout.orderDetails[pageGroup].country
        : "";
    let _data;
    switch (_country.value) {
      case "Canada":
        _data = Object.keys(data.provincesCA);
        break;
      case "United States":
        _data = data.statesUS;
        break;
      default:
        _data = [...data.statesUS, ...Object.keys(data.provincesCA)];
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
    <div className="w-full mt-6 px-8 sm:px-4">
      <h2 className="text-3/5xl font-bold opacity-50 mt-8 mb-4 text-black">
        Shipping Address
      </h2>
      <MinimumSeedsWarning {...props} />

      <div className={`w-full mt-4`}>
        <div className="w-full flex justify-end">
          <div className="w-full flex justify-end">
            <label className="p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light">
              <input
                aria-label="save-data"
                type="checkbox"
                id="readOnly"
                checked={true}
                name=""
                className="checkbox"
              />
              Save for later
            </label>
          </div>
        </div>
        <div className="w-full p-2 inline-flex sm:flex-col border-t-2 border-grey-lightest mt-2 pt-4">
          <div className="w-1/2 sm:w-full sm:pl-0 sm:mt-4">
            <input
              aria-label="name"
              type="text"
              name="name"
              id="fullName"
              autoComplete="name"
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].fullName != null
                  ? props.checkout.orderDetails[pageGroup].fullName.value || ""
                  : ""
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
              required
            />
          </div>
          <div className="w-1/2 pl-2 sm:w-full sm:pl-0 sm:mt-4 inline-flex">
            <div className="w-2/3">
              <input
                aria-label="email"
                type="email"
                name="email"
                id="email"
                value={
                  props.checkout.orderDetails[pageGroup] != null &&
                  props.checkout.orderDetails[pageGroup].email != null
                    ? props.checkout.orderDetails[pageGroup].email.value || ""
                    : ""
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
                required
              />
            </div>
            <div className="w-1/3 pt-1">
              <label className="cursor-pointer font-bold uppercase items-center flex">
                <input
                  type="checkbox"
                  value=""
                  name=""
                  className="ml-2 checkbox"
                />
                No Email
              </label>
            </div>
          </div>
        </div>
        <div className="w-full p-2">
          <input
            aria-label="address"
            type="text"
            name="street-address"
            required
            autoComplete="shipping street-address"
            id="address"
            value={
              props.checkout.orderDetails[pageGroup] != null &&
              props.checkout.orderDetails[pageGroup].address != null
                ? props.checkout.orderDetails[pageGroup].address.value || ""
                : ""
            }
            onChange={e => {
              let _orderDetails = props.checkout.orderDetails;
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
            className="p-2 w-full"
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
              props.checkout.orderDetails[pageGroup] != null &&
              props.checkout.orderDetails[pageGroup].apartment != null
                ? props.checkout.orderDetails[pageGroup].apartment.value || ""
                : ""
            }
            onChange={e => {
              let _orderDetails = props.checkout.orderDetails;
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
            className="p-2 w-full"
          />
        </div>
        <div className="w-full p-2 sm:flex-col inline-flex">
          <div className="w-1/3 sm:w-full">
            <input
              aria-label="ship-zip"
              type="text"
              required
              name="ship-zip"
              autoComplete="shipping postal-code"
              id="postalZip"
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].postalZip != null
                  ? props.checkout.orderDetails[pageGroup].postalZip.value || ""
                  : ""
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
              required
            />
          </div>
          <div className="w-1/3 px-2 sm:w-full sm:px-0 sm:mt-4">
            <input
              aria-label="ship-city"
              type="text"
              name="ship-city"
              autoComplete="shipping locality"
              id="city"
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].city != null
                  ? props.checkout.orderDetails[pageGroup].city.value || ""
                  : ""
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
              required
            />
          </div>
          <div className="w-1/3 sm:w-full sm:mt-4">
            <select
              id="country"
              name="ship-country"
              autoComplete="shipping country"
              required
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].country != null
                  ? props.checkout.orderDetails[pageGroup].country.value || ""
                  : ""
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
                props.setShippingMethods({
                  country: _value,
                  state: undefined,
                  cartTotal: props.cart.price,
                  freeShippingThreshold: props.checkout.freeShippingThreshold,
                  orderDetails: _orderDetails
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
          <div className="w-1/2 sm:w-full sm:pl-0">
            <select
              name="ship-state"
              autoComplete="shipping region"
              required={stateOrProvinceInput ? "required" : null}
              id="state"
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].state != null
                  ? props.checkout.orderDetails[pageGroup].state.value || ""
                  : ""
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

                props.setShippingMethods({
                  country:
                    _orderDetails.shipping.country != null
                      ? _orderDetails.shipping.country.value
                      : undefined,
                  state: _value,
                  cartTotal: props.cart.price,
                  freeShippingThreshold: props.checkout.freeShippingThreshold,
                  orderDetails: _orderDetails
                });
              }}
              placeholder="Province or State"
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
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].state != null
                  ? props.checkout.orderDetails[pageGroup].state.value || ""
                  : ""
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

                props.setShippingMethods({
                  country:
                    _orderDetails.shipping.country != null
                      ? _orderDetails.shipping.country.value
                      : undefined,
                  state: _value,
                  cartTotal: props.cart.price,
                  freeShippingThreshold: props.checkout.freeShippingThreshold,
                  orderDetails: _orderDetails
                });
              }}
              placeholder="State or Province (if applicable)"
              className={
                stateOrProvinceInput ? "p-2 w-full hidden" : "p-2 w-full"
              }
            />
          </div>
          <div className="w-1/2 pl-2 sm:w-full sm:pl-0 sm:mt-4">
            <input
              type="tel"
              name="phone"
              aria-label="tel"
              autoComplete="tel"
              required
              id="phone"
              value={
                props.checkout.orderDetails[pageGroup] != null &&
                props.checkout.orderDetails[pageGroup].phone != null
                  ? props.checkout.orderDetails[pageGroup].phone.value || ""
                  : ""
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
                e.target.setCustomValidity("");
              }}
              onInvalid={e => {
                e.target.setCustomValidity("Must be a valid phone number");
              }}
              maxLength="15"
              pattern="\+?\(?\d{2,4}\)?[\d\s-]{3,}"
              placeholder="Phone"
              className="p-2 w-full"
            />
          </div>
        </div>
      </div>
      <div className="justify-between flex w-full mt-4 px-2">
        <div
          onClick={() => {
            console.log("hello");
          }}
          className="p-2 cursor-pointer capitalize bg-red-dark hover:bg-red-light text-white font-bold rounded"
        >
          Purge all Profiles
        </div>
        <div
          onClick={() => {
            console.log("hello2");
          }}
          className="p-2 cursor-pointer capitalize bg-red-dark hover:bg-red-light text-white font-bold rounded"
        >
          Purge my Profile
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
