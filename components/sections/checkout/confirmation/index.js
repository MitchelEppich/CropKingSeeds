import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import Router from "next/router";

import moment from "moment";

const Confirmation = props => {
  const isClient = typeof document !== "undefined";
  if (!isClient) return;
  let href = window.location.href.replace(Router.router.asPath, "");

  let _orderDetails = props.checkout.orderDetails;
  if (_orderDetails.payment == null) return <div />;
  let orderId = _orderDetails.payment.orderId.value.toString();
  if (orderId == null) return <div />;
  let fOrderId = [orderId.slice(0, 4), "-", orderId.slice(4), "-CKS"].join("");

  let currency = props.checkout.viewCurrency;

  let products = Object.keys(props.cart.items);

  let showProduct = () => {
    let arr = [];
    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      arr.push(
        <div
          key={arr}
          className="w-full inline-flex my-1 shadow-md h-full bg-white items-center flex p-2"
        >
          {/* <div className="w-32 p-2 font-bold text-lg items-center flex">
            <img src={_item.product.packageImg} className="h-32" />
          </div> */}
          <div className="w-3/5">
            <div className="p-2 font-bold text-lg items-center md:text-left sm:text-left lg:text-left flex">
              <a
                className="cursor-pointer hover:text-red-light"
                href={
                  href +
                  "/product/" +
                  _item.product.name.toLowerCase().replace(/ /g, "-")
                }
                target="_blank"
              >
                {_item.product.name} - {_item.amount} Seeds
              </a>
            </div>
          </div>
          <div className="w-1/5 p-2 font-bold text-lg items-center justify-center flex">
            {_item.quantity}
          </div>
          <div className="w-1/5 p-2 font-bold text-lg items-center justify-center flex">
            {currency != null
              ? `${currency.symbol}${(currency.convert * _item.price).toFixed(
                  2
                )}`
              : ""}
          </div>
        </div>
      );
    }
    return arr;
  };

  let sectionTitle = {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };
  return (
    <div className="w-full mt-6 text-center">
      <div>
        <img
          src={props.misc.CFURL + "/logos/cks-confirmation.png"}
          className="text-center"
          width="200px"
        />
        <h1 className="text-3/5xl font-bold mt-4 mb-4 text-black">
          Thank You!
        </h1>
        <h4 className="font-extrabold p-2 text-2xl">
          Your order has been placed.
        </h4>
        <p className="text-red-light font-bold text-xl">
          Please follow payment instructions below.
        </p>
      </div>
      <div className="xxl:w-container mx-auto pt-12 w-main">
        <div
          style={sectionTitle}
          className="w-full inline-flex text-lg p-2 text-white shadow-md sm:flex-col md:flex-col lg:flex-col bg-red-light p-2 mb-1"
        >
          <div className="w-1/2 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center">
            <p className="text-lg font-bold">
              Order <span className="">#{fOrderId}</span>
            </p>
          </div>
          <div className="w-1/2 p-2 text-right sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center">
            <p className="text-lg font-bold">
              Order made on: <span className="">{moment().format("LL")}</span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full inline-flex text-lg bg-white p-2 pb-6 shadow-md lg:flex-col sm:flex-col md:flex-col">
          <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:border-b-2 lg:border-b-2 md:border-b-2 border-grey-lightest sm:py-6 md:py-6 lg:py-6">
            <p className="font-bold">Payment Method:</p>
            <p>{_orderDetails.payment.method.value}</p>
          </div>
          <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:border-b-2 lg:border-b-2 md:border-b-2 border-grey-lightest sm:py-6 md:py-6 lg:py-6">
            <p className="font-bold">Shipping Destination:</p>
            <p>{_orderDetails.shipping.fullName.value}</p>
            <p>
              {_orderDetails.shipping.address.value},{" "}
              {_orderDetails.shipping.apartment
                ? _orderDetails.shipping.apartment.value
                : null}{" "}
            </p>
            <p>{_orderDetails.shipping.postalZip.value}</p>
            <p>
              {_orderDetails.shipping.city.value},{" "}
              {_orderDetails.shipping.country.value}
            </p>
          </div>
          <div className="w-1/3 p-2 text-left sm:w-full md:w-full lg:w-full lg:text-center sm:text-center md:text-center sm:py-6 md:py-6 lg:py-6">
            <p className="font-bold">Shipping Type:</p>
            <p>{_orderDetails.shipping.shippingDetail.value}</p>
            {/* <p className="font-bold sm:border-t-2 lg:border-t-2 md:border-t-2 border-grey-lightest sm:pt-4 md:pt-4 lg:pt-4">
              Shipping Details:
            </p> */}
            <p className="text-base text-red-light">
              *
              {
                props.checkout.shippingMethods.find(a => {
                  return a.tag == _orderDetails.shipping.shippingDetail.value;
                }).description
              }
            </p>
          </div>
        </div>

        {(() => {
          switch (_orderDetails.payment.method.value) {
            case "Cash":
              return (
                <div className="mt-10">
                  <div style={sectionTitle} className="bg-red-light p-2 mb-1">
                    <p className="font-bold uppercase text-center text-white p-1 text-lg">
                      Cash Payment Instructions
                    </p>
                  </div>
                  <div className="bg-white shadow-md">
                    <p className="w-main mx-auto pt-4">
                      To ensure that your cash order is successfully recieved
                      please document your order number (
                      <strong>{fOrderId}</strong>) on a piece of paper, along
                      side the requested amount in applicable currency:
                    </p>
                    <p className="font-bold text-center p-2 mt-4 text-xl">
                      VanCoast Industries
                      <br />
                      112 East 6th Ave
                      <br />
                      Vancouver, BC
                      <br />
                      V5T 1J5
                      <br />
                      Canada
                    </p>
                    <p className="mt-4 p-2 text-center pb-4">
                      It is recommended that you wrap any cash within your mail
                      (in newspaper, charcoal paper or tin foil) to ensure
                      privacy.
                    </p>
                  </div>
                </div>
              );
            case "Interac E Transfer":
              return (
                <div className="mt-10">
                  <div style={sectionTitle} className="bg-red-light p-2 mb-1">
                    <p className="font-bold uppercase text-center text-white p-1 text-lg">
                      Interac E-Transfer Instructions
                    </p>
                  </div>
                  <div className="bg-white shadow-md">
                    <p className="w-main mx-auto pt-4">
                      To complete your order please initiate an interac
                      e-transfer:
                    </p>
                    <div className="inline-flex">
                      <div className="w-1/2 text-right p-2">
                        <p>Recipient email:</p>
                        <p>Recipient name:</p>
                        <p>Message (Order Number):</p>
                        <p>Security question:</p>
                        <p>Security answer:</p>
                      </div>
                      <div className="w-1/2 text-left p-2">
                        <p>
                          <strong>organicmarketing11@gmail.com</strong>
                        </p>
                        <p>
                          <strong>Vancouver</strong>
                        </p>
                        <p>
                          <strong>{fOrderId}</strong>
                        </p>
                        <p>
                          <strong>What is your favorite color</strong>
                        </p>
                        <p>
                          <strong>green1</strong>
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 p-2 text-center pb-4">
                      <strong>Important</strong>: Interac E-Transfers may take a
                      few hours to be approved. Once a payment is successfully
                      recieved we will ship your order on the next applicable
                      business day.
                      <br />
                      To ensure your order is shipped as soon as possible,
                      please call us to confirm the transfer.
                    </p>
                  </div>
                </div>
              );
            case "Bitcoin":
              return (
                <div className="mt-10">
                  <div style={sectionTitle} className="bg-red-light p-2 mb-1">
                    <p className="font-bold uppercase text-center text-white p-1 text-lg">
                      BitCoin Instructions
                    </p>
                  </div>
                  <div className="bg-white shadow-md">
                    <p className="w-main mx-auto py-4">
                      To complete your payment with BitCoin, a new tab has been
                      opened in which you can proceed to finalize your payment.
                      <br />
                      <br />
                      <strong>Having an issue with your payment?</strong>{" "}
                      <button type="submit">Click here</button> to retry your
                      payment.
                      <br />
                    </p>
                  </div>
                </div>
              );
            case "Credit Card":
              let _ccr = props.checkout.ccResponse;
              return (
                <div className="mt-10">
                  <div style={sectionTitle} className="bg-red-light p-2 mb-1">
                    <p className="font-bold uppercase text-center text-white p-1 text-lg">
                      Credit Card Instructions
                    </p>
                  </div>
                  <div className="bg-white shadow-md">
                    <p className="w-main mx-auto pt-4" />
                    <p className="text-center p-2 mt-4 text-xl">
                      {_ccr.status == "Declined" ? (
                        <span>
                          <strong>We are unable to process your order!</strong>
                          <br />
                          Please immediately call our customer support (at +1
                          (844) 276 - 7546) to resolve any issues.
                          <br />
                          Once your payment has been recieved we will ship your
                          order on the next applicable business day.
                        </span>
                      ) : (
                        <span>
                          Please allow some time for your payment to process,
                          once your payment has been recieved we will ship your
                          order on the next applicable business day.
                        </span>
                      )}
                    </p>
                    <p className="mt-4 p-2 text-center pb-4">
                      <strong>Important</strong>: The displayed order total may
                      vary depending on fluctuations in conversion rates and
                      bank processing fees. All charges will show up as '
                      {_ccr.descriptor}' on your credit card statement once
                      successfully processed.
                      <br />
                      If you have any concerns or issues please contact our
                      customer service representatives for help.
                    </p>
                  </div>
                </div>
              );
          }
        })()}

        <div
          style={sectionTitle}
          className="w-full inline-flex mt-8 bg-red-light text-white font-bold p-1"
        >
          <div className="w-3/5 px-4 p-2 uppercase text-left font-bold text-lg">
            Product
          </div>
          <div className="w-1/5 p-2 uppercase font-bold text-lg">Qty</div>
          <div className="w-1/5 p-2 uppercase font-bold text-lg">Price</div>
        </div>
        <div className="w-full">{showProduct()}</div>
        <div className="inline-flex justify-end flex w-full mt-8 text-lg mb-4 xl:flex-col-reverse lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse">
          <div className="w-full inline-flex text-lg sm:flex-col md:flex-col xxl:border-r-2 border-grey-lightest lg:mt-4 lg:pt-4 md:pt-4 md:mt-4 xl:pt-4 xl:mt-4 sm:mt-4 sm:pt-4 sm:border-t-2 md:border-t-2 lg:border-t-2 xl:border-t-2">
            <div className="w-1/3 text-right justify-start flex p-2  sm:w-full md:w-full sm:justify-center md:justify-center sm:mr-0 md:mr-0">
              <FontAwesomeIcon icon={faQuestionCircle} className="fa-7x" />
            </div>
            <div className="w-2/3 text-left p-2 sm:w-full md:w-full sm:text-center md:text-center sm:ml-0 md:ml-0">
              <p className="font-bold text-2xl">Need help?</p>
              <p className="font-bold">We are available to assist you 24/7.</p>
              <p>Canada: (604) 563-0291</p>
              <p>USA: +1 (844) 276-7546</p>
              <p>International: +1 (604) 563-0291</p>
              <p>Email: info@cropkingseeds.com</p>
            </div>
          </div>
          <div className="w-2/5 text-right p-2 pl-6 sm:w-full md:w-full lg:w-full xl:w-full">
            <div className="inline-flex w-500 xl:w-full sm:w-full md:w-full lg:w-full">
              <div className="w-2/5 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-4/5 text-right">
                <p className="p-1">Subtotal:</p>
                <p className="p-1">Shipping:</p>
                {_orderDetails.payment.creditFee.value != 0 ? (
                  <p className="p-1">
                    Credit Card Tax (
                    {(_orderDetails.payment.creditTax * 100).toFixed(2)}%):
                  </p>
                ) : null}
                {_orderDetails.coupon != null &&
                _orderDetails.coupon.code != null ? (
                  <p className="p-1 text-red-dark">
                    Discount ({_orderDetails.payment.discountAmt}):
                  </p>
                ) : null}
                <p className="p-1">
                  Tax ({(_orderDetails.payment.cumTax * 100).toFixed(2)}%):
                </p>
                <p className="font-bold p-1 text-xl">Total:</p>
              </div>
              <div className="w-2/5 xl:w-1/5 xl:text-right text-left sm:text-right md:text-right lg:text-right lg:mr-2 xl:mr-8">
                <p className="p-1">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert *
                        (_orderDetails.payment.cartTotal.value +
                          _orderDetails.payment.discount)
                      ).toFixed(2)}`
                    : ""}
                </p>
                <p className="p-1">
                  {_orderDetails.payment.shippingFee.value != 0
                    ? currency != null
                      ? `${currency.symbol}${(
                          currency.convert *
                          _orderDetails.payment.shippingFee.value
                        ).toFixed(2)}`
                      : ""
                    : "FREE"}
                </p>
                {_orderDetails.payment.creditFee.value != 0 ? (
                  <p className="p-1">
                    {currency != null
                      ? `${currency.symbol}${(
                          currency.convert *
                          _orderDetails.payment.creditFee.value
                        ).toFixed(2)}`
                      : ""}
                  </p>
                ) : null}
                {_orderDetails.coupon != null &&
                _orderDetails.coupon.code != null ? (
                  <p className="p-1 text-red-dark">
                    {currency != null
                      ? `${currency.symbol}${(
                          currency.convert * _orderDetails.payment.discount
                        ).toFixed(2)}`
                      : ""}
                  </p>
                ) : null}
                <p className="p-1">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert * _orderDetails.payment.taxFee
                      ).toFixed(2)}`
                    : ""}
                </p>
                <p className="font-bold p-1 text-xl">
                  {currency != null
                    ? `${currency.symbol}${(
                        currency.convert *
                        _orderDetails.payment.orderTotal.value
                      ).toFixed(2)}`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
