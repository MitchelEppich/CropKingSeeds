exports.contact = input => {
  return {
    from: input.email,
    to: "mitchel@vancoastind.com",
    subject: "CropKingSeeds.com Contact Form : " + input.subject,
    html: `${input.name + input.body}`
  };
};