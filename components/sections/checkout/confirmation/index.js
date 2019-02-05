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
  let orderId = _orderDetails.payment.orderId.value.toString();
  let fOrderId = [orderId.slice(0, 4), "-", orderId.slice(4), "-CKS"].join("");

  let currency = props.checkout.viewCurrency;

  console.log(_orderDetails, orderId);
  let products = Object.keys(props.cart.items);

  let showProduct = () => {
    let arr = [];
    let _items = props.cart.items;
    for (let item of Object.keys(_items)) {
      let _item = _items[item];
      arr.push(
        <div className="w-full inline-flex my-1 shadow-md h-full bg-white items-center flex p-2">
          {/* <div className="w-32 p-2 font-bold text-lg items-center flex">
            <img src={_item.product.packageImg} className="h-32" />
          </div> */}
          <div className="w-3/5">
            <div className="p-2 font-bold text-lg items-center flex">
              <a
                className="cursor-pointer hover:text-red-light"
                href={
                  href +
                  "/product/" +
                  _item.product.name.toLowerCase().replace(/ /g, "-")
                }
                target="_blank"
              >
                {_item.product.name} {_item.product.genetic} - {_item.amount}{" "}
                Seeds
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
          src="../static/img/cks-confirmation.png"
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
      <div className="w-container mx-auto pt-12">
        <div
          style={sectionTitle}
          className="inline-flex w-full text-white bg-red-light mb-1 p-1"
        >
          <div className="w-1/2 p-2 text-left">
            <p className="text-lg font-bold">
              Order <span className="">#{fOrderId}</span>
            </p>
          </div>
          <div className="w-1/2 p-2 text-right">
            <p className="text-lg font-bold">
              Order made on: <span className="">{moment().format("LL")}</span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full inline-flex text-lg bg-white p-2 pb-6 shadow-md">
          <div className="w-1/3 p-2 text-left">
            <p>Payment Method:</p>
            <p className="font-bold">{_orderDetails.payment.method.value}</p>
          </div>
          <div className="w-1/3 p-2 text-left">
            <p>Shipping Destination:</p>
            <p className="font-bold">{_orderDetails.shipping.fullName.value}</p>
            <p className="font-bold">
              {_orderDetails.shipping.address.value},{" "}
              {_orderDetails.shipping.apartment.value
                ? _orderDetails.shipping.apartment.value
                : null}{" "}
            </p>
            <p className="font-bold">
              {_orderDetails.shipping.postalZip.value}
            </p>
            <p className="font-bold">
              {_orderDetails.shipping.city.value},{" "}
              {_orderDetails.shipping.country.value}
            </p>
          </div>
          <div className="w-1/3 p-2 text-right">
            <p>Shipping Type:</p>
            <p className="font-bold">
              {_orderDetails.shipping.shippingDetail.value}
            </p>
          </div>
        </div>

        <div
          style={sectionTitle}
          className="w-full inline-flex mt-8 bg-red-light text-white font-bold p-1"
        >
          <div className="w-3/5 p-2 uppercase font-bold text-lg">Product</div>
          <div className="w-1/5 p-2 uppercase font-bold text-lg">Qty</div>
          <div className="w-1/5 p-2 uppercase font-bold text-lg">Price</div>
        </div>
        <div className="w-full">{showProduct()}</div>
        <div className="inline-flex justify-end flex w-full mt-8 text-lg">
          <div className="w-300 inline-flex">
            <div className="w-1/2 text-right p-2">
              <p className="p-1">Subtotal:</p>
              <p className="p-1">Sales Tax:</p>
              <p className="p-1">Shipping:</p>
              <p className="p-1">Discount:</p>
              <p className="font-bold p-1 text-xl">Total:</p>
            </div>
            <div className="w-1/2 text-right p-2">
              <p className="p-1">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails.payment.cartTotal.value
                    ).toFixed(2)}`
                  : ""}
              </p>
              <p className="p-1">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails.payment.taxFee
                    ).toFixed(2)}`
                  : ""}
              </p>
              <p className="p-1">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails.payment.shippingFee.value
                    ).toFixed(2)}`
                  : ""}
              </p>
              <p className="p-1">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails.payment.discount
                    ).toFixed(2)}`
                  : ""}
              </p>
              <p className="font-bold p-1 text-xl">
                {currency != null
                  ? `${currency.symbol}${(
                      currency.convert * _orderDetails.payment.orderTotal.value
                    ).toFixed(2)}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div style={sectionTitle} className="bg-red-light p-2 mb-1">
            <p className="font-bold uppercase text-center text-white p-1 text-lg">
              Cash Payment Instructions
            </p>
          </div>
          <div className="bg-white shadow-md">
            <p className="w-main mx-auto pt-4">
              To complete your order please print this order or write down your
              order number opn a piece of paper and send with your cash payment
              in either USA or Canada dollars to:
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
              Wrap your cash with newspaper, charcoal paper or tin foil for
              privacy.
            </p>
          </div>
        </div>
        <div className="w-full border-t-2 border-grey-lightest inline-flex pt-12 mt-12 text-lg pb-10">
          <div className="w-1/2 text-right justify-end flex p-2 mr-6">
            <FontAwesomeIcon icon={faQuestionCircle} className="fa-7x" />
          </div>
          <div className="w-1/2 text-left p-2 ml-6">
            <p className="font-bold text-2xl">Need help?</p>
            <p className="font-bold">We are available to assist you 24/7.</p>
            <p>Canada: (604) 563-0291</p>
            <p>USA: +1 (844) 276-7546</p>
            <p>International: +1 (604) 563-0291</p>
            <p>Email: info@cropkingseeds.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
