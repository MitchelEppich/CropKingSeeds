import React from "react";

const BillingAddress = props => {
  let pageGroup = "billing";
  return (
    <div className="w-full mt-6">
      <h2 className="text-3xl font-extrabold mt-12 mb-6 text-black">
        Shipping Address
      </h2>
      <form>
        <div className="w-full mt-4">
          <div className="w-full p-2">
            <input
              type="text"
              name=""
              id="name"
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
          <div className="w-full p-2">
            <input
              type="text"
              name=""
              id="address"
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
                placeholder="Province or State"
                className="p-2 w-full"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name=""
                id="phone"
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
          {/*<div className="pl-2 mt-6 flex items-center inline-flex">
                        <input type="checkbox" className="checkbox" id="sameAddress" 
                        onClick={(e) => {
                            props.misc.sameAddress ? !props.misc.sameAddress : null
                            // props.toggleStepsCheckout(props.misc.sameAddress)                           
                           
                        }} />
                        <p className="font-bold">Same for Shipping</p>
                    </div>*/}
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
