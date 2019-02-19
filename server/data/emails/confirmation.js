exports.contact = input => {
    return {
        from: "info@cropkingseeds.com",
        to: input.email,
        subject: "Order Confirmation - Crop King Seeds",
        html: `${input.name + input.body}`
    };
};
