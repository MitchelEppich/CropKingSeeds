const MinimumOrderWarning = props => {
  let _orderDetails = props.checkout.orderDetails;
  let currency = props.checkout.viewCurrency;

  if (_orderDetails.coupon == null) return <div />;

  return (
    <div>
      {props.checkout.error[104] != null ? (
        <div className="w-full py-2">
          <p className="text-red-light font-bold w-full text-base text-center font-bold opacity-75 uppercase">
            ** The applied coupons require a{" "}
            <span className="underline">MINIMUM</span> order of{" "}
            <span className="underline">
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
