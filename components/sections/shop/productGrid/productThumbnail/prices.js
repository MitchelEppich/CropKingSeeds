const prices = props => {
  let currency = props.checkout.viewCurrency;

  let _product = props.product;

  return (
    <div
      className={
        props.hover
          ? "w-full px-4 md:px-1 mt-3 text-red-dark font-extrabold text-center inline-flex"
          : "hidden slow"
      }
    >
      <div className="w-1/2 mr-1 border-grey-lightest border pb-2">
        <p className="text-xs font-bold text-grey p-2 bg-grey-lightest">
          Price per Pack:
        </p>
        <p className="text-lg pt-2 font-bold text-grey px-2">
          {currency != null
            ? `${currency.symbol}${(
                currency.convert *
                (props.product.price[
                  props.shop.quickAddToCartQty[_product._id]
                ] < 1
                  ? _product.price[1].toFixed(2)
                  : _product.price[props.shop.quickAddToCartQty[_product._id]])
              ).toFixed(2)}`
            : ""}
        </p>
      </div>
      <div className="w-1/2 ml-1 border-grey-lightest border pb-2">
        <p className="text-xs font-bold text-grey p-2 bg-grey-lightest">
          Total Price:
        </p>
        <p className="text-lg pt-2 font-bold text-grey px-2">
          {currency != null
            ? `${currency.symbol}${(
                currency.convert *
                _product.price[props.shop.quickAddToCartQty[_product._id]] *
                props.cart.potentialQuantity[_product._id]
              ).toFixed(2)}`
            : ""}
        </p>
      </div>
    </div>
  );
};

export default prices;
