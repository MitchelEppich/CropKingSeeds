const MinimumOrderWarning = props => {
  let _orderDetails = props.checkout.orderDetails;
  let currency = props.checkout.viewCurrency;

  return (
    <div>
      {props.checkout.error[104] != null ? (
        <div className="w-full py-2">
          <p className="text-red-dark w-full text-sm text-center font-bold opacity-75">
            ** The applied coupons require a{" "}
            <span className="font-black">MINIMUM</span> order of{" "}
            <span className="font-black">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert * (_orderDetails.coupon.minimumOrder || 0)
                  ).toFixed(2)} ${currency.label.toUpperCase()}`
                : ""}
            </span>{" "}
            before continuing **
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MinimumOrderWarning;
