let open = (verb, url, data, target) => {
  let form = document.createElement("form");
  form.action = url;
  form.method = verb;
  form.target = target || "_self";
  if (data) {
    for (let key in data) {
      let input = document.createElement("textarea");
      input.name = key;
      input.value =
        typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
      form.appendChild(input);
    }
  }
  form.style.display = "none";
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

let payBitcoin = (orderDetails, orderId) => {
  let _billing = { ...orderDetails.billing };
  let _payment = { ...orderDetails.payment };
  let name = [_billing.firstName.value, _billing.lastName.value];

  let fOrderId = [orderId.slice(0, 4), "-", orderId.slice(4), "-CKS"].join("");

  open(
    "POST",
    "https://www.coinpayments.net/index.php",
    {
      cmd: "_pay",
      reset: "1",
      invoice: fOrderId,
      custom: "",
      merchant: "8c1706a0ba5ad9024ba30eb29b92563e",
      first_name: name[0],
      last_name: name[1],
      email: _billing.email.value,
      address1: _billing.address.value,
      address2: _billing.apartment != null ? _billing.apartment.value : "",
      city: _billing.city.value,
      state: _billing.state.value,
      zip: _billing.postalZip.value,
      country: _billing.country.value.toUpperCase(),
      phone: _billing.phone.value,
      currency:
        _billing.country.value.toLowerCase() == "canada" ? "CAD" : "USD",
      amountf: _payment.cartTotal.value,
      item_name: fOrderId,
      quantity: _payment.itemQuantity.value,
      allow_quantity: "0",
      shippingf: _payment.shippingFee.value,
      taxf: _payment.taxFee,
      ipn_url: "https://cropkingseeds.com/api/coinpayments/verify",
      success_url: "https://cropkingseeds.com/",
      cancel_url: `https://cropkingseeds.com/api/coinpayments/cancel?orderId=${orderId}`
    },
    "_blank"
  );
};

module.exports = {
  payBitcoin
};
