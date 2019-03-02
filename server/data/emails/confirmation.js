exports.confirmation = input => {
  let orderId = input.orderId,
    fullName = input.name,
    paymentMethod = input.paymentMethod,
    instructions,
    shippingDestination = input.shippingDestination.split("&=>"),
    shippingType = input.shippingType,
    shippingTypeDescription = input.shippingTypeDescription,
    productList = input.productList,
    subtotal = input.subtotal,
    total = input.total,
    tax = input.tax,
    shipping = input.shipping,
    date = input.date;
  productList = productList.split(",").map((product, index) => {
    return product.split("x");
  });
  for (let x in productList) {
    productList[x] = productList[x].map((productDetail, ind) => {
      return `<span>${productDetail.trim()}</span>`;
    });
  }

  switch (input.paymentMethod) {
    case "Cash":
      instructions = `<div style="padding: 0 10px">
                        <p>
                            To ensure that your cash order is successfully recieved please document your order number (
                            <strong>${orderId}-CKS</strong>) on a piece of paper, along side the requested amount in
                            applicable currency:
                        </p>
                        <p style="text-align:center">
                            <b>VanCoast Industries</b>
                            <br />
                            <b>112 East 6th Ave</b>
                            <br />
                            <b>Vancouver, BC</b>
                            <br />
                            <b>V5T 1J5</b>
                            <br />
                            <b>Canada</b>
                        </p>
                        <p>
                            It is recommended that you wrap any cash within your mail (in newspaper, charcoal paper or
                            tin foil) to ensure privacy.
                        </p>
                    </div>`;
      break;
    case "Interac E Transfer":
      instructions = `<div>
                        <p style="text-align:center">
                            To complete your order please initiate an interac e-transfer:
                        </p>
                        <div style="text-align:center">
                            <p style="display:inline-block;width:40%;text-align:right;margin: 0 10px 0 0;">
                                Recipient email:<br/>
                                Recipient name:<br/>
                                Message (Order Number):<br/>
                                Security question:<br/>
                                Security answer:
                            </p>
                            <p style="display:inline-block;width:40%;text-align:left;margin: 0 10px 0 0;">
                                <strong style="margin-left: 5px;">organicmarketing11@gmail.com</strong><br/>
                                <strong style="margin-left: 5px;">Vancouver</strong><br/>
                                <strong style="margin-left: 5px;">#${orderId}-CKS</strong><br/>
                                <strong style="margin-left: 5px;">What is your favorite color</strong><br/>
                                <strong style="margin-left: 5px;">green1</strong>
                            </p> 
                        </div>
                        <p style="text-align:center">
                            <strong>Important</strong>: Interac E-Transfers may take a few hours to be approved. Once a
                            payment is successfully recieved we will ship your order on the next applicable business
                            day.
                            <br />
                            To ensure your order is shipped as soon as possible, please call us to confirm the transfer.
                        </p>
                    </div>`;
      break;
    case "Bitcoin":
      instructions = `<div>
                        <p>
                            To complete your payment with BitCoin, a new tab has been opened in which you can proceed to
                            finalize your payment.
                            <br />
                            <br />
                            <strong>Having an issue with your payment?</strong>{" "}
                            <button type="submit">Click here</button> to retry your payment.
                            <br />
                        </p>
                    </div>`;
      break;
    case "Credit Card":
      instructions = `<div>
                        <p/>
                        <p>
                            {_ccr.status == "Declined" ? (
                                <span>
                                    <strong>We are unable to process your order!</strong>
                                    <br />
                                    Please immediately call our customer support (at +1 (844) 276 - 7546) to resolve any
                                    issues.
                                    <br />
                                    Once your payment has been recieved we will ship your order on the next applicable
                                    business day.
                                </span>
                            ) : (
                                <span>
                                    Please allow some time for your payment to process, once your payment has been
                                    recieved we will ship your order on the next applicable business day.
                                </span>
                            )}
                        </p>
                        <p>
                            <strong>Important</strong>: The displayed order total may vary depending on fluctuations in
                            conversion rates and bank processing fees. All charges will show up as '{_ccr.descriptor}'
                            on your credit card statement once successfully processed.
                            <br />
                            If you have any concerns or issues please contact our customer service representatives for
                            help.
                        </p>
                    </div>`;
      break;
  }

  return {
    from: "info@cropkingseeds.com",
    to: "adamsmithvci@gmail.com",
    subject: input.subject,
    html: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,800" rel="stylesheet">
        <style>
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: 'Nunito', sans-serif;
            }
            .container {
                background-color: #f5f5f5;
                width: 100%;
                height: 100%;
                padding: 0 10px 25px 10px;
            }
            .innerContainer {
                width: 75%;
                height: 100%;
                margin: 0 auto;
            }
            .orderDetails {
                width: 100%;
                height: 200px;
                background-color: green;
            }
            .orderDetails {
                width: 100%;
                height: 200px;
                background-color: white;
                margin: 10px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            }
            .orderDetailsContent {
                width: 100%;
                height: 100%;
                display: inline-flex;
            }
            .payment {
                width: 100%;
                padding-bottom: 0 10px;
                background-color: white;
                margin: 10px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            }
            .products {
                width: 100%;
                height: 200px;
                background-color: white;
                margin: 15px 0;
                padding: 0 10px;
            }
            .help {
                width: 100%;
                height: 200px;
                display: inline-flex;
                justify-content: space-between;
                padding: 0 20px;
            }
            .thanks {
                width: 500px;
                margin: 0 auto;
                text-align: center;
            }
            .heading-red {
                height: 35px;
                width: 100%;
                background-color: #ef5753;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="innerContainer">
                <div class="thanks">
                    <img src="http://dcfgweqx7od72.cloudfront.net/logos/cks-confirmation.png" class="" width="200px" />
                    <h1>Thank you</h1>
                    <p>Your order has been placed.</p>
                    <p style="color:#ef5753">Please follow payment instructions below.</p>
                </div>
                <div class="orderDetails" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);">
                    <div class="heading-red" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);">
                        <p
                            style="color:white; padding: 4px 10px;display: flex;
                 font-weight:bold;font-size: 1.2rem;"
                        >
                            <span">Order #${orderId}-CKS</span><span style="margin: 0 0 0 auto">Date: ${date}</span>
                        </p>
                    </div>
                    <div class="orderDetailsContent">
                        <div style="width: 33%; padding: 0 10px">
                            <p><b>Payment Method:</b></p>
                            <p>${paymentMethod}</p>
                        </div>
                        <div style="width: 33%; padding: 0 10px">
                            <p><b>Shipping Destination:</b></p>
                            <p>${fullName},<br/>
                            ${shippingDestination[0]},<br/>
                            ${shippingDestination[1]},<br/>
                            ${shippingDestination[2]},<br/>
                            ${shippingDestination[3]},<br/>
                            ${shippingDestination[4]}</p>
                        </div>
                        <div style="width: 33%; padding: 0 10px">
                            <p><b>Shipping Type:</b></p>
                            <p>${shippingType}</p>
                            <p style="color:#ef5753">*${shippingTypeDescription}
                        </div>
                    </div>
                </div>
                <div class="payment" style="">
                    <div class="heading-red">
                        <p style="color:white; padding: 4px 10px; font-weight:bold;font-size: 1.2rem;text-align:center;">
                            Payment Instructions
                        </p>
                    </div>
                    <div style="padding: 0 20px">${instructions}</div>
                </div>
                <div class="products">
                    <div class="heading-red">
                        <p style="color:white; padding: 4px 10px; font-weight:bold;font-size: 1.2rem;">Product</p>
                    </div>
                    <p>
                    ${productList.join("</p><p>")}
                    </p>
                </div>
                <div class="help">
                    <div>
                    <p>
                            Need Help?
                        </p>
                        <p><b>We are available to assist you 24/7.</b></p>
                        <p>Canada: (604) 563-0291</p>
                        <p>USA: +1 (844) 276-7546</p>
                        <p>International: +1 (604) 563-0291.</p>
                        <p>Email: info@cropkingseeds.com.</p>
                    </div>
                    <div style="margin: 0 0 0 auto;">
                        <p style="text-align:right;"><span>Subtotal:</span> <span>$${subtotal.toFixed(
                          2
                        )}</span></p>
                        <p style="text-align:right;"><span>Shipping:</span> <span >$${shipping.toFixed(
                          2
                        )}</span></p>
                        <p style="text-align:right;"><span>Tax:</span> <span>$${tax.toFixed(
                          2
                        )}</span></p>
                        <p style="text-align:right;"><b>Total:</b> <b>$${total.toFixed(
                          2
                        )}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`
  };
};
