import data from "../../../../static/data";
import MinimumSeedsWarning from "../other/minimumSeedsWarning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ShippingAddress = props => {
  let localProfiles = localStorage.getItem("profiles");
  if (localProfiles != null) localProfiles = JSON.parse(localProfiles);
  let localProfilesExist = localProfiles != null && localProfiles.length > 0;

  let profiles = ["adam smith", "bobby jones"];
  profiles = profiles.map((profile, index) => {
    return (
      <option key={index} value={profile}>
        {profile}
      </option>
    );
  });

  let pageGroup = "shipping";
  let stateOrProvinceInput;
  let _orderDetails = props.checkout.orderDetails;
  if (_orderDetails[pageGroup] == null) {
    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: pageGroup,
      key: undefined,
      value: undefined
    });
    props.modifyOrderDetails({
      orderDetails: _orderDetails,
      group: "details",
      key: "saveForLater",
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
    // if (_orderDetails[pageGroup] == null || _orderDetails[pageGroup].country == null)
    //     return null;
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
        <div className="w-full flex inline-flex">
          <div
            className={`w-full flex justify-start ${
              !localProfilesExist
                ? "unselectable opacity-0 pointer-events-none"
                : ""
            }`}
          >
            <div
              onClick={() => {
                let profileObj = props.checkout.foundProfiles[0];
                props.loadLocalProfile({
                  orderDetails: _orderDetails,
                  profile: profileObj.profile,
                  profileID: profileObj.id,
                  cart: props.cart,
                  freeShippingThreshold: props.checkout.freeShippingThreshold
                });
              }}
              className={`p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light ${
                props.checkout.foundProfiles.length == 0
                  ? "unselectable opacity-25 pointer-events-none"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Load Profile
            </div>
          </div>
          <div className="w-full flex justify-end">
            <label className="p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light">
              <input
                aria-label="save-data"
                type="checkbox"
                id="saveForLater"
                checked={
                  _orderDetails["details"] != null
                    ? _orderDetails["details"].saveForLater
                    : false
                }
                onChange={e => {
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.checked;

                  props.modifyOrderDetails({
                    orderDetails: _orderDetails,
                    group: "details",
                    key: _key,
                    value: _value
                  });
                }}
                name=""
                className="checkbox"
              />
              Save Details
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
              }}
              placeholder="Full Name"
              className="p-2 w-full"
              required
            />
          </div>
          <div className="w-1/2 pl-2 sm:w-full sm:pl-0 sm:mt-4 inline-flex">
            <div
              className={`w-2/3 ${
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
            <div className="w-1/3 pt-1">
              <label className="cursor-pointer font-bold uppercase items-center flex">
                <input
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
          <div className="w-1/3 px-2 sm:w-full sm:px-0 sm:mt-4">
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
              pattern="\+?\(?\d{2,4}\)?[\d\s-]{3,}"
              placeholder="Phone"
              className="p-2 w-full"
            />
          </div>
        </div>
      </div>
      <div className="justify-between flex w-full mt-4 opacity-75">
        {props.checkout.profileID == null ? (
          <div
            onClick={() => {
              props.purgeLocalProfile({});
              props.clearOrderDetails({
                orderDetails: _orderDetails,
                group: pageGroup
              });
            }}
            className={`p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light ${
              !localProfilesExist
                ? "unselectable opacity-0 pointer-events-none"
                : ""
            }`}
          >
            Delete all Profiles
          </div>
        ) : (
          <div
            onClick={() => {
              props.purgeLocalProfile({
                profileID: props.checkout.profileID
              });
              props.clearOrderDetails({
                orderDetails: _orderDetails,
                group: pageGroup
              });
            }}
            className="p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light"
          >
            Purge My Profile
          </div>
        )}
        <div
          onClick={() => {
            props.clearOrderDetails({
              orderDetails: _orderDetails,
              group: pageGroup
            });
          }}
          className="p-2 font-bold uppercase scale-item flex items-center cursor-pointer text-red-light"
        >
          Clear Details
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
