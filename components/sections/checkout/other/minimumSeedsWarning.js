import React from "react";

const MinimumSeedsWarning = props => {
  let _orderDetails = props.checkout.orderDetails;

  let _items = props.cart.items;

  let amountOfSeeds = (() => {
    let amount = 0;
    let keys = Object.keys(_items);
    for (let key of keys) {
      let _item = _items[key];
      amount += parseInt(_item.amount) * _item.quantity;
    }

    return amount;
  })();

  return (
    <div>
      {amountOfSeeds < 20 &&
      _orderDetails.shipping != null &&
      _orderDetails.shipping.country != null &&
      ![
        "Canada",
        "Australia",
        "New Zealand",
        "United States",
        "United Kingdom",
        "Ireland",
        "Spain"
      ].includes(_orderDetails.shipping.country.value) ? (
        <div className="w-full">
          <p className="text-red-dark w-full text-sm text-center font-bold opacity-75">
            ** Due to Shipment Restrictions, it is{" "}
            <span className="font-black">MANDATORY</span> that your cart
            contains at least <span className="font-black">20 seeds</span>{" "}
            before continuing. **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MinimumSeedsWarning;
