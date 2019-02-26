exports.contact = input => {
    let paymentMethod = input.paymentMethod,
        instructions,
        shippingDestination = input.shippingDestination,
        shippingType = input.shippingType,
        products = input.products,
        subtotal = input.subtotal,
        total = input.total,
        tax = input.tax,
        shipping = input.shipping,
        date = input.date;

    products = products.map((product, index) => {
        return `<div><span>${product.name}</span><span>${product.quantity}</span><span>${product.price}</span></div>`;
    });

    switch (input.paymentMethod) {
        case "Cash":
            instructions = `<div className="bg-white shadow-md">
                        <p className="w-main mx-auto pt-4">
                            To ensure that your cash order is successfully recieved please document your order number (
                            <strong>{fOrderId}</strong>) on a piece of paper, along side the requested amount in
                            applicable currency:
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
                            It is recommended that you wrap any cash within your mail (in newspaper, charcoal paper or
                            tin foil) to ensure privacy.
                        </p>
                    </div>`;
            break;
        case "Interac E Transfer":
            instructions = `<div className="bg-white shadow-md">
                        <p className="w-main mx-auto pt-4">
                            To complete your order please initiate an interac e-transfer:
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
                            <strong>Important</strong>: Interac E-Transfers may take a few hours to be approved. Once a
                            payment is successfully recieved we will ship your order on the next applicable business
                            day.
                            <br />
                            To ensure your order is shipped as soon as possible, please call us to confirm the transfer.
                        </p>
                    </div>`;
            break;
        case "Bitcoin":
            instructions = `<div className="bg-white shadow-md">
                        <p className="w-main mx-auto py-4">
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
            instructions = `<div className="bg-white shadow-md">
                        <p className="w-main mx-auto pt-4" />
                        <p className="text-center p-2 mt-4 text-xl">
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
                        <p className="mt-4 p-2 text-center pb-4">
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
        to: input.email,
        subject: "Order Confirmation - Crop King Seeds",
        html: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <style>
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }
            .container {
                background-color: #f5f5f5;
                width: 100%;
                height: 100%;
                padding: 100px 50px;
            }
            .innerContainer {
                width: 66%;
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
                height: 300px;
                background-color: white;
                margin: 10px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            }
            .products {
                width: 100%;
                height: 200px;
                background-color: white;
                margin: 15px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            }
            .help {
                width: 100%;
                height: 200px;
                display: inline-flex;
                justify-content: space-between;
            }
            .thanks {
                width: 500px;
                margin: 0 auto;
                text-align: center;
            }
            .heading-red {
                height: 50px;
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
                    <img src="http://dcfgweqx7od72.cloudfront.net/" class="" width="200px" />
                    <h1>Thank you</h1>
                    <p>Your order has been placed.</p>
                    <p style="color:#ef5753">Please follow payment instructions below.</p>
                </div>
                <div class="orderDetails">
                    <div class="heading-red">
                        <p
                            style="color:white; padding: 15px;display: flex;
                justify-content: space-between; font-weight:bold;font-size: 1.2rem;"
                        >
                            <span>Order#</span><span>Order made on:${date}</span>
                        </p>
                    </div>
                    <div class="orderDetailsContent">
                        <div style="width: 33%; padding: 10px">
                            <p><b>Payment Method:</b></p>
                            <p>${paymentMethod}</p>
                        </div>
                        <div style="width: 33%; padding: 10px">
                            <p><b>Shipping Destination:</b></p>
                            <p>${shippingDestination}</p>
                        </div>
                        <div style="width: 33%; padding: 10px">
                            <p><b>Shipping Type:</b></p>
                            <p>${shippingType}</p>
                        </div>
                    </div>
                </div>
                <div class="payment">
                    <div class="heading-red">
                        <p style="color:white; padding: 15px; font-weight:bold;font-size: 1.2rem;">
                            Payment Instructions
                        </p>
                    </div>
                    ${instructions}
                </div>
                <div class="products">
                    <div class="heading-red">
                        <p style="color:white; padding: 15px; font-weight:bold;font-size: 1.2rem;">Product</p>
                    </div>
                    ${products}
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
                    <div>
                        <p>Subtotal: ${subtotal}</p>
                        <p>Shipping: ${shipping}</p>
                        <p>Tax: ${tax}</p>
                        <p>Total: ${total}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`
    };
};
