exports.confirmation = input => {
  let orderId = input.orderId,
    fullName = input.name,
    paymentMethod = input.paymentMethod,
    instructions,
    shippingDestination = input.shippingDestination.split("&=>"),
    shippingType = input.shippingType,
    shippingTypeDescription = input.shippingTypeDescription,
    productList = input.productList.split("&=>"),
    subtotal = input.subtotal,
    total = input.total,
    tax = input.tax,
    shipping = input.shipping,
    date = input.date;

  console.log("email sent", orderId, input.orderId);
  return {
    from: "info@cropkingseeds.com",
    to: input.email,
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
                padding-bottom: 20px;
                margin: 15px 0;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            .productDetail {
                width: 25%;
                text-align: center;
                margin: 0 auto;
            }
            .productDetailName {
                width: 50%;
                text-align: center;
                margin: 0 auto;
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
                            <p style="margin-bottom:0"><b>Payment Method:</b></p>
                            <p style="font-size: 12px;>${paymentMethod}</p>
                        </div>
                        <div style="width: 33%; padding: 0 10px">
                            <p style="margin-bottom:0"><b>Shipping Destination:</b></p>
                            <p style="font-size: 12px;>${fullName},<br/>
                            ${shippingDestination[0]},<br/>
                            ${shippingDestination[1]},<br/>
                            ${shippingDestination[2]},<br/>
                            ${shippingDestination[3]},<br/>
                            ${shippingDestination[4]}</p>
                        </div>
                        <div style="width: 33%; padding: 0 10px">
                            <p style="margin-bottom:0"><b>Shipping Type:</b></p>
                            <p style="font-size: 12px;>${shippingType}</p>
                            <p style="color:#ef5753"; font-size: 12px;>*${shippingTypeDescription}
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
                <table class="products">
                    <tr class="heading-red">
                        <td style="display:inline;width:50%;text-align:left;color:white;margin: 0; padding: 4px 10px; font-weight:bold;font-size: 1.2rem;">Product</td>
                        <td style="display:inline;width:25%;text-align:center;color:white;margin: 0; padding: 4px 10px; font-weight:bold;font-size: 1.2rem;">Qty</td>
                        <td style="display:inline;width:25%;text-align:center;color:white;margin: 0; padding: 4px 10px; font-weight:bold;font-size: 1.2rem;">Price</td>
                    </tr>
                    ${productList.toString().replace(",", "")}
                   
                </table>
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
