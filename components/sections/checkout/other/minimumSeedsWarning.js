import React from "react";

const MinimumSeedsWarning = props => {
       
  let _orderDetails = props.checkout.orderDetails


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
            {amountOfSeeds < 20 && _orderDetails.shipping != null && _orderDetails.shipping.country != null && !["Canada", "Australia", "New Zealand", "United States", "United Kingdom", "Ireland", "Spain"].includes(_orderDetails.shipping.country.value) ? (
        <div className="w-full">
          <p className="text-red-dark w-full text-center opacity-75">
            ** Due to shipment restrictions, it is mandatory that your cart
            contains at least 20 seeds before continuing **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MinimumSeedsWarning;
