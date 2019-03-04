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
    let _data = Object.keys(props.misc.taxes);

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
  let chromeWarning =
    props.supportedBrowser != null && props.supportedBrowser.browser == "chrome"
      ? {
          transform: "translateY(-100px)",
          width: "50%",
          height: "50px",
          margin: "0px auto",
          padding: "13px",
          fontSize: "1.2rem",
          textAlign: "center",
          backgroundColor: "#ef5753",
          color: "white"
        }
      : {
          transform: "translateY(0)",
          width: "50%",
          height: "50px",
          margin: "0px auto",
          padding: "13px",
          fontSize: "1.2rem",
          textAlign: "center",
          backgroundColor: "#ef5753",
          color: "white"
        };
  return (
    <div style={styleFullScreen} className="w-full h-full overflow-y-hidden">
      <div style={chromeWarning}>
        <p>
          This website is best experienced with Google Chrome.{" "}
          <a href="https://www.google.com/chrome/" target="_blank">
            Click here to download.
          </a>
        </p>
      </div>
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
        <div className="absolute-center pin md:w-400 md:h-500 sm:w-300 sm:h-500 w-600 h-600 bg-white shadow-lg text-grey relative">
          <div className="w-full text-center mt-4">
            <img
              src={props.misc.CFURL + "/logos/cks_logo.png"}
              className="w-48 md:w-32 sm:w-32"
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
                  ? props.misc.taxes[props.misc.ageVerification.state].ageLegal
                  : 21}
                +
              </span>
              or am a valid medical marijuana patient.
            </p>
            <div className="mt-6 items-center mx-auto wrap w-400 sm:w-main md:w-main">
              <p className="my-2 mr-4 text-grey-light text-sm">Country:</p>
              <select
                id="country"
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
              <div className="mt-6 items-center mx-auto wrap w-400 sm:w-main md:w-main">
                <p className="my-2 mr-4 text-grey-light text-sm">Province:</p>
                <select
                  type="text"
                  name=""
                  id="state"
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
              <div
                className={`w-full inline-flex p-2 mx-auto justify-center mt-2 ${
                  props.misc.ageVerification == null ||
                  props.misc.ageVerification.country == null ||
                  (props.misc.ageVerification.state == null &&
                    props.misc.ageVerification.country == "Canada")
                    ? "unselectable pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <button
                  type="submit"
                  name="ageVerification"
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
