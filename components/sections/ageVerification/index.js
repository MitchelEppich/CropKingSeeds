import React from "react";
import Link from "next/link";
import data from "../../../static/data";

const AgeVerification = props => {
  let pageGroup = "shipping";
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
    if (props.misc.ageVerification == null) return null;
    let _data = Object.keys(data.provincesCA);

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

  let styleFullScreen = {
    top: "0",
    zIndex: "9999",
    background: "white",
    position: "fixed"
  };
  return (
    <div style={styleFullScreen} className="w-full h-full overflow-y-hidden">
      <form
        onSubmit={e => {
          e.preventDefault();

          let currency =
            props.misc.ageVerification.country == "Canada" ? "cad" : "usd";

          props.setCurrency({
            currency: {
              label: currency,
              ...props.checkout.availableCurrency[currency]
            }
          });

          let _ageVerification = props.misc.ageVerification;
          props.setAgeVerification({
            ageVerification: _ageVerification,
            group: "verified",
            value: true
          });
        }}
      >
        <div className="absolute-center pin w-600 h-600 bg-white shadow-lg text-grey relative">
          <div className="w-full text-center mt-4">
            <img
              src="../../static/img/cks_logo.png"
              className="w-48"
              onClick={() => console.log(props)}
            />
            <h3 className="mt-4 font-bold text-3xl">Age Verification</h3>
          </div>
          <div className="text-center mt-6 w-full">
            <p className="p-2">
              I am
              <span className="font-extrabold mx-1">
                {props.misc.ageVerification != null &&
                props.misc.ageVerification.country == "Canada" &&
                props.misc.ageVerification.state != null
                  ? data.provincesCA[props.misc.ageVerification.state].ageLegal
                  : 21}
                +
              </span>
              or am a valid medical marijuana patient.
            </p>
            <div className="mt-6 items-center mx-auto wrap w-400">
              <p className="my-2 mr-4 text-grey-light text-sm">Country:</p>
              <select
                id="country"
                defaultValue=""
                value={
                  props.misc.ageVerification != null
                    ? props.misc.ageVerification.country || ""
                    : undefined
                }
                onChange={e => {
                  let _ageVerification = props.misc.ageVerification;
                  let _target = e.target;
                  let _key = _target.id;
                  let _value = _target.value;

                  props.setAgeVerification({
                    ageVerification: _ageVerification,
                    group: _key,
                    value: _value
                  });
                }}
                placeholder="Country"
                className="w-full"
                style={{ padding: "0.35rem" }}
              >
                {showCountries()}
              </select>
            </div>

            {props.misc.ageVerification != null &&
            "Canada" == props.misc.ageVerification.country ? (
              <div className="mt-6 items-center mx-auto wrap w-400">
                <p className="my-2 mr-4 text-grey-light text-sm">Province:</p>
                <select
                  type="text"
                  name=""
                  id="state"
                  defaultValue=""
                  value={
                    props.misc.ageVerification != null
                      ? props.misc.ageVerification.state || ""
                      : undefined
                  }
                  onChange={e => {
                    let _ageVerification = props.misc.ageVerification;
                    let _target = e.target;
                    let _key = _target.id;
                    let _value = _target.value;

                    props.setAgeVerification({
                      ageVerification: _ageVerification,
                      group: _key,
                      value: _value
                    });
                  }}
                  placeholder="Province"
                  className="w-full"
                  style={{ padding: "0.35rem" }}
                >
                  {showOptions()}
                </select>
              </div>
            ) : null}
            <div className="absolute pin-b pin-x pb-4">
              <div className="w-full inline-flex p-2 mx-auto justify-center mt-2 ">
                <p className="text-sm text-grey-light">
                  <label className="items-center flex mx-auto justify-center">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      onChange={e => {
                        let _ageVerification = props.misc.ageVerification;
                        let _target = e.target;
                        let _key = _target.id;
                        let _value = _target.checked;

                        props.setAgeVerification({
                          ageVerification: _ageVerification,
                          group: _key,
                          value: _value
                        });
                      }}
                      className="mr-2 checkbox"
                    />{" "}
                    By clicking here you agree to{" "}
                    <Link href="/conditions">
                      <span className="ml-1">the Terms and Conditions</span>
                    </Link>
                  </label>
                </p>
              </div>
              <div
                className={`w-full inline-flex p-2 mx-auto justify-center mt-2 ${
                  props.misc.ageVerification == null ||
                  props.misc.ageVerification.country == null ||
                  (props.misc.ageVerification.state == null &&
                    props.misc.ageVerification.country == "Canada") ||
                  props.misc.ageVerification.terms == null ||
                  !props.misc.ageVerification.terms
                    ? "unselectable pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <button
                  type="submit"
                  className="bg-grey-dark text-white p-3 px-5 w-48 font-bold mx-2 text-center hover:bg-grey-light"
                >
                  I Agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AgeVerification;
