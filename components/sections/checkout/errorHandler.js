const ErrorHandler = props => {
  let error = {};

  let _orderDetails = props.checkout.orderDetails;
  let _stepsCheckout = props.misc.stepsCheckout;

  if (Object.keys(props.cart.items).length == 0) {
    error[100] = "No items are in the cart";
  }

  if (
    _stepsCheckout == 3 &&
    _orderDetails.payment != null &&
    _orderDetails.payment.method == null
  ) {
    error[101] = "No payment method selected";
  }

  if (
    _orderDetails.shipping != null &&
    _stepsCheckout == 1 &&
    _orderDetails.shipping.shippingCost == null
  ) {
    error[102] = "No shipping method selected";
  }

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

  if (
    amountOfSeeds < 20 &&
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
    ].includes(_orderDetails.shipping.country.value)
  ) {
    error[103] = "Seed minimum is not met";
  }

  if (
    _orderDetails.coupon != null &&
    _orderDetails.coupon.minimumOrder != null &&
    _orderDetails.coupon.minimumOrder > props.cart.price
  ) {
    error[104] = "Price minimum is not met";
  }

  if (
    _orderDetails.details != null &&
    (_orderDetails.details.infoConfirmed == null ||
      _orderDetails.details.infoConfirmed == false)
  ) {
    error[105] = "Order information is not confirmed by customer";
  }

  return error;
};

export default ErrorHandler;
